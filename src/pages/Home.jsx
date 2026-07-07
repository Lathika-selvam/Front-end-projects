import { Link } from "react-router-dom";
import { FaUsers, FaChartLine, FaBuilding, FaArrowRight } from "react-icons/fa";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-left">
          <span className="badge">🚀 Smart Employee Management</span>

          <h1>
            Manage Your <span>Workforce</span>
            <br />
            Smarter & Faster
          </h1>

          <p>
            WorkSphere helps companies manage employee records, departments,
            salaries and workforce efficiently through a modern dashboard.
          </p>

          <div className="hero-buttons">
            <Link to="/employees">
              <button className="primary-btn">
                View Employees <FaArrowRight />
              </button>
            </Link>

            <Link to="/add-employee">
              <button className="secondary-btn">Add Employee</button>
            </Link>
          </div>
        </div>

        <div className="hero-right">
          <div className="glass-card">
            <FaUsers className="icon" />
            <h2>250+</h2>
            <p>Employees</p>
          </div>

          <div className="glass-card">
            <FaBuilding className="icon" />
            <h2>8</h2>
            <p>Departments</p>
          </div>

          <div className="glass-card">
            <FaChartLine className="icon" />
            <h2>98%</h2>
            <p>Efficiency</p>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <h3>⚡ Fast CRUD</h3>
          <p>Add, edit and delete employee records instantly.</p>
        </div>

        <div className="feature-card">
          <h3>📊 Dashboard</h3>
          <p>Beautiful analytics for your workforce.</p>
        </div>

        <div className="feature-card">
          <h3>🔒 Secure Data</h3>
          <p>Safely manage employee information.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
