import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { addEmployee, addActivity } from "../services/employeeService";
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
    gender: "",
    dob: "",
    joiningDate: "",
    employeeType: "",
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
      await addActivity({
        message: `${employee.name} was added`,
        action: "Add",
        time: new Date().toLocaleString(),
      });

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
          <div>
            <label>Employee Name</label>
            <input
              type="text"
              name="name"
              value={employee.name}
              onChange={handleChange}
              pattern="[A-Za-z ]+"
              title="Name should contain only letters"
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={employee.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Department</label>
            <input
              type="text"
              name="department"
              value={employee.department}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Designation</label>
            <input
              type="text"
              name="designation"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Salary</label>
            <input
              type="number"
              name="salary"
              value={employee.salary}
              onChange={handleChange}
              min="1000"
              required
            />
          </div>
          <div>
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={employee.phone}
              onChange={handleChange}
              pattern="[0-9]{10}"
              title="Phone number must contain exactly 10 digits"
              required
            />
          </div>
          <div>
            <label>Gender</label>
            <select
              name="gender"
              value={employee.gender}
              onChange={handleChange}
              required
            >
              <option value="Select Gender">Select Gender</option>{" "}
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="field-label">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={employee.dob}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="field-label">Joining Date</label>
            <input
              type="date"
              name="joiningDate"
              value={employee.joiningDate}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Employee Type</label>
            <select
              name="employeeType"
              value={employee.employeeType}
              onChange={handleChange}
              required
            >
              <option value="">Employee Tye</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
              <option value="Intern">Intern</option>
              <option value="Contract">Contract</option>
            </select>
          </div>

          <button type="submit">Add Employee</button>
        </form>
      </div>
    </div>
  );
}

export default AddEmployee;
