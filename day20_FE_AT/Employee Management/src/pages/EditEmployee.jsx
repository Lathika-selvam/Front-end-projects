import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import {
  getEmployeeById,
  updateEmployee,
  addActivity,
} from "../services/employeeService";
import "../styles/AddEmployee.css";

function EditEmployee() {
  const { id } = useParams();
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

  useEffect(() => {
    loadEmployee();
  }, [id]);

  const loadEmployee = async () => {
    try {
      const data = await getEmployeeById(id);
      setEmployee(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateEmployee(id, employee);

      await addActivity({
        message: `${employee.name} was updated`,
        action: "Update",
        time: new Date().toLocaleString(),
      });

      await Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Employee Updated Successfully",
        confirmButtonText: "OK",
      });

      navigate("/employees");
    } catch (error) {
      console.log("Error:", error);
      console.log("Response:", error.response);
      console.log("Status:", error.response?.status);
      console.log("Data:", error.response?.data);

      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to update employee",
      });
    }
  };

  return (
    <div className="add-container">
      <h1>Edit Employee</h1>
      <form onSubmit={handleSubmit} className="employee-form">
        <div>
          <label>Employee Name</label>
          <input
            type="text"
            name="name"
            value={employee.name}
            onChange={handleChange}
            required
            pattern="[A-Za-z ]+"
            title="Name should contain only letters"
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={employee.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Deprtment</label>
          <input
            type="text"
            name="department"
            placeholder="Department"
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
            placeholder="Designation"
            value={employee.designation}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Salary</label>

          <input
            type="number"
            name="salary"
            placeholder="Salary"
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
            placeholder="Phone Number"
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
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label>Date of Birth</label>
          <input
            type="date"
            name="dob"
            value={employee.dob}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Joining Date</label>
          <input
            type="date"
            name="joiningDate"
            value={employee.joiningDate}
            onChange={handleChange}
            required
          />
        </div>

        <select
          name="employeeType"
          value={employee.employeeType}
          onChange={handleChange}
          required
        >
          <option value="">Employee Type</option>
          <option value="Full Time">Full Time</option>
          <option value="Part Time">Part Time</option>
          <option value="Intern">Intern</option>
          <option value="Contract">Contract</option>
        </select>

        <button type="submit">Update Employee</button>
      </form>
    </div>
  );
}

export default EditEmployee;
