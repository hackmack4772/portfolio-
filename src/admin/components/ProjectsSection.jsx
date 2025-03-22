import React, { useState, useEffect } from 'react';
import { 
  getFirestore, 
  collection, 
  doc, 
  getDocs, 
  getDoc,
  addDoc, 
  updateDoc, 
  deleteDoc, 
  serverTimestamp,
  query,
  orderBy
} from 'firebase/firestore';
import { 
  getStorage, 
  ref, 
  uploadBytesResumable, 
  getDownloadURL, 
  deleteObject 
} from 'firebase/storage';
import { app } from '../utils/firebase';
import '../styles/admin-styles.css';

const db = getFirestore(app);
const storage = getStorage(app);

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [message, setMessage] = useState({ text: '', type: '' });
  const [editingProject, setEditingProject] = useState(null);
  const [projectData, setProjectData] = useState({
    title: '',
    description: '',
    technologies: [],
    technologyInput: '',
    githubLink: '',
    demoLink: '',
    imageURL: '',
    featured: false,
    order: 0
  });
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');

  // Fetch projects on component mount
  useEffect(() => {
    fetchProjects();
  }, []);

  // Fetch all projects from Firestore
  const fetchProjects = async () => {
    try {
      setLoading(true);
      const projectsQuery = query(collection(db, "projects"), orderBy("order", "asc"));
      const querySnapshot = await getDocs(projectsQuery);
      
      const projectsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      setProjects(projectsList);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setMessage({ text: `Error fetching projects: ${error.message}`, type: 'error' });
      setLoading(false);
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProjectData({
      ...projectData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Handle technology input and add to array
  const handleAddTechnology = () => {
    if (projectData.technologyInput.trim() !== '') {
      if (!projectData.technologies.includes(projectData.technologyInput.trim())) {
        setProjectData({
          ...projectData,
          technologies: [...projectData.technologies, projectData.technologyInput.trim()],
          technologyInput: ''
        });
      }
    }
  };

  // Handle technology removal
  const handleRemoveTechnology = (tech) => {
    setProjectData({
      ...projectData,
      technologies: projectData.technologies.filter(t => t !== tech)
    });
  };

  // Handle technology input key press (Enter)
  const handleTechKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTechnology();
    }
  };

  // Handle image file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      
      // Create a preview URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Upload image to Firebase Storage
  const uploadImage = async (projectId) => {
    if (!imageFile) return null;
    
    setUploading(true);
    setUploadProgress(0);
    
    try {
      const storageRef = ref(storage, `projects/${projectId}/${imageFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);
      
      return new Promise((resolve, reject) => {
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setUploadProgress(progress);
          },
          (error) => {
            setUploading(false);
            reject(error);
          },
          async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            setUploading(false);
            setUploadProgress(0);
            resolve(downloadURL);
          }
        );
      });
    } catch (error) {
      setUploading(false);
      setUploadProgress(0);
      console.error("Error uploading image:", error);
      throw error;
    }
  };

  // Add a new project
  const handleAddProject = async (e) => {
    e.preventDefault();
    
    try {
      setLoading(true);
      
      // Add document to Firestore first to get the ID
      const projectRef = await addDoc(collection(db, "projects"), {
        title: projectData.title,
        description: projectData.description,
        technologies: projectData.technologies,
        githubLink: projectData.githubLink,
        demoLink: projectData.demoLink,
        imageURL: '',
        featured: projectData.featured,
        order: parseInt(projectData.order) || 0,
        createdAt: serverTimestamp()
      });
      
      let imageURL = '';
      
      // Upload image if selected
      if (imageFile) {
        imageURL = await uploadImage(projectRef.id);
        
        // Update the document with the image URL
        await updateDoc(doc(db, "projects", projectRef.id), {
          imageURL: imageURL
        });
      }
      
      setMessage({ text: 'Project added successfully!', type: 'success' });
      
      // Reset form
      setProjectData({
        title: '',
        description: '',
        technologies: [],
        technologyInput: '',
        githubLink: '',
        demoLink: '',
        imageURL: '',
        featured: false,
        order: 0
      });
      setImageFile(null);
      setPreviewUrl('');
      
      // Refresh projects list
      await fetchProjects();
    } catch (error) {
      console.error("Error adding project:", error);
      setMessage({ text: `Error adding project: ${error.message}`, type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  // Edit an existing project
  const handleEditProject = (project) => {
    setEditingProject(project.id);
    setProjectData({
      title: project.title,
      description: project.description,
      technologies: project.technologies || [],
      technologyInput: '',
      githubLink: project.githubLink || '',
      demoLink: project.demoLink || '',
      imageURL: project.imageURL || '',
      featured: project.featured || false,
      order: project.order || 0
    });
    setPreviewUrl(project.imageURL || '');
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingProject(null);
    setProjectData({
      title: '',
      description: '',
      technologies: [],
      technologyInput: '',
      githubLink: '',
      demoLink: '',
      imageURL: '',
      featured: false,
      order: 0
    });
    setImageFile(null);
    setPreviewUrl('');
  };

  // Update an existing project
  const handleUpdateProject = async (e) => {
    e.preventDefault();
    
    if (!editingProject) return;
    
    try {
      setLoading(true);
      
      let imageURL = projectData.imageURL;
      
      // Upload new image if selected
      if (imageFile) {
        // Delete old image if exists
        if (projectData.imageURL) {
          try {
            const oldImageRef = ref(storage, projectData.imageURL);
            await deleteObject(oldImageRef);
          } catch (error) {
            console.log("No previous image to delete or error:", error);
          }
        }
        
        imageURL = await uploadImage(editingProject);
      }
      
      // Update the document
      await updateDoc(doc(db, "projects", editingProject), {
        title: projectData.title,
        description: projectData.description,
        technologies: projectData.technologies,
        githubLink: projectData.githubLink,
        demoLink: projectData.demoLink,
        imageURL: imageURL,
        featured: projectData.featured,
        order: parseInt(projectData.order) || 0,
        updatedAt: serverTimestamp()
      });
      
      setMessage({ text: 'Project updated successfully!', type: 'success' });
      
      // Reset form and editing state
      handleCancelEdit();
      
      // Refresh projects list
      await fetchProjects();
    } catch (error) {
      console.error("Error updating project:", error);
      setMessage({ text: `Error updating project: ${error.message}`, type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  // Delete a project
  const handleDeleteProject = async (projectId, imageURL) => {
    if (!window.confirm("Are you sure you want to delete this project?")) {
      return;
    }
    
    try {
      setLoading(true);
      
      // Delete image from storage if exists
      if (imageURL) {
        try {
          const imageRef = ref(storage, imageURL);
          await deleteObject(imageRef);
        } catch (error) {
          console.log("Error deleting image or no image to delete:", error);
        }
      }
      
      // Delete document from Firestore
      await deleteDoc(doc(db, "projects", projectId));
      
      setMessage({ text: 'Project deleted successfully!', type: 'success' });
      
      // Refresh projects list
      await fetchProjects();
    } catch (error) {
      console.error("Error deleting project:", error);
      setMessage({ text: `Error deleting project: ${error.message}`, type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="admin-loading">Loading projects...</div>;
  }

  return (
    <div className="admin-section admin-projects-section">
      <h2>Manage Projects</h2>
      
      {message.text && (
        <div className={`admin-alert admin-alert-${message.type}`}>
          {message.text}
          <button 
            className="admin-alert-close" 
            onClick={() => setMessage({ text: '', type: '' })}
          >
            ×
          </button>
        </div>
      )}
      
      <form onSubmit={editingProject ? handleUpdateProject : handleAddProject} className="admin-form">
        <h3>{editingProject ? 'Edit Project' : 'Add New Project'}</h3>
        
        <div className="admin-form-group">
          <label htmlFor="title">Project Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={projectData.title}
            onChange={handleChange}
            className="admin-form-control"
            required
          />
        </div>
        
        <div className="admin-form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={projectData.description}
            onChange={handleChange}
            className="admin-form-control"
            rows="4"
            required
          ></textarea>
        </div>
        
        <div className="admin-form-group">
          <label htmlFor="technologyInput">Technologies</label>
          <div className="admin-tech-input-container">
            <input
              type="text"
              id="technologyInput"
              name="technologyInput"
              value={projectData.technologyInput}
              onChange={handleChange}
              onKeyPress={handleTechKeyPress}
              className="admin-form-control"
              placeholder="Add technology and press Enter"
            />
            <button 
              type="button" 
              onClick={handleAddTechnology}
              className="admin-button admin-button-small"
            >
              Add
            </button>
          </div>
          <div className="admin-tech-tags">
            {projectData.technologies.map((tech, index) => (
              <span key={index} className="admin-tech-tag">
                {tech}
                <button 
                  type="button" 
                  onClick={() => handleRemoveTechnology(tech)}
                  className="admin-tech-tag-remove"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>
        
        <div className="admin-form-row">
          <div className="admin-form-group">
            <label htmlFor="githubLink">GitHub Link</label>
            <input
              type="url"
              id="githubLink"
              name="githubLink"
              value={projectData.githubLink}
              onChange={handleChange}
              className="admin-form-control"
              placeholder="https://github.com/yourusername/project"
            />
          </div>
          
          <div className="admin-form-group">
            <label htmlFor="demoLink">Demo Link</label>
            <input
              type="url"
              id="demoLink"
              name="demoLink"
              value={projectData.demoLink}
              onChange={handleChange}
              className="admin-form-control"
              placeholder="https://your-project-demo.com"
            />
          </div>
        </div>
        
        <div className="admin-form-group">
          <label htmlFor="projectImage">Project Image</label>
          <input
            type="file"
            id="projectImage"
            name="projectImage"
            onChange={handleImageChange}
            className="admin-form-control"
            accept="image/*"
          />
          {uploading && (
            <div className="admin-upload-progress">
              <div 
                className="admin-upload-progress-bar" 
                style={{ width: `${uploadProgress}%` }}
              ></div>
              <span>{Math.round(uploadProgress)}%</span>
            </div>
          )}
          {previewUrl && (
            <div className="admin-image-preview">
              <img src={previewUrl} alt="Project preview" />
              {!imageFile && (
                <span className="admin-image-preview-label">Current image</span>
              )}
            </div>
          )}
        </div>
        
        <div className="admin-form-row">
          <div className="admin-form-group admin-checkbox-group">
            <label>
              <input
                type="checkbox"
                name="featured"
                checked={projectData.featured}
                onChange={handleChange}
              />
              Featured Project
            </label>
          </div>
          
          <div className="admin-form-group">
            <label htmlFor="order">Display Order</label>
            <input
              type="number"
              id="order"
              name="order"
              value={projectData.order}
              onChange={handleChange}
              className="admin-form-control"
              min="0"
            />
            <small className="admin-form-text">Lower numbers appear first</small>
          </div>
        </div>
        
        <div className="admin-form-actions">
          {editingProject ? (
            <>
              <button 
                type="submit" 
                className="admin-button admin-button-primary"
                disabled={loading || uploading}
              >
                {loading ? 'Updating...' : 'Update Project'}
              </button>
              <button 
                type="button" 
                className="admin-button admin-button-secondary"
                onClick={handleCancelEdit}
                disabled={loading || uploading}
              >
                Cancel
              </button>
            </>
          ) : (
            <button 
              type="submit" 
              className="admin-button admin-button-primary"
              disabled={loading || uploading}
            >
              {loading ? 'Adding...' : 'Add Project'}
            </button>
          )}
        </div>
      </form>
      
      <h3 className="admin-projects-list-title">Your Projects</h3>
      
      {loading && !editingProject ? (
        <div className="admin-loading">Loading projects...</div>
      ) : projects.length === 0 ? (
        <p className="admin-no-items">No projects yet. Add your first project above.</p>
      ) : (
        <div className="admin-projects-list">
          {projects.map(project => (
            <div key={project.id} className="admin-project-card">
              {project.imageURL ? (
                <div className="admin-project-image">
                  <img src={project.imageURL} alt={project.title} />
                </div>
              ) : (
                <div className="admin-project-image admin-project-no-image">
                  No image
                </div>
              )}
              
              <div className="admin-project-content">
                <h4 className="admin-project-title">
                  {project.title}
                  {project.featured && <span className="admin-featured-badge">Featured</span>}
                </h4>
                
                <p className="admin-project-description">
                  {project.description.length > 150 
                    ? `${project.description.substring(0, 150)}...` 
                    : project.description}
                </p>
                
                <div className="admin-project-technologies">
                  {project.technologies?.map((tech, index) => (
                    <span key={index} className="admin-tech-tag admin-tech-tag-small">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="admin-project-links">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="admin-project-link"
                    >
                      GitHub
                    </a>
                  )}
                  
                  {project.demoLink && (
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="admin-project-link"
                    >
                      Demo
                    </a>
                  )}
                </div>
                
                <div className="admin-project-order">
                  Order: {project.order || 0}
                </div>
              </div>
              
              <div className="admin-project-actions">
                <button 
                  className="admin-button admin-button-small admin-button-edit"
                  onClick={() => handleEditProject(project)}
                  disabled={loading || uploading || editingProject}
                >
                  Edit
                </button>
                <button 
                  className="admin-button admin-button-small admin-button-delete"
                  onClick={() => handleDeleteProject(project.id, project.imageURL)}
                  disabled={loading || uploading || editingProject}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsSection; 