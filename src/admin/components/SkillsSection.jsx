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
import { 
  Code, 
  Plus, 
  Trash2, 
  Edit2, 
  FolderPlus, 
  Sliders, 
  CheckCircle2, 
  AlertCircle,
  Save,
  X
} from 'lucide-react';

const SkillsSection = () => {
  const { refreshData } = usePortfolio();
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
      const skillsCol = collection(db, 'skills');
      const skillsSnapshot = await getDocs(skillsCol);
      const skillsList = skillsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      // Sort by category, then order
      skillsList.sort((a, b) => {
        if (a.category === b.category) {
          return (a.order || 0) - (b.order || 0);
        }
        return a.category?.localeCompare(b.category) || 0;
      });
      
      setSkills(skillsList);
      
      const categories = [...new Set(skillsList.map(skill => skill.category).filter(Boolean))];
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
    if (!skillData.name.trim() || !skillData.category) {
      setMessage({ text: 'Skill Name and Category are required.', type: 'error' });
      return;
    }

    try {
      let skillToAdd = { ...skillData };
      if (!skillToAdd.order) {
        const categorySkills = skills.filter(s => s.category === skillToAdd.category);
        skillToAdd.order = categorySkills.length;
      }
      
      const docRef = await addDoc(collection(db, "skills"), skillToAdd);
      refreshData();
      
      setSkills(prev => {
        const newSkills = [...prev, { id: docRef.id, ...skillToAdd }];
        return newSkills.sort((a, b) => {
          if (a.category === b.category) return (a.order || 0) - (b.order || 0);
          return a.category?.localeCompare(b.category) || 0;
        });
      });
      
      setSkillData({
        name: '',
        category: skillData.category,
        proficiency: 50,
        icon: '',
        order: 0
      });
      
      setMessage({ text: 'Skill added to database successfully!', type: 'success' });
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
      refreshData();
      
      setSkills(prev => {
        const updatedSkills = prev.map(skill => 
          skill.id === editingSkill.id ? { id: skill.id, ...updatedSkill } : skill
        );
        return updatedSkills.sort((a, b) => {
          if (a.category === b.category) return (a.order || 0) - (b.order || 0);
          return a.category?.localeCompare(b.category) || 0;
        });
      });
      
      setEditingSkill(null);
      setSkillData({
        name: '',
        category: skillData.category,
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
    if (!window.confirm('Are you sure you want to delete this skill?')) return;
    
    try {
      await deleteDoc(doc(db, "skills", skillId));
      refreshData();
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
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-3">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-xs font-mono uppercase tracking-widest text-text-muted animate-pulse">Loading Skills List...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8 pb-10">
      
      {/* Heading */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-text-base flex items-center gap-2">
            <Code className="w-5 h-5 text-primary" />
            <span>Skills & Proficiencies Manager</span>
          </h2>
          <p className="text-xs text-text-muted mt-1">Add, update, or reorganize skills. Proficiency bars reflect immediately.</p>
        </div>
      </div>

      {/* Message feedback */}
      {message.text && (
        <div className={`flex items-center gap-2 p-4 rounded-xl border ${
          message.type === 'success' 
            ? 'border-green-500/30 bg-green-500/10 text-green-500' 
            : 'border-red-500/30 bg-red-500/10 text-red-500'
        }`}>
          {message.type === 'success' ? <CheckCircle2 className="w-4.5 h-4.5 shrink-0" /> : <AlertCircle className="w-4.5 h-4.5 shrink-0" />}
          <span className="text-xs font-medium">{message.text}</span>
        </div>
      )}

      {/* Editor Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Add / Edit Form Card */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="glass-panel p-6 rounded-3xl border border-border-base/50 shadow-md flex flex-col gap-5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-primary to-accent opacity-35" />
            
            <h3 className="text-xs font-mono uppercase tracking-widest text-text-base flex items-center justify-between border-b border-border-base/40 pb-2">
              <span className="flex items-center gap-1.5"><Sliders className="w-4 h-4 text-accent" /> {editingSkill ? 'Edit Skill Details' : 'Add New Skill'}</span>
              {editingSkill && (
                <button 
                  onClick={cancelEdit}
                  className="p-1 rounded-lg hover:bg-bg-sub/80 text-text-muted hover:text-text-base cursor-pointer"
                  title="Cancel editing"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </h3>

            {/* Input name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-mono text-text-muted uppercase tracking-wider">Skill Name</label>
              <input 
                type="text" 
                name="name" 
                value={skillData.name} 
                onChange={handleInputChange} 
                placeholder="e.g. React, Docker, Swift"
                className="w-full px-4 py-2 bg-bg-sub/30 border border-border-base/40 rounded-xl text-xs text-text-base focus:outline-none"
              />
            </div>

            {/* Input icon class name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-mono text-text-muted uppercase tracking-wider">Icon (FontAwesome / Class Name)</label>
              <input 
                type="text" 
                name="icon" 
                value={skillData.icon} 
                onChange={handleInputChange} 
                placeholder="e.g. fa-react, fa-js"
                className="w-full px-4 py-2 bg-bg-sub/30 border border-border-base/40 rounded-xl text-xs text-text-base focus:outline-none"
              />
            </div>

            {/* Select category */}
            <div className="flex flex-col gap-1.5">
              <label className="text-[10px] font-mono text-text-muted uppercase tracking-wider">Category Category</label>
              <select 
                name="category" 
                value={skillData.category} 
                onChange={handleInputChange} 
                className="w-full px-4 py-2 bg-bg-sub/30 border border-border-base/40 rounded-xl text-xs text-text-muted focus:outline-none"
              >
                <option value="">Choose category</option>
                {skillCategories.map((category, idx) => (
                  <option key={idx} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Add custom category */}
            <div className="flex flex-col gap-1.5 border-t border-border-base/30 pt-3">
              <label className="text-[10px] font-mono text-text-muted uppercase tracking-wider">New Custom Category</label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={newCategory} 
                  onChange={(e) => setNewCategory(e.target.value)} 
                  placeholder="e.g. Mobile"
                  className="flex-1 px-4 py-2 bg-bg-sub/30 border border-border-base/40 rounded-xl text-xs text-text-base focus:outline-none"
                />
                <button 
                  onClick={addCategory}
                  className="flex items-center gap-1 px-3 py-2 rounded-xl border border-border-base text-xs font-mono uppercase hover:border-accent/40 hover:bg-accent/10 transition-colors cursor-pointer shrink-0"
                >
                  <FolderPlus className="w-3.5 h-3.5 text-accent" />
                  <span>Create</span>
                </button>
              </div>
            </div>

            {/* Proficiency slider & order inputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-border-base/30 pt-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono text-text-muted uppercase tracking-wider">Proficiency ({skillData.proficiency}%)</label>
                <input 
                  type="range" 
                  name="proficiency" 
                  min="0" 
                  max="100" 
                  value={skillData.proficiency} 
                  onChange={handleInputChange} 
                  className="w-full h-1 bg-bg-sub rounded-lg appearance-none cursor-pointer accent-accent"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] font-mono text-text-muted uppercase tracking-wider">Display Order</label>
                <input 
                  type="number" 
                  name="order" 
                  value={skillData.order} 
                  onChange={handleInputChange} 
                  min="0"
                  className="w-full px-4 py-1.5 bg-bg-sub/30 border border-border-base/40 rounded-xl text-xs text-text-base focus:outline-none"
                />
              </div>
            </div>

            <button 
              onClick={editingSkill ? handleUpdateSkill : handleAddSkill}
              className="mt-3 w-full flex items-center justify-center gap-1.5 py-3.5 rounded-xl text-xs font-mono uppercase tracking-wider text-bg-base bg-accent font-bold hover:bg-accent/80 hover:shadow-[0_0_15px_rgba(12,251,255,0.25)] transition-all cursor-pointer select-none"
            >
              {editingSkill ? <Save className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              <span>{editingSkill ? 'Update Skill Record' : 'Create Skill Record'}</span>
            </button>
          </div>
        </div>

        {/* Right Side: Categorized Skills Lists */}
        <div className="lg:col-span-8 flex flex-col gap-8 w-full">
          {skillCategories.length === 0 ? (
            <div className="glass-panel p-10 rounded-3xl border border-border-base/50 text-center flex flex-col items-center justify-center gap-2">
              <Code className="w-8 h-8 text-text-muted animate-pulse" />
              <p className="text-sm font-mono text-text-muted">No skill categories configured. Add your first skill record using the panel.</p>
            </div>
          ) : (
            skillCategories.map((category, idx) => (
              <div 
                key={idx} 
                className="glass-panel p-6 rounded-3xl border border-border-base/50 shadow-md flex flex-col gap-4 relative overflow-hidden group"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-primary to-accent opacity-30" />
                
                <h3 className="text-xs font-mono uppercase tracking-widest text-text-base border-b border-border-base/40 pb-2">
                  {category}
                </h3>
                
                <div className="flex flex-col gap-4">
                  {skills
                    .filter(skill => skill.category === category)
                    .map(skill => (
                      <div 
                        key={skill.id} 
                        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-bg-sub/30 border border-border-base/40 hover:border-primary/20 transition-all duration-300"
                      >
                        <div className="flex-1 space-y-2.5 w-full">
                          <div className="flex justify-between items-center text-xs">
                            <h4 className="font-bold text-text-base">{skill.name}</h4>
                            <span className="font-mono text-text-muted">Order: {skill.order || 0}</span>
                          </div>
                          
                          {/* Proficiency line loading indicator */}
                          <div className="flex items-center gap-3">
                            <span className="text-[10px] font-mono text-accent shrink-0 w-8">{skill.proficiency}%</span>
                            <div className="flex-1 h-2 bg-bg-sub/70 border border-border-base/40 rounded-full overflow-hidden">
                              <div 
                                className="h-full rounded-full bg-accent" 
                                style={{ width: `${skill.proficiency}%` }}
                              />
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                          <button 
                            className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors cursor-pointer"
                            onClick={() => handleEditSkill(skill)}
                            title="Edit details"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button 
                            className="p-2 rounded-lg bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-colors cursor-pointer"
                            onClick={() => handleDeleteSkill(skill.id)}
                            title="Delete"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))
          )}
        </div>

      </div>

    </div>
  );
};

export default SkillsSection;