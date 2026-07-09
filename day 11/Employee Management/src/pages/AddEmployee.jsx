import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { addEmployee } from "../services/employeeService";
import "../styles/AddEmployee.css";

function AddEmployee() {
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    department: "",
    designation: "",
    salary: "",
    phone: "",
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (employee.name.trim() === "") {
      Swal.fire("Error!", "Please enter employee name", "error");
      return;
    }

    if (!/^[A-Za-z ]+$/.test(employee.name)) {
      Swal.fire("Error!", "Name should contain only letters", "error");
      return;
    }

    if (employee.email.trim() === "") {
      Swal.fire("Error!", "Please enter email", "error");
      return;
    }

    if (employee.department.trim() === "") {
      Swal.fire("Error!", "Please enter department", "error");
      return;
    }

    if (employee.designation.trim() === "") {
      Swal.fire("Error!", "Please enter designation", "error");
      return;
    }

    if (employee.salary === "" || Number(employee.salary) < 1000) {
      Swal.fire("Error!", "Salary must be at least 1000", "error");
      return;
    }

    if (!/^\d{10}$/.test(employee.phone)) {
      Swal.fire(
        "Error!",
        "Phone number must contain exactly 10 digits",
        "error",
      );
      return;
    }

    try {
      await addEmployee(employee);

      await Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Employee Added Successfully",
        confirmButtonText: "OK",
      });

      navigate("/employees");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to add employee",
      });

      console.log(error);
    }
  };

  return (
    <div className="add-page">
      <div className="add-container">
        <h1>Add Employee</h1>

        <form onSubmit={handleSubmit} className="employee-form">
          <input
            type="text"
            name="name"
            placeholder="Employee Name"
            value={employee.name}
            onChange={handleChange}
            pattern="[A-Za-z ]+"
            title="Name should contain only letters"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={employee.email}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="department"
            placeholder="Department"
            value={employee.department}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="designation"
            placeholder="Designation"
            value={employee.designation}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="salary"
            placeholder="Salary"
            value={employee.salary}
            onChange={handleChange}
            min="1000"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={employee.phone}
            onChange={handleChange}
            pattern="[0-9]{10}"
            title="Phone number must contain exactly 10 digits"
            required
          />

          <button type="submit">Add Employee</button>
        </form>
      </div>
    </div>
  );
}

export default AddEmployee;
