import React from "react";
import { navLinks } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  return (
    <header className="header1">
      <nav className="nav">
        <input
          type="checkbox"
          name="checkbox"
          id="nav-checkbox"
          className="nav-checkbox"
        />
        <label htmlFor="nav-checkbox" className="nav-toggle">
          <FontAwesomeIcon icon={faBars} id="bars" />{" "}
          <em className="label-dummy">r</em>
          <FontAwesomeIcon icon={faX} id="close" />
          <em className="label-dummy">r</em>
        </label>
        <ul className="nav-menu">
          {navLinks.map((link) => {
            const { id, href, text } = link;
            return (
              <li key={id}>
                <a href={href}>{text}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;
