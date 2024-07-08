import { NavLink } from "react-router-dom";

import logo from "../assets/logo/iti.png";

import "../styles/Navbar.css";

function NavBar() {
  return (
    <>
      <nav className="navbar-container">
        <menu>
          <NavLink to="/">
            <img
              src={logo}
              alt="Logo Street Art Hunter"
              className="logo-img-container"
            />
          </NavLink>

          <li>
            <NavLink className="navbar-titre" to="/">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-titre" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-titre" to="/realisation">
              Realisation
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-titre" to="/contact">
              Contact
            </NavLink>
          </li>
        </menu>
      </nav>
    </>
  );
}

export default NavBar;
