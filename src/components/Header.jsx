import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/Context";

import "../assets/styleHeader.css";

function Header() {
  const { activate1, setActivate1, windowWidth } = useContext(UserContext);

  const [bgColor, setBgColor] = useState("#");
  const [bgColor1, setBgColor1] = useState("");
  const [bgColor2, setBgColor2] = useState("#");
  const [bgColor3, setBgColor3] = useState("#");
  const [bgColor4, setBgColor4] = useState("#");
  const [bgColor5, setBgColor5] = useState("#");

  const [menuSide, setMenuSide] = useState(false);

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
      } else if (to === "test") {
        section.scrollIntoView({ behavior: "instant" });
      } else if (to === "blogs") {
        section.scrollIntoView({ behavior: "instant" });
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
    window.addEventListener("scroll", () => handleScroll("test2", setBgColor4));
    window.addEventListener("scroll", () => handleScroll("blogs", setBgColor5));

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [drop, setDrop] = useState(false);

  const handleDrop = () => {
    setDrop(!drop);
  };

  return (
    <>
      <header className="header">
        {windowWidth < 950 && (
          <>
            <i
              onClick={() => setMenuSide(!menuSide)}
              className="openMenuIcon fa-solid fa-bars"
            ></i>
            <div
              className="containerNavMobile"
              style={menuSide ? { left: "0" } : { left: "-100%" }}
            >
              <nav className="navMobile">
                <ul>
                  <li
                    className="liCloseIcon"
                    onClick={() => setMenuSide(!menuSide)}
                  ></li>
                  <li>
                    <Link
                      to={"/"}
                      onClick={() => {
                        setBgColor5(""), setBgColor2("");
                        setBgColor3("");
                        setBgColor4("");
                        setBgColor("#cc8809");
                        handleScrollToCases("");
                        window.scrollTo({ top: 0 });
                      }}
                      style={{ backgroundColor: bgColor }}
                    >
                      Inicio
                    </Link>
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
                    onMouseEnter={windowWidth >= 950 ? handleDrop : undefined}
                    onMouseLeave={windowWidth >= 950 ? handleDrop : undefined}
                    onClick={windowWidth <= 950 ? handleDrop : undefined}
                  >
                    <span
                      className="spanMobile"
                      style={{ backgroundColor: bgColor1 }}
                    >
                      Servicios ▼
                      {drop && (
                        <div className="dropdownMobile">
                          <ul>
                            <li>
                              {" "}
                              <Link
                                style={
                                  activate1 === 3
                                    ? { color: "#cc8809", textIndent: "1.5em" }
                                    : { color: "#222222" }
                                }
                                onClick={() => {
                                  setActivate1(3);
                                  handleScrollToCases("services");
                                }}
                                to={"services"}
                              >
                                Derecho Laboral
                              </Link>
                            </li>
                            <li>
                              {" "}
                              <Link
                                style={
                                  activate1 === 2
                                    ? { color: "#cc8809", textIndent: "1.5em" }
                                    : { color: "#222222" }
                                }
                                onClick={() => {
                                  setActivate1(2);
                                  handleScrollToCases("services");
                                }}
                                to={"services"}
                              >
                                Derecho De Familia Y Matrimonial
                              </Link>
                            </li>
                            <li>
                              {" "}
                              <Link
                                style={
                                  activate1 === 5
                                    ? { color: "#cc8809", textIndent: "1.5em" }
                                    : { color: "#222222" }
                                }
                                onClick={() => {
                                  setActivate1(5);
                                  handleScrollToCases("services");
                                }}
                                to={"services"}
                              >
                                Derecho Penal
                              </Link>
                            </li>
                            <li>
                              {" "}
                              <Link
                                style={
                                  activate1 === 4
                                    ? { color: "#cc8809", textIndent: "1.5em" }
                                    : { color: "#222222" }
                                }
                                onClick={() => {
                                  setActivate1(4);
                                  handleScrollToCases("services");
                                }}
                                to={"services"}
                              >
                                Derecho Inmobiliario
                              </Link>
                            </li>
                            <li>
                              {" "}
                              <Link
                                style={
                                  activate1 === 1
                                    ? { color: "#cc8809", textIndent: "1.5em" }
                                    : { color: "#222222" }
                                }
                                onClick={() => {
                                  setActivate1(1);
                                  handleScrollToCases("services");
                                }}
                                to={"services"}
                              >
                                Derecho Civil
                              </Link>
                            </li>
                          </ul>
                        </div>
                      )}
                    </span>
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
                    <Link
                      onClick={() => {
                        setBgColor(""), setBgColor2("");
                        setBgColor3("");
                        setBgColor5("");
                        handleScrollToCases("test");
                      }}
                      style={{ backgroundColor: bgColor4 }}
                    >
                      Testimonios
                    </Link>
                  </li>
                  <li>
                    <Link
                      onClick={() => {
                        setBgColor(""), setBgColor2("");
                        setBgColor3("");
                        setBgColor4("");
                        handleScrollToCases("blogs");
                      }}
                      style={{ backgroundColor: bgColor5 }}
                    >
                      Blogs
                    </Link>
                  </li>
                </ul>
              </nav>
              <div
                onClick={() => setMenuSide(!menuSide)}
                className="sideNav"
                style={{ height: "100%", width: "50%", backgroundColor:"transparent" }}
              ></div>
            </div>
          </>
        )}

        {windowWidth > 950 && (
          <nav className="navPc">
            <ul>
              <li>
                <Link
                  to={"/"}
                  onClick={() => {
                    setBgColor("#cc8809");
                    window.scrollTo({ top: 0 });
                  }}
                  style={{ backgroundColor: bgColor }}
                >
                  Inicio
                </Link>
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
                <span className="spanPc" style={{ backgroundColor: bgColor1 }}>
                  Servicios ▼
                </span>

                {drop && (
                  <div className="dropdown">
                    <ul>
                      <li>
                        {" "}
                        <Link
                          onClick={() => {
                            setActivate1(3);
                            handleScrollToCases("services");
                          }}
                        >
                          Derecho Laboral
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link
                          onClick={() => {
                            setActivate1(2);
                            handleScrollToCases("services");
                          }}
                        >
                          Derecho De Familia Y Matrimonial
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link
                          onClick={() => {
                            setActivate1(5);
                            handleScrollToCases("services");
                          }}
                        >
                          Derecho Penal
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link
                          onClick={() => {
                            setActivate1(4);
                            handleScrollToCases("services");
                          }}
                        >
                          Derecho Inmobiliario
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link
                          onClick={() => {
                            setActivate1(1);
                            handleScrollToCases("services");
                          }}
                        >
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
                <Link
                  onClick={() => {
                    setBgColor(""), setBgColor2("");
                    setBgColor3("");
                    setBgColor5("");
                    handleScrollToCases("test");
                  }}
                  style={{ backgroundColor: bgColor4 }}
                >
                  Testimonios
                </Link>
              </li>
              <li>
                <Link
                  onClick={() => {
                    setBgColor(""), setBgColor2("");
                    setBgColor3("");
                    setBgColor4("");
                    handleScrollToCases("blogs");
                  }}
                  style={{ backgroundColor: bgColor5 }}
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </nav>
        )}

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
