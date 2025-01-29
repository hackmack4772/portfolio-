import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebase";
import { useNavigate } from "react-router-dom";

const provider = new GoogleAuthProvider();

const AuthPage = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [signInData, setSignInData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ signUp: {}, signIn: {} });

  useEffect(() => {
    import("./login.css").then(() => console.log("Login CSS loaded"));
  }, []);

  // Handle Input Changes
  const handleInputChange = (event, formType) => {
    const { name, value } = event.target;
    formType === "signUp"
      ? setSignUpData({ ...signUpData, [name]: value })
      : setSignInData({ ...signInData, [name]: value });
  };

  // Validate Forms
  const validateForm = (data, isSignUp = false) => {
    const errors = {};
    if (!data.email) errors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(data.email))
      errors.email = "Invalid email format.";

    if (isSignUp) {
      if (!data.name) errors.name = "Name is required.";
      if (!data.password) errors.password = "Password is required.";
      else if (data.password.length < 6)
        errors.password = "Password must be at least 6 characters.";
    } else {
      if (!data.password) errors.password = "Password is required.";
    }

    return errors;
  };

  // Handle Form Submission
  const handleSubmit = async (event, formType) => {
    event.preventDefault();
    const validationErrors =
      formType === "signUp"
        ? validateForm(signUpData, true)
        : validateForm(signInData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors({ ...errors, [formType]: validationErrors });
      return;
    }

    try {
      if (formType === "signUp") {
        await createUserWithEmailAndPassword(
          auth,
          signUpData.email,
          signUpData.password
        );
      } else {
        await signInWithEmailAndPassword(
          auth,
          signInData.email,
          signInData.password
        );
      }
      navigate("/admin/edit-home");
    } catch (error) {
      console.error("Authentication Error:", error.message);
    }
  };

  // Handle Google Login
  const handleLoginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/admin/edit-home");
    } catch (error) {
      console.error("Google Login Error:", error.message);
    }
  };

  // Handle Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("admin/login");
    } catch (error) {
      console.error("Logout Error:", error.message);
    }
  };

  return (
    <div className="auth-container">
      <div
        className={`container ${
          isRightPanelActive ? "right-panel-active" : ""
        }`}
        id="container"
      >
        {/* Sign Up Form */}
        <div className="form-container sign-up-container">
          <form onSubmit={(e) => handleSubmit(e, "signUp")}>
            <h1>Sign Up</h1>
            {/* <button
              type="button"
              onClick={handleLoginWithGoogle}
              className="social"
            >
              <i className="fab fa-google-plus-g"></i>
            </button>
            <span>or use your email for registration</span> */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={signUpData.name}
              onChange={(e) => handleInputChange(e, "signUp")}
            />
            {errors.signUp.name && (
              <p className="error">{errors.signUp.name}</p>
            )}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={signUpData.email}
              onChange={(e) => handleInputChange(e, "signUp")}
            />
            {errors.signUp.email && (
              <p className="error">{errors.signUp.email}</p>
            )}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={signUpData.password}
              onChange={(e) => handleInputChange(e, "signUp")}
            />
            {errors.signUp.password && (
              <p className="error">{errors.signUp.password}</p>
            )}
            <button type="submit">Sign Up</button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className="form-container sign-in-container">
          <form onSubmit={(e) => handleSubmit(e, "signIn")}>
            <h1>Sign In</h1>
            {/* <button
              type="button"
              onClick={handleLoginWithGoogle}
              className="social"
            >
              <i className="fab fa-google-plus-g"></i>
            </button> */}
            {/* <span>or use your email account</span> */}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={signInData.email}
              onChange={(e) => handleInputChange(e, "signIn")}
            />
            {errors.signIn.email && (
              <p className="error">{errors.signIn.email}</p>
            )}
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={signInData.password}
              onChange={(e) => handleInputChange(e, "signIn")}
            />
            {errors.signIn.password && (
              <p className="error">{errors.signIn.password}</p>
            )}
            <button type="submit">Sign In</button>
          </form>
        </div>

        {/* Overlay */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To stay connected, please log in with your personal info</p>
              <button
                className="ghost"
                id="SignIn"
                onClick={() => setIsRightPanelActive(false)}
              >
                Sign In
              </button>
            </div>
            {/* <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your details to start your journey with us</p>
              <button
                className="ghost"
                id="SignUp"
                onClick={() => setIsRightPanelActive(true)}
              >
                Sign Up
              </button>
            </div> */}
          </div>
        </div>
      </div>
      {/* <button onClick={handleLogout} className="logout-button">
        Logout
      </button> */}
    </div>
  );
};

export default AuthPage;
