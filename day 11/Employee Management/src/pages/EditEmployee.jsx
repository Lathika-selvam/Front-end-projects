import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { getEmployeeById, updateEmployee } from "../services/employeeService";
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
  });

  useEffect(() => {
    loadEmployee();
  }, []);

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

      await Swal.fire({
        icon: "success",
        title: "Success!",
        text: "Employee Updated Successfully",
        confirmButtonText: "OK",
      });

      navigate("/employees");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Failed to update employee",
      });

      console.error(error);
    }
  };

  return (
    <div className="add-container">
      <h1>Edit Employee</h1>

      <form onSubmit={handleSubmit} className="employee-form">
        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={employee.name}
          onChange={handleChange}
          required
          pattern="[A-Za-z ]+"
          title="Name should contain only letters"
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

        <button type="submit">Update Employee</button>
      </form>
    </div>
  );
}

export default EditEmployee;
