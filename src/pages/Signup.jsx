import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();

 const API = import.meta.env.VITE_API_URL;

const handleSignup = async () => {
  try {
    const res = await axios.post(`${API}/api/auth/signup`, data);
    console.log(res.data);
    alert("Signup Success");
  } catch (err) {
    console.log(err.response?.data);
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

        <p className="link" onClick={() => navigate("/")}>
          Already have account? Login
        </p>
      </div>
    </div>
  );
}

export default Signup;