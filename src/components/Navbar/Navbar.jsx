import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const navbar = () => {
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">Atlantis</div>
        <span>Toggle</span>
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/howitworks" spy={true} smooth={true}>
                How it Works
              </Link>
            </li>
            <li>
              <Link to="/usercomments" spy={true} smooth={true}>
                User Comments
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
      </div>

    </div>
  );
};

export default navbar;
