import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // 1. Ye import karen
import "../App.css";

export default function Signup() {
  const navigate = useNavigate(); // 2. Hook initialize karen
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignup = async () => {
    try {
      const res = await axios.post(import.meta.env.VITE_API_URL + "/api/auth/signup", data);
      alert(res.data.message);
      navigate("/login"); // Signup ke baad seedha login par le jayen
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Signup</h2>
        {/* ... baqi inputs same rahengi ... */}
        
        <button onClick={handleSignup}>Signup</button>

        <p>
          Already have account? 
          <span 
            style={{ cursor: "pointer", color: "#00aaff", marginLeft: "5px" }} 
            onClick={() => navigate("/login")} // 3. window.location ki jagah navigate use karen
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
