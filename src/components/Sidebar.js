import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-900 text-white h-screen fixed top-0 left-0 py-10 px-5 shadow-lg">
      <nav>
        <ul className="space-y-4">
          <li><Link to="/" className="block py-2 px-4 bg-gray-700 rounded hover:bg-gray-600">Home</Link></li>
          <li><Link to="/employees" className="block py-2 px-4 bg-gray-700 rounded hover:bg-gray-600">Employee List</Link></li>
          <li><Link to="/employees/create" className="block py-2 px-4 bg-gray-700 rounded hover:bg-gray-600">Add Employee</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;