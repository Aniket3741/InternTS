import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported

export const Error = () => {
  return (
    <section className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="text-center p-4">
        <h1 className="display-1 fw-bold text-primary">404</h1>
        <h4 className="my-3">Sorry! Page not found</h4>
        <p className="mb-4">
          Oops! It seems like the page you're trying to access doesn't exist. If you believe there's an issue, feel free to report it, and we'll look into it.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <NavLink to="/" className="btn btn-primary">Return Home</NavLink>
          <NavLink to="/contact" className="btn btn-secondary">Report Problem</NavLink>
        </div>
      </div>
    </section>
  );
};
