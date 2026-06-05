import { Password } from "@mui/icons-material";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setTimeout(() => {
      if (email === "email@email.com" && Password === "password") {
        alert("Login successful!");
        localStorage.setItem(
          "token",
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NThhOWM0YiIsIm5hbWUiOiJDYWxlYiIsImV4cCI6MTc4NTEyMDAwMH0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
        );
        navigate("/dashboard");
      } else {
        alert("Invalid email or password");
      }
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form action="" className="flex flex-col gap-3">
        <input
          className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="email"
          placeholder="enter email..."
          onChange={handleEmail}
          value={email}
        />
        <input
          className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="password"
          placeholder="enter password..."
          value={Password}
          onChange={handlePassword}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
