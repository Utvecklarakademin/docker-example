import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";

const App = () => {
  return (
    <Router>
      <nav className="bg-blue-600 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <h1 className="text-xl font-bold">FastAPI React Demo</h1>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/"
                className="hover:bg-blue-700 px-3 py-2 rounded transition"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/users"
                className="hover:bg-blue-700 px-3 py-2 rounded transition"
              >
                Movies
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
