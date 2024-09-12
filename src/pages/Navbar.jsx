import { useState } from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Navbar.css'; // Optional custom CSS for additional styles

export const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add("bg-dark", "text-light");
    } else {
      document.body.classList.remove("bg-dark", "text-light");
    }
  };

  return (
    <header className={`navbar navbar-expand-lg ${isDarkMode ? 'bg-dark' : 'bg-light'} mb-4`}>
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          DATA RECOVERY
        </NavLink>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className={`nav-link ${isDarkMode ? 'text-light' : 'text-dark'}`} to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`nav-link ${isDarkMode ? 'text-light' : 'text-dark'}`} to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`nav-link ${isDarkMode ? 'text-light' : 'text-dark'}`} to="/service">Services</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={`nav-link ${isDarkMode ? 'text-light' : 'text-dark'}`} to="/contact">Contact</NavLink>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <div className="form-check form-switch ms-3">
              <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" checked={isDarkMode} onChange={toggleTheme} />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
