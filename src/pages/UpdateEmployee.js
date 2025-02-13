import React, { useState, useEffect } from "react";
import { getEmployeeById, updateEmployee } from "../services/EmployeeService";
import { useParams } from "react-router-dom";

const UpdateEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({ firstName: "", lastName: "", email: "", salary: "" });

  useEffect(() => {
    getEmployeeById(id).then((response) => setEmployee(response.data));
  }, [id]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(id, employee).then(() => alert("Employee Updated Successfully"));
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Update Employee</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="firstName" value={employee.firstName} onChange={handleChange} className="border p-2 w-full" />
        <input type="text" name="lastName" value={employee.lastName} onChange={handleChange} className="border p-2 w-full" />
        <input type="email" name="email" value={employee.email} onChange={handleChange} className="border p-2 w-full" />
        <input type="number" name="salary" value={employee.salary} onChange={handleChange} className="border p-2 w-full" />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Update</button>
      </form>
    </div>
  );
};

export default UpdateEmployee;
