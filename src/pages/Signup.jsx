import { useState } from "react";
import axios from "axios";
import "../App.css";   // ✅ IMPORTANT FIX

function Signup() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const API = import.meta.env.VITE_API_URL;

  const handleSignup = async () => {
    try {
      const res = await axios.post(`${API}/api/auth/signup`, data);
      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Signup</h2>

        <input
          placeholder="Name"
          onChange={(e) =>
            setData({ ...data, name: e.target.value })
          }
        />

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

        <button onClick={handleSignup}>Signup</button>
      </div>
    </div>
  );
}

export default Signup;