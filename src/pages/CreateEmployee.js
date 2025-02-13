import React, { useState } from "react";
import { createEmployee } from "../services/EmployeeService";

const CreateEmployee = () => {
  const [employee, setEmployee] = useState({ firstName: "", lastName: "", email: "", salary: "" });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createEmployee(employee).then(() => alert("Employee Created Successfully"));
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Create Employee</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="firstName" placeholder="First Name" onChange={handleChange} className="border p-2 w-full" />
        <input type="text" name="lastName" placeholder="Last Name" onChange={handleChange} className="border p-2 w-full" />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} className="border p-2 w-full" />
        <input type="number" name="salary" placeholder="Salary" onChange={handleChange} className="border p-2 w-full" />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Create</button>
      </form>
    </div>
  );
};

export default CreateEmployee;