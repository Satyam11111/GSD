import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-dark text-light p-3">
      <h4 className="text-center">Made with ❤️ by StarterCoder</h4>
      <p className="text-center mt-3">
        <Link to="/about" className="text-light m-1 text-decoration-none">
          About
        </Link>
        |
        <Link to="/contact" className="text-light m-1 text-decoration-none">
          Contact
        </Link>
        |
        <Link to="/Policy" className="text-light m-1 text-decoration-none">
          Privacy Policy
        </Link>
      </p>
    </div>
  );
};

export default Footer;
