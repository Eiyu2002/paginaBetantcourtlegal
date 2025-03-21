import React from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import "../assets/styleHeader.css"

function Header() {
  return (
    <>
      <header className="header">
        <nav>
          <ul>
            <li>
              <NavLink to={"/homepage"}>Inicio</NavLink>
            </li>
            <li>
              <Link to="/us" smooth={true} duration={900}>
                Nosotros
              </Link>
            </li>
            <li>
              <span>Servicios</span>
            </li>
            <li>
              <Link to="/cases" smooth={true} duration={900}>
                Casos de Exitos
              </Link>
            </li>
            <li>
              <NavLink to={"/test"}>Testimonios</NavLink>
            </li>
            <li>
              <NavLink to={"/blogs"}>Blogs</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
