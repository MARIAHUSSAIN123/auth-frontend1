import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const API = import.meta.env.VITE_API_URL;

const handleLogin = async () => {
  try {
    const res = await axios.post(`${API}/api/auth/login`, data);
    console.log(res.data);
    alert("Login Success");
  } catch (err) {
    console.log(err.response?.data);
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

        <p className="link" onClick={() => navigate("/signup")}>
          Create account
        </p>
      </div>
    </div>
  );
}

export default Login; 