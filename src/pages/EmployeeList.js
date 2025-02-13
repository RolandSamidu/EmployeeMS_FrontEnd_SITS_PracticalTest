import React, { useEffect, useState } from "react";
import { getAllEmployees } from "../services/EmployeeService";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    getAllEmployees().then((response) => {
      setEmployees(response.data);
    });
  }, []);

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Employee List</h2>
      <ul>
        {employees.map((emp) => (
          <li key={emp.id} className="border-b py-2">{emp.firstName} {emp.lastName}</li>
        ))}
      </ul>
    </div>
  );
};

export default EmployeeList;