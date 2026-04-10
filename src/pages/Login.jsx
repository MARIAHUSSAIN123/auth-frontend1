import { useState } from "react";
import axios from "axios";
import "../App.css";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const res = await axios.post(import.meta.env.VITE_API_URL+"/api/auth/login", data);
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
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />

      <button onClick={handleLogin}>Login</button>

      <p>
        Don't have account?
        <span onClick={() => window.location.href = "/signup"}>
          {" "}Signup
        </span>
      </p>
    </div>
  </div>
);
}
