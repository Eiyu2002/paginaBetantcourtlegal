import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/Context";

import "../assets/styleHeader.css";

function Header() {
  const { activate1, setActivate1 } = useContext(UserContext);

  const [bgColor, setBgColor] = useState("#");
  const [bgColor1, setBgColor1] = useState("");
  const [bgColor2, setBgColor2] = useState("#");
  const [bgColor3, setBgColor3] = useState("#");

  const location = useLocation();
  const navigate = useNavigate();

  const handleScrollToCases = (to) => {
    if (location.pathname === "/") {
      // Ya estás en la ruta, solo hace scroll
      const section = document.getElementById(to);
      if (to === "cases") {
        section.scrollIntoView();
      } else if (to === "us") {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // No estás en la ruta principal, redirige con estado

      navigate("/", { state: { scrollTo: to } });
    }
  };

  useEffect(() => {
    const handleScroll = (element, set) => {
      const section = document.querySelector(`#${element}`);
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight - 200;
      const scrollY = window.scrollY;

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        set("#cc8809");
      } else {
        set("");
      }
    };
    window.addEventListener("scroll", () => handleScroll("hero", setBgColor));

    window.addEventListener("scroll", () =>
      handleScroll("services", setBgColor1)
    );
    window.addEventListener("scroll", () => handleScroll("cases", setBgColor2));
    window.addEventListener("scroll", () => handleScroll("us", setBgColor3));


    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [drop, setDrop] = useState(false);

  const handleDrop = () => {
    setDrop(!drop);
  };

  const handleActiveLink = (e) => {
    document.querySelectorAll(".activeLink").forEach((element) => {
      element.classList.remove("activeLink");
    });

    e.target.classList.add("activeLink");
  };

  return (
    <>
      <header className="header">
        <nav>
          <ul>
            <li>
              <NavLink
                to={"/"}
                onClick={() => {
                  setBgColor("#cc8809");
                  window.scrollTo({ top: 0 });
                }}
                style={{ backgroundColor: bgColor }}
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <Link
                onClick={() => handleScrollToCases("us")}
                to="us"
                smooth={true}
                duration={900}
                spy={true}
                style={{ backgroundColor: bgColor3 }}
              >
                Nosotros
              </Link>
            </li>
            <li
              onMouseEnter={() => handleDrop()}
              onMouseLeave={() => handleDrop()}
            >
              <span style={{ backgroundColor: bgColor1 }}>Servicios ▼</span>

              {drop && (
                <div className="dropdown">
                  <ul>
                    <li>
                      {" "}
                      <Link onClick={() => setActivate1(3)} to={"services"}>
                        Derecho Laboral
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link onClick={() => setActivate1(2)} to={"services"}>
                        Derecho De Familia Y Matrimonial
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link onClick={() => setActivate1(5)} to={"services"}>
                        Derecho Penal
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link onClick={() => setActivate1(4)} to={"services"}>
                        Derecho Inmobiliario
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link onClick={() => setActivate1(1)} to={"services"}>
                        Derecho Civil
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link
                onClick={() => handleScrollToCases("cases")}
                style={{ backgroundColor: bgColor2 }}
              >
                Casos de Exitos
              </Link>
            </li>
            <li>
              <NavLink
                to={"/test"}
                onClick={() => {
                  setBgColor(""), setBgColor2(""); setBgColor3("");
                }}
                className={({ isActive }) => (isActive ? "activeLink" : "")}
              >
                Testimonios
              </NavLink>
            </li>
            <li>
              <NavLink
                onClick={() => {
                  setBgColor(""), setBgColor2(""); setBgColor3("");
                }}
                to={"/blogs"}
                className={({ isActive }) => (isActive ? "activeLink" : "")}
              >
                Blogs
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="containerIconsHeader">
          <i className="fa-solid fa-magnifying-glass"></i>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fa-brands fa-skype"></i>
        </div>
      </header>
    </>
  );
}

export default Header;
