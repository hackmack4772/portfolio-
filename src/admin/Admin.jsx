import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './utils/firebase';
import Login from './Login';
import Dashboard from './Dashboard';
import './styles/admin-styles.css';

const Admin = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="admin-loading-page">
        <div className="admin-loading-spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Router>
      <div className="admin-app">
        <Routes>
          <Route 
            path="/admin" 
            element={user ? <Navigate to="/admin/dashboard" /> : <Login />} 
          />
          <Route 
            path="/admin/dashboard/*" 
            element={user ? <Dashboard /> : <Navigate to="/admin" />} 
          />
          <Route path="*" element={<Navigate to="/admin" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Admin; 