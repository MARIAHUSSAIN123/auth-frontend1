import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"; // Link aur navigate dono use kiye hain
import "../App.css";

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      // Backend URL aur API path check kar len (lowercase login)
      const res = await axios.post(import.meta.env.VITE_API_URL + "/api/auth/login", data);
      
      alert(res.data.message);
      
      // Login successful ho jaye to user ko home ya dashboard par bhej den
      // navigate("/dashboard"); 
      
    } catch (err) {
      // Backend se aane wala specific error message (e.g., "User not found")
      alert(err.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />

        <button onClick={handleLogin}>Login</button>

        <p>
          Don't have an account? 
          <Link to="/" style={{ cursor: "pointer", color: "#00aaff", marginLeft: "5px", textDecoration: "none" }}>
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}
