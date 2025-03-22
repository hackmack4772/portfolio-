import React, { useState, useEffect } from 'react';
import { 
  getFirestore, 
  collection, 
  getDocs, 
  doc, 
  setDoc, 
  addDoc, 
  updateDoc, 
  deleteDoc 
} from 'firebase/firestore';
import '../styles/admin-styles.css';

const SkillsSection = () => {
  const [skills, setSkills] = useState([]);
  const [skillCategories, setSkillCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingSkill, setEditingSkill] = useState(null);
  const [newCategory, setNewCategory] = useState('');
  const [message, setMessage] = useState({ text: '', type: '' });
  const [skillData, setSkillData] = useState({
    name: '',
    category: '',
    proficiency: 50,
    icon: '',
    order: 0
  });
  
  const db = getFirestore();

  useEffect(() => {
    fetchSkillsData();
  }, []);

  const fetchSkillsData = async () => {
    setLoading(true);
    try {
      // Fetch skills
      const skillsCol = collection(db, 'skills');
      const skillsSnapshot = await getDocs(skillsCol);
      const skillsList = skillsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      // Sort by category and then by order
      skillsList.sort((a, b) => {
        if (a.category === b.category) {
          return a.order - b.order;
        }
        return a.category.localeCompare(b.category);
      });
      
      setSkills(skillsList);
      
      // Extract unique categories
      const categories = [...new Set(skillsList.map(skill => skill.category))];
      setSkillCategories(categories);
    } catch (error) {
      console.error("Error fetching skills:", error);
      setMessage({ text: 'Failed to load skills data', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setSkillData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseInt(value, 10) : value
    }));
  };

  const addCategory = () => {
    if (newCategory.trim() === '') return;
    
    if (!skillCategories.includes(newCategory.trim())) {
      setSkillCategories(prev => [...prev, newCategory.trim()]);
      setSkillData(prev => ({
        ...prev,
        category: newCategory.trim()
      }));
    }
    
    setNewCategory('');
  };

  const handleAddSkill = async () => {
    setMessage({ text: '', type: '' });

    try {
      let skillToAdd = { ...skillData };
      
      // Set order to the last position if not specified
      if (!skillToAdd.order) {
        const categorySkills = skills.filter(s => s.category === skillToAdd.category);
        skillToAdd.order = categorySkills.length;
      }
      
      const docRef = await addDoc(collection(db, "skills"), skillToAdd);
      
      // Add the new skill to the local state
      setSkills(prev => {
        const newSkills = [...prev, { id: docRef.id, ...skillToAdd }];
        // Sort by category and then by order
        return newSkills.sort((a, b) => {
          if (a.category === b.category) {
            return a.order - b.order;
          }
          return a.category.localeCompare(b.category);
        });
      });
      
      // Clear the form
      setSkillData({
        name: '',
        category: skillData.category, // Keep the selected category
        proficiency: 50,
        icon: '',
        order: 0
      });
      
      setMessage({ text: 'Skill added successfully!', type: 'success' });
    } catch (error) {
      console.error("Error adding skill:", error);
      setMessage({ text: 'Failed to add skill', type: 'error' });
    }
  };

  const handleUpdateSkill = async () => {
    if (!editingSkill) return;
    
    setMessage({ text: '', type: '' });
    
    try {
      let updatedSkill = { ...skillData };
      
      const docRef = doc(db, "skills", editingSkill.id);
      await updateDoc(docRef, updatedSkill);
      
      // Update the skill in local state
      setSkills(prev => {
        const updatedSkills = prev.map(skill => 
          skill.id === editingSkill.id 
            ? { id: skill.id, ...updatedSkill } 
            : skill
        );
        // Sort by category and then by order
        return updatedSkills.sort((a, b) => {
          if (a.category === b.category) {
            return a.order - b.order;
          }
          return a.category.localeCompare(b.category);
        });
      });
      
      setEditingSkill(null);
      setSkillData({
        name: '',
        category: skillData.category, // Keep the selected category
        proficiency: 50,
        icon: '',
        order: 0
      });
      
      setMessage({ text: 'Skill updated successfully!', type: 'success' });
    } catch (error) {
      console.error("Error updating skill:", error);
      setMessage({ text: 'Failed to update skill', type: 'error' });
    }
  };

  const handleDeleteSkill = async (skillId) => {
    if (!confirm('Are you sure you want to delete this skill?')) return;
    
    try {
      await deleteDoc(doc(db, "skills", skillId));
      
      // Remove the skill from local state
      setSkills(prev => prev.filter(skill => skill.id !== skillId));
      
      setMessage({ text: 'Skill deleted successfully!', type: 'success' });
    } catch (error) {
      console.error("Error deleting skill:", error);
      setMessage({ text: 'Failed to delete skill', type: 'error' });
    }
  };

  const handleEditSkill = (skill) => {
    setEditingSkill(skill);
    setSkillData({
      name: skill.name || '',
      category: skill.category || '',
      proficiency: skill.proficiency || 50,
      icon: skill.icon || '',
      order: skill.order || 0
    });
  };

  const cancelEdit = () => {
    setEditingSkill(null);
    setSkillData({
      name: '',
      category: '',
      proficiency: 50,
      icon: '',
      order: 0
    });
  };

  if (loading) {
    return <div className="admin-loading">Loading skills...</div>;
  }

  return (
    <div className="admin-section">
      <div className="admin-section-header">
        <h2>{editingSkill ? 'Edit Skill' : 'Add New Skill'}</h2>
        {editingSkill && (
          <button 
            className="admin-btn admin-btn-secondary" 
            onClick={cancelEdit}
          >
            Cancel Edit
          </button>
        )}
      </div>
      
      {message.text && (
        <div className={`admin-alert admin-alert-${message.type === 'success' ? 'success' : 'danger'}`}>
          {message.text}
        </div>
      )}
      
      <div className="admin-form-container">
        <div className="admin-form-group">
          <label>Skill Name</label>
          <input 
            type="text" 
            name="name" 
            value={skillData.name} 
            onChange={handleInputChange} 
            className="admin-form-control"
            placeholder="e.g. React, JavaScript, Photoshop"
            required
          />
        </div>
        
        <div className="admin-form-group">
          <label>Icon (FontAwesome class)</label>
          <input 
            type="text" 
            name="icon" 
            value={skillData.icon} 
            onChange={handleInputChange} 
            className="admin-form-control"
            placeholder="e.g. fa-react, fa-js, fa-photoshop"
          />
        </div>
        
        <div className="admin-form-row">
          <div className="admin-form-group admin-form-group-half">
            <label>Category</label>
            <select 
              name="category" 
              value={skillData.category} 
              onChange={handleInputChange} 
              className="admin-form-control"
              required
            >
              <option value="">Select a category</option>
              {skillCategories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>
          
          <div className="admin-form-group admin-form-group-half">
            <label>New Category</label>
            <div className="admin-form-inline">
              <input 
                type="text" 
                value={newCategory} 
                onChange={(e) => setNewCategory(e.target.value)} 
                className="admin-form-control"
                placeholder="Add new category"
              />
              <button 
                className="admin-btn admin-btn-secondary" 
                onClick={addCategory}
              >
                Add
              </button>
            </div>
          </div>
        </div>
        
        <div className="admin-form-row">
          <div className="admin-form-group admin-form-group-half">
            <label>Proficiency (%): {skillData.proficiency}</label>
            <input 
              type="range" 
              name="proficiency" 
              min="0" 
              max="100" 
              value={skillData.proficiency} 
              onChange={handleInputChange} 
              className="admin-form-control"
            />
          </div>
          
          <div className="admin-form-group admin-form-group-half">
            <label>Display Order</label>
            <input 
              type="number" 
              name="order" 
              value={skillData.order} 
              onChange={handleInputChange} 
              className="admin-form-control"
              min="0"
            />
          </div>
        </div>
        
        <div className="admin-form-actions">
          <button 
            className="admin-btn admin-btn-primary" 
            onClick={editingSkill ? handleUpdateSkill : handleAddSkill}
          >
            {editingSkill ? 'Update Skill' : 'Add Skill'}
          </button>
        </div>
      </div>
      
      <div className="admin-section-divider">
        <h3>Skills by Category</h3>
      </div>
      
      {skillCategories.length === 0 ? (
        <p className="admin-no-items">No skill categories found. Add your first skill above.</p>
      ) : (
        skillCategories.map((category, index) => (
          <div key={index} className="admin-skills-category">
            <h3 className="admin-skills-category-title">{category}</h3>
            <div className="admin-skills-list">
              {skills
                .filter(skill => skill.category === category)
                .map(skill => (
                  <div key={skill.id} className="admin-skill-item">
                    <div className="admin-skill-icon">
                      {skill.icon ? <i className={`fa ${skill.icon}`}></i> : ''}
                    </div>
                    <div className="admin-skill-content">
                      <h4>{skill.name}</h4>
                      <div className="admin-skill-proficiency-wrapper">
                        <div className="admin-skill-proficiency-label">{skill.proficiency}%</div>
                        <div className="admin-skill-proficiency-bar">
                          <div 
                            className="admin-skill-proficiency-progress" 
                            style={{ width: `${skill.proficiency}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="admin-skill-order">Order: {skill.order}</div>
                    </div>
                    <div className="admin-skill-actions">
                      <button 
                        className="admin-btn admin-btn-secondary admin-btn-sm" 
                        onClick={() => handleEditSkill(skill)}
                      >
                        Edit
                      </button>
                      <button 
                        className="admin-btn admin-btn-danger admin-btn-sm" 
                        onClick={() => handleDeleteSkill(skill.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SkillsSection; 