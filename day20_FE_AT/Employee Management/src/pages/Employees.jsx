import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import {
  getEmployees,
  deleteEmployee,
  addActivity,
} from "../services/employeeService";

import "../styles/Employees.css";
import Swal from "sweetalert2";
import { FaUserCircle } from "react-icons/fa";
function Employees() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const data = await getEmployees();

      setEmployees(data);
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Delete Employee?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#ef4444",
    });

    if (result.isConfirmed) {
      try {
        const employee = employees.find((emp) => emp.id === id);

        await deleteEmployee(id);

        await addActivity({
          message: `${employee.name} was deleted`,
          action: "Delete",
          time: new Date().toLocaleString(),
        });
        await Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: "Employee deleted successfully.",
          timer: 1500,
          showConfirmButton: false,
        });
        const activities = JSON.parse(localStorage.getItem("activities")) || [];

        activities.unshift({
          action: "Deleted",
          name: employees.find((e) => e.id === id)?.name,
          time: new Date().toLocaleString(),
        });

        localStorage.setItem("activities", JSON.stringify(activities));

        fetchEmployees();
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "Failed to delete employee.",
        });
      }
    }
  };
  const filteredEmployees = employees.filter((employee) => {
    return (
      employee.name.toLowerCase().includes(search.toLowerCase()) ||
      employee.email.toLowerCase().includes(search.toLowerCase()) ||
      employee.department.toLowerCase().includes(search.toLowerCase()) ||
      employee.designation.toLowerCase().includes(search.toLowerCase())
    );
  });
  return (
    <div className="employees-page">
      <div className="employees-header">
        <div>
          <h1>Employees</h1>
          <p>Manage all employee records in one place.</p>
        </div>
      </div>

      <div className="search-box">
        <input
          type="text"
          placeholder="🔍 Search employees..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="employee-table-container">
        <table className="employee-table">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Designation</th>
              <th>Gender</th>
              <th>DOB</th>
              <th>Joining Date</th>
              <th>Employee Type</th>
              <th>Salary</th>
            </tr>
          </thead>

          <tbody>
            {filteredEmployees.map((employee) => (
              <tr key={employee.id}>
                <td>
                  <div className="employee-info">
                    <FaUserCircle className="profile-icon" />

                    <div>
                      <h4>{employee.name}</h4>

                      <span>ID : {employee.id}</span>
                    </div>
                  </div>
                </td>

                <td>{employee.email}</td>

                <td>{employee.phone}</td>

                <td>{employee.designation}</td>

                <td>{employee.gender}</td>

                <td>{new Date(employee.dob).toLocaleDateString("en-GB")}</td>
                <td>
                  {new Date(employee.joiningDate).toLocaleDateString("en-GB")}
                </td>

                <td>{employee.employeeType}</td>

                <td>₹ {employee.salary}</td>

                <td>
                  <Link to={`/edit-employee/${employee.id}`}>
                    <button className="edit-btn">Edit</button>
                  </Link>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Employees;
