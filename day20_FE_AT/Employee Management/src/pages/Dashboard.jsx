import { useEffect, useState } from "react";
import { getEmployees, getActivities } from "../services/employeeService";
import {
  FaUsers,
  FaBuilding,
  FaMoneyBillWave,
  FaChartLine,
} from "react-icons/fa";

import "../styles/Dashboard.css";

function Dashboard() {
  const [employees, setEmployees] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    loadEmployees();
    loadActivities();
  }, []);

  const loadEmployees = async () => {
    try {
      const data = await getEmployees();
      setEmployees(data);
    } catch (error) {
      console.log(error);
    }
  };

  const loadActivities = async () => {
    try {
      const data = await getActivities();
      setActivities(data);
    } catch (error) {
      console.log(error);
    }
  };

  const totalEmployees = employees.length;

  // Total Departments
  const departments = [...new Set(employees.map((emp) => emp.department))]
    .length;

  // Average Salary
  const averageSalary =
    employees.length > 0
      ? Math.round(
          employees.reduce((sum, emp) => sum + Number(emp.salary), 0) /
            employees.length,
        )
      : 0;
  // Active Employees
  const activeEmployees = employees.filter(
    (emp) => emp.status !== "Inactive",
  ).length;
  const maleEmployees = employees.filter(
    (emp) => emp.gender?.toLowerCase() === "male",
  ).length;
  const femaleEmployees = employees.filter(
    (emp) => emp.gender?.toLowerCase() === "female",
  ).length;
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome back! Here's your workforce overview.</p>
      </div>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <div className="dashboard-icon blue">
            <FaUsers />
          </div>
          <h2>{totalEmployees}</h2>
          <p>Total Employees</p>
        </div>

        <div className="dashboard-card">
          <div className="dashboard-icon green">
            <FaBuilding />
          </div>
          <h2>{departments}</h2>
          <p>Departments</p>
        </div>

        <div className="dashboard-card">
          <div className="dashboard-icon orange">
            <FaMoneyBillWave />
          </div>
          <h2>₹{averageSalary}</h2>
          <p>Average Salary</p>
        </div>

        <div className="dashboard-card">
          <div className="dashboard-icon purple">
            <FaChartLine />
          </div>
          <h2>{employees.length > 0 ? "98%" : "0%"}</h2>
          <p>Productivity</p>
        </div>
      </div>

      <div className="dashboard-bottom">
        <div className="activity-card">
          <h3>Recent Activity</h3>
          <ul>
            {activities.length > 0 ? (
              activities
                .slice()
                .reverse()
                .slice(0, 5)
                .map((activity) => (
                  <li key={activity.id}>{activity.message}</li>
                ))
            ) : (
              <li>No recent activity</li>
            )}
          </ul>
        </div>

        <div className="summary-card">
          <h3>Company Summary</h3>

          <p>
            <strong>Total Employees:</strong> {totalEmployees}
          </p>

          <p>
            <strong>Active Employees:</strong> {activeEmployees}
          </p>

          <p>
            <strong>Male Employees:</strong> {maleEmployees}
          </p>

          <p>
            <strong>Female Employees:</strong> {femaleEmployees}
          </p>

          <div className="progress">
            <div
              className="progress-fill"
              style={{
                width: `${Math.min((totalEmployees / 20) * 10, 100)}%`,
              }}
            ></div>
          </div>

          <p className="summary-text">
            Employee records are updated in real time and displayed on the
            dashboard.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
