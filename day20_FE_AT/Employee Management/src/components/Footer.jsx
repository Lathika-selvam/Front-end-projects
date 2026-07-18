import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <h2>💼 WorkSphere</h2>

          <p>
            Smart Employee Management System built using React, Axios and
            MockAPI.
          </p>
        </div>

        <div className="footer-center">
          <h3>Quick Links</h3>

          <a href="/">Home</a>

          <a href="/dashboard">Dashboard</a>

          <a href="/employees">Employees</a>

          <a href="/add-employee">Add Employee</a>
        </div>

        <div className="footer-right">
          <h3>Connect</h3>

          <div className="social-icons">
            <FaGithub />

            <FaLinkedin />

            <FaEnvelope />
          </div>
        </div>
      </div>

      <hr />

      <p className="copyright">© 2026 WorkSphere. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
