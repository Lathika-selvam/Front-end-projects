import { useState } from "react";
import "./App.css";

function App() {
  const [student, setStudent] = useState({
    id: "",
    name: "",
    department: "",
    section: "A",
  });

  const [students, setStudents] = useState([]);
  const [filterSection, setFilterSection] = useState("All");

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const addStudent = () => {
    if (
      student.id.trim() === "" ||
      student.name.trim() === "" ||
      student.department.trim() === ""
    ) {
      alert("Please fill all the fields.");
      return;
    }

    setStudents([
      ...students,
      {
        ...student,
        status: "Absent",
      },
    ]);

    setStudent({
      id: "",
      name: "",
      department: "",
      section: "A",
    });
  };

  const changeStatus = (index) => {
    const updated = [...students];

    updated[index].status =
      updated[index].status === "Absent" ? "Present" : "Absent";

    setStudents(updated);
  };

  const deleteStudent = (index) => {
    const updated = students.filter((_, i) => i !== index);
    setStudents(updated);
  };

  const filteredStudents =
    filterSection === "All"
      ? students
      : students.filter((student) => student.section === filterSection);

  const totalStudents = students.length;

  const presentStudents = students.filter(
    (student) => student.status === "Present",
  ).length;

  const absentStudents = students.filter(
    (student) => student.status === "Absent",
  ).length;

  const attendancePercentage =
    totalStudents === 0
      ? 0
      : ((presentStudents / totalStudents) * 100).toFixed(1);

  return (
    <div className="container">
      <h1>🎓 Student Attendance Manager</h1>

      {/* Form */}

      <div className="form">
        <input
          type="text"
          name="id"
          placeholder="Enter Student ID"
          value={student.id}
          onChange={handleChange}
        />

        <input
          type="text"
          name="name"
          placeholder="Enter Student Name"
          value={student.name}
          onChange={handleChange}
        />

        <input
          type="text"
          name="department"
          placeholder="Enter Department"
          value={student.department}
          onChange={handleChange}
        />

        <select name="section" value={student.section} onChange={handleChange}>
          <option value="A">Section A</option>
          <option value="B">Section B</option>
          <option value="C">Section C</option>
        </select>

        <button onClick={addStudent}>Add Student</button>
      </div>

      {/* Dashboard */}

      <div className="dashboard">
        <div className="card totalCard">
          <h3>Total Students</h3>
          <h2>{totalStudents}</h2>
        </div>

        <div className="card presentCard">
          <h3>Present</h3>
          <h2>{presentStudents}</h2>
        </div>

        <div className="card absentCard">
          <h3>Absent</h3>
          <h2>{absentStudents}</h2>
        </div>

        <div className="card attendanceCard">
          <h3>Attendance</h3>

          <h2>{attendancePercentage}%</h2>

          <div className="progressBar">
            <div
              className="progress"
              style={{
                width: `${attendancePercentage}%`,
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Filter */}

      <div className="filter">
        <label>Filter by Section :</label>

        <select
          value={filterSection}
          onChange={(e) => setFilterSection(e.target.value)}
        >
          <option value="All">All Sections</option>
          <option value="A">Section A</option>
          <option value="B">Section B</option>
          <option value="C">Section C</option>
        </select>
      </div>

      {/* Table */}

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Section</th>
            <th>Status</th>
            <th>Action</th>
            <th>Delete</th>
          </tr>
        </thead>

        <tbody>
          {filteredStudents.length === 0 ? (
            <tr>
              <td colSpan="7">No Students Found</td>
            </tr>
          ) : (
            filteredStudents.map((student, index) => (
              <tr key={index}>
                <td>{student.id}</td>

                <td>{student.name}</td>

                <td>{student.department}</td>

                <td>
                  <span className={`badge ${student.section}`}>
                    {student.section}
                  </span>
                </td>

                <td>
                  <span
                    className={
                      student.status === "Present" ? "present" : "absent"
                    }
                  >
                    {student.status}
                  </span>
                </td>

                <td>
                  <button
                    className="statusBtn"
                    onClick={() => changeStatus(index)}
                  >
                    {student.status === "Absent"
                      ? "Mark Present"
                      : "Mark Absent"}
                  </button>
                </td>

                <td>
                  <button
                    className="deleteBtn"
                    onClick={() => deleteStudent(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;
