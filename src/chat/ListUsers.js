import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore"; // Firebase Firestore utilities
import { db } from "../config/firebase";
import "./ListUsers.css"; // Assuming styles are properly named for ListUsers
import { useNavigate } from "react-router-dom";

export default function ListUsers({ onUserSelect }) {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  // Fetch users from Firestore on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollection = collection(db, "users");
        const usersSnapshot = await getDocs(usersCollection);
        const userList = usersSnapshot.docs.map((doc) => doc.id); // Get the document IDs as usernames
        setUsers(userList);
      } catch (err) {
        console.error("Error fetching users:", err);
        setError("Failed to load users. Please try again later.");
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="user-list">
      <h3>Select a user to chat with</h3>
      {error && <p className="error">{error}</p>}
      <ul>
        {users.map((user) => (
          <li
            key={user}
            onClick={() => navigate(`/chat/${user}`) }
            className="user-item"
          >
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
}
