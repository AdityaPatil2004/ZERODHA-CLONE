 // frontend/src/components/signup.js

import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/signup", formData);
      alert("Signup successful!");
    } catch (error) {
      console.error("Signup error:", error.response?.data?.message || error.message);
      alert("Signup failed.");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        /><br /><br />
        <input
          name="email"
          placeholder="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        /><br /><br />
        <input
          name="password"
          placeholder="Password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
        /><br /><br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Signup;
