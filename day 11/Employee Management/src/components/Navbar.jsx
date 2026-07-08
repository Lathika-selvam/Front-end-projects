import { NavLink } from "react-router-dom";
import { FaUsers, FaHome, FaChartBar, FaUserPlus } from "react-icons/fa";
import "../styles/Navbar.css";
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-icon">💼</span>
        <h2>WorkSphere</h2>
      </div>

      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaHome />
            <span>Home</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaChartBar />
            <span>Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/employees"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaUsers />
            <span>Employees</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/add-employee"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaUserPlus />
            <span>Add Employee</span>
          </NavLink>
        </li>
      </ul>
      <ThemeToggle />
    </nav>
  );
}

export default Navbar;
