import { useState } from "react";
import axios from "axios";
import "../App.css";   // ✅ IMPORTANT FIX

function Login() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const API = import.meta.env.VITE_API_URL;

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${API}/api/auth/login`, data);
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Login</h2>

        <input
          placeholder="Email"
          onChange={(e) =>
            setData({ ...data, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setData({ ...data, password: e.target.value })
          }
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;