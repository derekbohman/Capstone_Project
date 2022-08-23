import "./RegisterPage.css";
import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/AuthContext";
import useCustomForm from "../../hooks/useCustomForm";
import useAuth from "../../hooks/useAuth";

const RegisterPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { registerUser } = useContext(AuthContext);
  const defaultValues = {
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  };
  const [formData, handleInputChange, handleSubmit] = useCustomForm(
    defaultValues,
    registerUser
  );

  return (
    <div className="registerContainer">
      <h1>Register</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label>
          First Name:{" "}
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Last Name:{" "}
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:{" "}
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Username:{" "}
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <p style={{ fontSize: "12px" }}>
          NOTE: Make this an uncommon password with characters, numbers, and
          special characters!
        </p>
        <button type="submit" onClick={useAuth}>
          Register
        </button>
      </form>
      <div className="registerSpacer"></div>
    </div>
  );
};

export default RegisterPage;
