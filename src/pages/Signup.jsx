import { useState } from "react";
import axios from "axios";
import "../App.css";

export default function Signup() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignup = async () => {
    try {
       const res = await axios.post(import.meta.env.VITE_API_URL+"/api/auth/signup", data);
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
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />

      <input
        placeholder="Email"
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />

      <button onClick={handleSignup}>Signup</button>

      <p>
        Already have account?
        <span onClick={() => window.location.href = "/login"}>
          {" "}Login
        </span>
      </p>
    </div>
  </div>
);
}
