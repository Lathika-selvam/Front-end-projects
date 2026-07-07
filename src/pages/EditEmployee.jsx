import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
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
    image: "",
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

    await updateEmployee(id, employee);

    alert("Employee Updated Successfully");

    navigate("/employees");
  };

  return (
    <div className="add-container">
      <h1>Edit Employee</h1>

      <form onSubmit={handleSubmit} className="employee-form">
        <input
          type="text"
          name="name"
          value={employee.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          value={employee.email}
          onChange={handleChange}
        />

        <input
          type="text"
          name="department"
          value={employee.department}
          onChange={handleChange}
        />

        <input
          type="text"
          name="designation"
          value={employee.designation}
          onChange={handleChange}
        />

        <input
          type="number"
          name="salary"
          value={employee.salary}
          onChange={handleChange}
        />

        <input
          type="text"
          name="phone"
          value={employee.phone}
          onChange={handleChange}
        />

        <input
          type="text"
          name="image"
          value={employee.image}
          onChange={handleChange}
        />

        <button type="submit">Update Employee</button>
      </form>
    </div>
  );
}

export default EditEmployee;
