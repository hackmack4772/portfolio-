import React, { useState, useEffect } from 'react';
import { 
  getFirestore, 
  collection, 
  getDocs, 
  doc, 
  addDoc, 
  updateDoc, 
  deleteDoc 
} from 'firebase/firestore';
import { usePortfolio } from '../../Context/PortfolioDataContext';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { 
  FolderGit2, 
  Plus, 
  Trash2, 
  Edit2, 
  Image as ImageIcon, 
  Loader2, 
  CheckCircle, 
  AlertCircle,
  Eye,
  Github,
  Save,
  X,
  Star
} from 'lucide-react';
import { app } from '../utils/firebase';

const db = getFirestore(app);
const storage = getStorage(app);

const ProjectsSection = () => {
  const { refreshData } = usePortfolio();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [message, setMessage] = useState({ text: '', type: '' });
  
  const [projectData, setProjectData] = useState({
    title: '',
    description: '',
    category: 'web',
    technologies: '',
    demoUrl: '',
    githubUrl: '',
    imageUrl: '',
    featured: false,
    date: ''
  });
  
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState('');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const hackmackDocRef = doc(db, "hackmack", "user_projects");
      const projectsRef = collection(hackmackDocRef, "projectsData");
      const querySnapshot = await getDocs(projectsRef);
      
      const projectsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      // Sort projects by date if available, or title
      projectsList.sort((a, b) => {
        const dateA = new Date(a.date) || 0;
        const dateB = new Date(b.date) || 0;
        return dateB - dateA;
      });
      
      setProjects(projectsList);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setMessage({ text: 'Failed to load projects list', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProjectData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImageFile(e.target.files[0]);
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const uploadImage = async () => {
    if (!imageFile) return null;
    const storageRef = ref(storage, `projects/${Date.now()}_${imageFile.name}`);
    await uploadBytes(storageRef, imageFile);
    return await getDownloadURL(storageRef);
  };

  const handleAddProject = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage({ text: '', type: '' });

    if (!projectData.title.trim()) {
      setMessage({ text: 'Project Title is required.', type: 'error' });
      setSaving(false);
      return;
    }

    try {
      let projectToAdd = { 
        ...projectData,
        date: projectData.date || new Date().toISOString().split('T')[0],
        technologies: typeof projectData.technologies === 'string' 
          ? projectData.technologies.split(',').map(tech => tech.trim()).filter(Boolean)
          : projectData.technologies
      };
      
      if (imageFile) {
        const url = await uploadImage();
        if (url) projectToAdd.imageUrl = url;
      }
      
      const hackmackDocRef = doc(db, "hackmack", "user_projects");
      const docRef = await addDoc(collection(hackmackDocRef, "projectsData"), projectToAdd);
      refreshData();
      
      setProjects(prev => [{ id: docRef.id, ...projectToAdd }, ...prev]);
      
      // Reset form
      resetForm();
      setMessage({ text: 'New project card created successfully!', type: 'success' });
    } catch (error) {
      console.error("Error adding project:", error);
      setMessage({ text: 'Failed to create project card', type: 'error' });
    } finally {
      setSaving(false);
    }
  };

  const handleUpdateProject = async (e) => {
    e.preventDefault();
    if (!editingProject) return;
    
    setSaving(true);
    setMessage({ text: '', type: '' });

    try {
      let updatedProject = { 
        ...projectData,
        technologies: typeof projectData.technologies === 'string'
          ? projectData.technologies.split(',').map(tech => tech.trim()).filter(Boolean)
          : projectData.technologies
      };
      
      if (imageFile) {
        const url = await uploadImage();
        if (url) updatedProject.imageUrl = url;
      }
      
      const hackmackDocRef = doc(db, "hackmack", "user_projects");
      const docRef = doc(collection(hackmackDocRef, "projectsData"), editingProject.id);
      await updateDoc(docRef, updatedProject);
      refreshData();
      
      setProjects(prev => prev.map(p => p.id === editingProject.id ? { id: p.id, ...updatedProject } : p));
      resetForm();
      setMessage({ text: 'Project card updated successfully!', type: 'success' });
    } catch (error) {
      console.error("Error updating project:", error);
      setMessage({ text: 'Failed to update project card', type: 'error' });
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteProject = async (projectId) => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;
    
    try {
      const hackmackDocRef = doc(db, "hackmack", "user_projects");
      const docRef = doc(collection(hackmackDocRef, "projectsData"), projectId);
      await deleteDoc(docRef);
      refreshData();
      
      setProjects(prev => prev.filter(p => p.id !== projectId));
      setMessage({ text: 'Project card deleted successfully!', type: 'success' });
    } catch (error) {
      console.error("Error deleting project:", error);
      setMessage({ text: 'Failed to delete project card', type: 'error' });
    }
  };

  const handleEditProject = (project) => {
    setEditingProject(project);
    setProjectData({
      title: project.title || '',
      description: project.description || '',
      category: project.category || 'web',
      technologies: Array.isArray(project.technologies) ? project.technologies.join(', ') : '',
      demoUrl: project.demoUrl || '',
      githubUrl: project.githubUrl || '',
      imageUrl: project.imageUrl || '',
      featured: !!project.featured,
      date: project.date || ''
    });
    setImagePreview(project.imageUrl || '');
    setImageFile(null);
  };

  const resetForm = () => {
    setEditingProject(null);
    setProjectData({
      title: '',
      description: '',
      category: 'web',
      technologies: '',
      demoUrl: '',
      githubUrl: '',
      imageUrl: '',
      featured: false,
      date: ''
    });
    setImagePreview('');
    setImageFile(null);
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-3">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-xs font-mono uppercase tracking-widest text-text-muted animate-pulse">Loading Projects...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 pb-10">
      
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-text-base flex items-center gap-2">
            <FolderGit2 className="w-5 h-5 text-primary" />
            <span>Project Portfolio Manager</span>
          </h2>
          <p className="text-xs text-text-muted mt-1">Configure project showcase tiles, github code links, and screen previews.</p>
        </div>
      </div>

      {/* Message feedback */}
      {message.text && (
        <div className={`flex items-center gap-2 p-4 rounded-xl border ${
          message.type === 'success' 
            ? 'border-green-500/30 bg-green-500/10 text-green-500' 
            : 'border-red-500/30 bg-red-500/10 text-red-500'
        }`}>
          {message.type === 'success' ? <CheckCircle className="w-4.5 h-4.5 shrink-0" /> : <AlertCircle className="w-4.5 h-4.5 shrink-0" />}
          <span className="text-xs font-medium">{message.text}</span>
        </div>
      )}

      {/* Editor layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left column: Add / Edit Form Card */}
        <div className="lg:col-span-5 flex flex-col gap-6 lg:sticky lg:top-28">
          <form 
            onSubmit={editingProject ? handleUpdateProject : handleAddProject}
            className="glass-panel p-6 rounded-3xl border border-border-base/50 shadow-md flex flex-col gap-4 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-primary to-accent opacity-35" />
            
            <h3 className="text-xs font-mono uppercase tracking-widest text-text-base flex items-center justify-between border-b border-border-base/40 pb-2">
              <span className="flex items-center gap-1.5"><FolderGit2 className="w-4 h-4 text-accent" /> {editingProject ? 'Edit Project Specs' : 'Create Project Specs'}</span>
              {editingProject && (
                <button 
                  type="button"
                  onClick={resetForm}
                  className="p-1 rounded-lg hover:bg-bg-sub/80 text-text-muted hover:text-text-base cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </h3>

            {/* Title */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-mono text-text-muted uppercase tracking-wider">Project Title</label>
              <input 
                type="text" 
                name="title" 
                value={projectData.title} 
                onChange={handleInputChange} 
                placeholder="e.g. Chat App, AI Engine"
                className="w-full px-4 py-2 bg-bg-sub/30 border border-border-base/40 rounded-xl text-xs text-text-base focus:outline-none"
                required
              />
            </div>

            {/* Description */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-mono text-text-muted uppercase tracking-wider">Project Summary</label>
              <textarea 
                name="description" 
                value={projectData.description} 
                onChange={handleInputChange} 
                placeholder="Write summary here..."
                className="w-full px-4 py-2 bg-bg-sub/30 border border-border-base/40 rounded-xl text-xs text-text-base focus:outline-none resize-none"
                rows="4"
              />
            </div>

            {/* Category and Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono text-text-muted uppercase tracking-wider">Category</label>
                <select 
                  name="category" 
                  value={projectData.category} 
                  onChange={handleInputChange} 
                  className="w-full px-4 py-2 bg-bg-sub/30 border border-border-base/40 rounded-xl text-xs text-text-muted focus:outline-none cursor-pointer"
                >
                  <option value="web">Web</option>
                  <option value="frontend">Frontend</option>
                  <option value="backend">Backend</option>
                  <option value="mobile">Mobile</option>
                  <option value="fullstack">Fullstack</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono text-text-muted uppercase tracking-wider">Release Date</label>
                <input 
                  type="date" 
                  name="date" 
                  value={projectData.date} 
                  onChange={handleInputChange} 
                  className="w-full px-4 py-2 bg-bg-sub/30 border border-border-base/40 rounded-xl text-xs text-text-muted focus:outline-none"
                />
              </div>
            </div>

            {/* Technologies */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-mono text-text-muted uppercase tracking-wider">Technologies (Comma separated)</label>
              <input 
                type="text" 
                name="technologies" 
                value={projectData.technologies} 
                onChange={handleInputChange} 
                placeholder="e.g. React, Express, MySQL"
                className="w-full px-4 py-2 bg-bg-sub/30 border border-border-base/40 rounded-xl text-xs text-text-base focus:outline-none"
              />
            </div>

            {/* URLs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono text-text-muted uppercase tracking-wider">Demo / Live Link</label>
                <input 
                  type="url" 
                  name="demoUrl" 
                  value={projectData.demoUrl} 
                  onChange={handleInputChange} 
                  placeholder="https://..."
                  className="w-full px-4 py-2 bg-bg-sub/30 border border-border-base/40 rounded-xl text-xs text-text-base focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono text-text-muted uppercase tracking-wider">GitHub Code Link</label>
                <input 
                  type="url" 
                  name="githubUrl" 
                  value={projectData.githubUrl} 
                  onChange={handleInputChange} 
                  placeholder="https://github.com/..."
                  className="w-full px-4 py-2 bg-bg-sub/30 border border-border-base/40 rounded-xl text-xs text-text-base focus:outline-none"
                />
              </div>
            </div>

            {/* Image Preview & Upload */}
            <div className="flex flex-col gap-2.5 border-t border-border-base/30 pt-3">
              <label className="text-[10px] font-mono text-text-muted uppercase tracking-wider">Project Screen Preview</label>
              <div className="flex items-center gap-4">
                {imagePreview ? (
                  <div className="w-16 h-12 rounded bg-bg-sub/50 border border-border-base/50 overflow-hidden shrink-0">
                    <img src={imagePreview} className="w-full h-full object-cover" alt="preview" />
                  </div>
                ) : null}
                <div className="relative flex-1">
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageChange} 
                    className="absolute inset-0 opacity-0 w-full cursor-pointer h-full z-10"
                    id="project-image"
                  />
                  <div className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border border-border-base text-xs font-mono uppercase hover:border-primary/50 hover:bg-primary/10 transition-all cursor-pointer">
                    <ImageIcon className="w-3.5 h-3.5 text-primary" />
                    <span>Upload Screen</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured and Save Actions */}
            <div className="flex items-center justify-between border-t border-border-base/30 pt-4">
              <label className="flex items-center gap-2 text-xs font-mono text-text-muted cursor-pointer select-none">
                <input 
                  type="checkbox" 
                  name="featured" 
                  checked={projectData.featured} 
                  onChange={handleInputChange} 
                  className="w-4 h-4 rounded border-border-base bg-bg-sub text-accent focus:ring-accent cursor-pointer"
                />
                <span className="flex items-center gap-1"><Star className={`w-3.5 h-3.5 ${projectData.featured ? 'text-accent fill-accent' : ''}`} /> Highlight Project</span>
              </label>
              
              <button 
                type="submit"
                disabled={saving}
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider text-bg-base bg-accent font-bold hover:bg-accent/80 hover:shadow-[0_0_12px_rgba(12,251,255,0.25)] transition-all cursor-pointer select-none"
              >
                {saving ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Save className="w-3.5 h-3.5" />}
                <span>{saving ? 'Syncing...' : editingProject ? 'Update' : 'Publish'}</span>
              </button>
            </div>

          </form>
        </div>

        {/* Right column: Projects Grid List */}
        <div className="lg:col-span-7 flex flex-col gap-6 w-full">
          {projects.length === 0 ? (
            <div className="glass-panel p-10 rounded-3xl border border-border-base/50 text-center flex flex-col items-center justify-center gap-2">
              <FolderGit2 className="w-8 h-8 text-text-muted animate-pulse" />
              <p className="text-sm font-mono text-text-muted">No projects found. Publish your first project card.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {projects.map((project) => (
                <div 
                  key={project.id}
                  className="glass-panel rounded-2xl overflow-hidden border border-border-base/50 shadow-md hover:border-primary/30 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="relative h-28 bg-bg-sub/20 overflow-hidden flex items-center justify-center border-b border-border-base/30">
                    {project.imageUrl ? (
                      <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />
                    ) : (
                      <FolderGit2 className="w-8 h-8 text-text-muted opacity-40" />
                    )}
                    {project.featured && (
                      <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-accent/90 border border-accent text-[8px] font-mono font-bold text-bg-base flex items-center gap-0.5 uppercase tracking-wider">
                        <Star className="w-2.5 h-2.5 fill-current" /> Highlighted
                      </div>
                    )}
                    <div className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded bg-bg-base/90 border border-border-base/60 text-[8px] font-mono font-bold text-text-muted uppercase tracking-wider">
                      {project.category || 'web'}
                    </div>
                  </div>

                  <div className="p-4 flex flex-col gap-3 flex-grow justify-between">
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-text-base leading-tight truncate">{project.title}</h4>
                      <p className="text-[10px] text-text-muted font-mono leading-tight">{project.date}</p>
                    </div>

                    <div className="flex gap-2 justify-end pt-3 border-t border-border-base/30">
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-bg-sub/50 border border-border-base/40 text-text-muted hover:text-primary transition-colors cursor-pointer">
                          <Github className="w-3.5 h-3.5" />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded bg-bg-sub/50 border border-border-base/40 text-text-muted hover:text-accent transition-colors cursor-pointer">
                          <Eye className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <button 
                        onClick={() => handleEditProject(project)}
                        className="p-2 rounded bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer"
                        title="Edit Project"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button 
                        onClick={() => handleDeleteProject(project.id)}
                        className="p-2 rounded bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
                        title="Delete Project"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

    </div>
  );
};

export default ProjectsSection;