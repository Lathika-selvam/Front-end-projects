import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { admin, employeePassword } from "../utils/auth";
import "../styles/Login.css";

function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("employee");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (role === "admin") {
      if (email === admin.email && password === admin.password) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("role", "admin");
        navigate("/dashboard");
      } else {
        Swal.fire("Error!", "Invalid Admin Credentials", "error");
      }
    } else {
      if (email.trim() !== "" && password === employeePassword) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("role", "employee");
        navigate("/employees");
      } else {
        Swal.fire("Error!", "Invalid Employee Credentials", "error");
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h1>Employee Management System</h1>
        <h3>Login</h3>

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="employee">Employee</option>
          <option value="admin">Admin</option>
        </select>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="password-box">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <span
            className="show-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁"}
          </span>
        </div>

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;
