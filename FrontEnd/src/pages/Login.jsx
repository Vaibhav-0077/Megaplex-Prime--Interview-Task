import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  const API_URL = import.meta.env.VITE_API_URL;

  const login = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post(`${API_URL}/api/login`, form);

      // ✅ STORE TOKEN
        localStorage.setItem("token", res.data.token);

        // ✅ STORE USERNAME
        localStorage.setItem("username", res.data.user.username);
        
      navigate("/dashboard");
    } catch (err) {
  console.log("AXIOS ERROR:", err);
  console.log("RESPONSE:", err.response);
  console.log("REQUEST:", err.request);
  setError("Invalid credentials");
}
  };

  return (
    <form className="login-container" onSubmit={login}>
      <h2>Login</h2>

      <input
        placeholder="Username"
        onChange={(e) =>
          setForm({ ...form, username: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />

      {error && <p className="error">{error}</p>}

      <button type="submit">Login</button>
    </form>
  );
}
