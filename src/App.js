import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Home from "./pages/Home";
import EmployeeList from "./pages/EmployeeList";
import CreateEmployee from "./pages/CreateEmployee";
import UpdateEmployee from "./pages/UpdateEmployee";

function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Header />
          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/employees" element={<EmployeeList />} />
              <Route path="/employees/create" element={<CreateEmployee />} />
              <Route path="/employees/update/:id" element={<UpdateEmployee />} />
            </Routes>
          </MainContent>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;