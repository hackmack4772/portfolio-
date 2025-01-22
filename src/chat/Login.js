import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username.trim()) {
      setError("Please enter a username.");
      return;
    }

    try {
      const ip = await fetch("https://api.ipify.org?format=json")
        .then((res) => res.json())
        .then((data) => data.ip);

      const userRef = doc(db, "users", username);
      const userDoc = await getDoc(userRef);
      console.log(userDoc, "userDoc");

      if (userDoc.exists()) {
        const userData = userDoc.data();
        if (userData.ip === ip) {
          localStorage.setItem("token", username);
          navigate("/users");
        } else {
          setError("Username is already taken.");
        }
      } else {
        await setDoc(userRef, { username, ip });
        localStorage.setItem("token", username);
        navigate("/users");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Welcome Back!</h2>
      <p className="login-subtitle">Please enter your username to continue.</p>

      <form
        className="login-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(); // Use handleLogin here
        }}
      >
        <input
          type="text"
          className="form-control"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit" className="login-submit">
          Login
        </button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default Login;
