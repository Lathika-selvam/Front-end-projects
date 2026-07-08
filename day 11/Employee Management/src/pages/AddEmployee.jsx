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
    image: "",
  });

  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!/^\d{10}$/.test(employee.phone)) {
      alert("Phone number must contain exactly 10 digits");
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
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="designation"
            placeholder="Designation"
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
            placeholder="Phone"
            value={employee.phone}
            onChange={handleChange}
            pattern="[0-9]{10}"
            title="Phone number must contain exactly 10 digits"
            required
          />

          <input
            type="url"
            name="image"
            placeholder="Image URL"
            value={employee.image}
            onChange={handleChange}
            required
          />

          <button type="submit">Add Employee</button>
        </form>
      </div>
    </div>
  );
}

export default AddEmployee;
