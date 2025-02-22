import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../src/config/firebase";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [nameError, setNameError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!username.trim()) {
      setUserNameError("Please enter a username.");
      return;
    }
    if (!name.trim()) {
      setUserNameError("Please enter a name.");
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
          setUserNameError("Username is already taken.");
        }
      } else {
        await setDoc(userRef, { username, ip,name });
        localStorage.setItem("token", username);
        navigate("/users");
      }
    } catch (userNameError) {
      console.userNameError("userNameError during login:", userNameError);
      setUserNameError("An userNameError occurred. Please try again later.");
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
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        {userNameError && <p className="error">{userNameError}</p>}
        {nameError && <p className="error">{nameError}</p>}
      </form>
    </div>
  );
}

export default Login;
