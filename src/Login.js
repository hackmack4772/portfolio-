import React from 'react';
import "./Login.css"; // Assuming styles are properly named for Login

export default function Login({ username, setUsername, handleUsernameSubmit }) {
    return (
        <div className="login-container">
            <h2 className="login-title">Welcome Back!</h2>
            <p className="login-subtitle">Please enter your username to continue.</p>

            <form className="login-form" onSubmit={(e) => { e.preventDefault(); handleUsernameSubmit(); }}>
                <input
                    type="text"
                    value={username}
                    className="form-control"
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username"
                />
                <button type="submit" className="login-submit">
                    Login
                </button>
            </form>
        </div>
    );
}
