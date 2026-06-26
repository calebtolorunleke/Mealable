import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  // const handleLogin = (e) => {
  //   e.preventDefault();

  //   setTimeout(() => {
  //     if (email === "email@email.com" && Password === "password") {
  //       alert("Login successful!");
  //       localStorage.setItem(
  //         "token",
  //         "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NThhOWM0YiIsIm5hbWUiOiJDYWxlYiIsImV4cCI6MTc4NTEyMDAwMH0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  //       );
  //       navigate("/dashboard");
  //     } else {
  //       alert("Invalid email or password");
  //     }
  //   }, 1000);
  // };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://backend-mealablev2.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        },
      );
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.data.id);
        console.log(data);
        navigate("/dashboard");
      } else {
        alert(data.message || "Incorrect credentials");
        return;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleLogin} className="flex flex-col gap-3">
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
          value={password}
          onChange={handlePassword}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
