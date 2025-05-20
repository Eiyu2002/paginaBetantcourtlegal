import { act, useRef, useEffect } from "react";
import "../assets/styleSuccesCasesPage.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useContext } from "react";
import { UserContext } from "../context/Context";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
gsap.registerPlugin(ScrollToPlugin);

function SuccesCasesPage() {
  const elementSuccesCases1 = useRef(null);
  const elementSuccesCases2 = useRef(null);
  const elementSuccesCases3 = useRef(null);
  const elementSuccesCases4 = useRef(null);
  const elementSuccesCases5 = useRef(null);
  const iconsSuccesCases1 = useRef(null);
  const iconsSuccesCases2 = useRef(null);
  const iconsSuccesCases3 = useRef(null);
  const iconsSuccesCases4 = useRef(null);
  const iconsSuccesCases5 = useRef(null);
  const containerInfoService = useRef(null);
  const swiperSuccesCases = useRef(null);

  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const directionRef = useRef("down");
  const isInterrupted = useRef(false);

  const { activate1, setActivate1, windowWidth } = useContext(UserContext);

  const handleMouseEnter1 = () => {
    gsap.to(elementSuccesCases1.current, {
      transform: "rotate(-10deg)",
      backgroundColor: "#cc8809",

      duration: 0.5,
      ease: "power3.out",
    });
    gsap.to(iconsSuccesCases1.current, {
      backgroundColor: "#cc8809",
      duration: 1,
      ease: "power3.out",
    });
  };
  const handleMouseLeave1 = () => {
    gsap.to(elementSuccesCases1.current, {
      transform: "rotate(10deg)",
      backgroundColor: "#3D3D3D",

      duration: 0.5,
      ease: "power3.out",
    });
    gsap.to(iconsSuccesCases1.current, {
      backgroundColor: "#fffffff",
      duration: 1,
      ease: "power3.out",
    });
  };

  const handleMouseEnter2 = () => {
    gsap.to(elementSuccesCases2.current, {
      transform: "rotate(-10deg)",
      duration: 0.5,
      backgroundColor: "#cc8809",

      ease: "power3.out",
    });
    gsap.to(iconsSuccesCases2.current, {
      backgroundColor: "#cc8809",
      duration: 1,
      ease: "power3.out",
    });
  };
  const handleMouseLeave2 = () => {
    gsap.to(elementSuccesCases2.current, {
      transform: "rotate(10deg)",
      backgroundColor: "#3D3D3D",
      duration: 0.5,
      ease: "power3.out",
    });
    gsap.to(iconsSuccesCases2.current, {
      backgroundColor: "#fffffff",
      duration: 1,
      ease: "power3.out",
    });
  };

  const handleMouseEnter3 = () => {
    gsap.to(elementSuccesCases3.current, {
      transform: "rotate(-10deg)",
      backgroundColor: "#cc8809",

      duration: 0.5,
      ease: "power3.out",
    });
    gsap.to(iconsSuccesCases3.current, {
      backgroundColor: "#cc8809",
      duration: 1,
      ease: "power3.out",
    });
  };
  const handleMouseLeave3 = () => {
    gsap.to(elementSuccesCases3.current, {
      transform: "rotate(10deg)",
      backgroundColor: "#3D3D3D",

      duration: 0.5,
      ease: "power3.out",
    });
    gsap.to(iconsSuccesCases3.current, {
      backgroundColor: "#fffffff",
      duration: 1,
      ease: "power3.out",
    });
  };

  const handleMouseEnter4 = () => {
    gsap.to(elementSuccesCases4.current, {
      transform: "rotate(-10deg)",
      backgroundColor: "#cc8809",

      duration: 0.5,
      ease: "power3.out",
    });
    gsap.to(iconsSuccesCases4.current, {
      backgroundColor: "#cc8809",
      duration: 1,
      ease: "power3.out",
    });
  };
  const handleMouseLeave4 = () => {
    gsap.to(elementSuccesCases4.current, {
      transform: "rotate(10deg)",
      backgroundColor: "#3D3D3D",

      duration: 0.5,
      ease: "power3.out",
    });
    gsap.to(iconsSuccesCases4.current, {
      backgroundColor: "#fffffff",
      duration: 1,
      ease: "power3.out",
    });
  };

  const handleMouseEnter5 = () => {
    gsap.to(elementSuccesCases5.current, {
      transform: "rotate(-10deg)",
      backgroundColor: "#cc8809",

      duration: 0.5,
      ease: "power3.out",
    });
    gsap.to(iconsSuccesCases5.current, {
      backgroundColor: "#cc8809",
      duration: 1,
      ease: "power3.out",
    });
  };
  const handleMouseLeave5 = () => {
    gsap.to(elementSuccesCases5.current, {
      transform: "rotate(10deg)",
      backgroundColor: "#3D3D3D",

      duration: 0.5,
      ease: "power3.out",
    });
    gsap.to(iconsSuccesCases5.current, {
      backgroundColor: "#fffffff",
      duration: 1,
      ease: "power3.out",
    });
  };

  const handleActive = (element) => {
    gsap.to(element.current, {
      width: "0%",
      height: "0%",
      duration: 0.5,
      onComplete: () => {
        setActivate1(0);
      },
      ease: "power3.out",
    });
  };

  const handleActive2 = (element, num) => {
    gsap.to(element.current, {
      height: "0%",
      duration: 0.5,
      onComplete: () => {
        setActivate1(num);
      },
      ease: "power3.out",
    });
  };

  useGSAP(() => {
    if (windowWidth > 950) {
      gsap.fromTo(
        containerInfoService.current,
        { width: "0%", height: "0%" },
        { width: "65%", height: "48%", duration: 1, ease: "power3.out" }
      );
      gsap.fromTo(
        swiperSuccesCases.current,
        { height: "0%" },
        { height: "70%", duration: 1, ease: "power3.out" }
      );
    } else {
      gsap.fromTo(
        containerInfoService.current,
        { width: "0%", height: "0%" },
        { width: "100%", height: "60%", duration: 1, ease: "power3.out" }
      );
      gsap.fromTo(
        swiperSuccesCases.current,
        { height: "0%" },
        { height: "70%", duration: 1, ease: "power3.out" }
      );
    }
  }, [activate1]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scrollDown = () => {
      animationRef.current = gsap.to(container, {
        duration: 5,
        scrollTop: container.scrollHeight,
        ease: "power1.inOut",
        onComplete: () => {
          if (!isInterrupted.current) {
            directionRef.current = "up";
            scrollUp();
          }
        },
      });
    };

    const scrollUp = () => {
      animationRef.current = gsap.to(container, {
        duration: 5,
        scrollTop: 0,
        ease: "power1.inOut",
        onComplete: () => {
          if (!isInterrupted.current) {
            directionRef.current = "down";
            scrollDown();
          }
        },
      });
    };

    scrollDown();

    const interrupt = () => {
      isInterrupted.current = true;
      if (animationRef.current) animationRef.current.kill();
    };

    // Detectar cualquier interacción del usuario dentro del contenedor
    container.addEventListener("wheel", interrupt);
    container.addEventListener("touchstart", interrupt);
    container.addEventListener("mouseenter", interrupt); // Opcional
    container.addEventListener("keydown", interrupt); // Si tiene focus

    return () => {
      container.removeEventListener("wheel", interrupt);
      container.removeEventListener("touchstart", interrupt);
      container.removeEventListener("mouseenter", interrupt);
      container.removeEventListener("keydown", interrupt);
    };
  }, []);

  return (
    <div id="services" className="containerSuccesCasesPage">
      <div style={{ height: "10%" }}></div>

      <div className="containerSuccesCases">
        <div className="containerSuccesCasesText1">
          <h1 className="succesCasesText1">SERVICIOS</h1>
        </div>
        <div className="containerSuccesCasesText2">
          <h1 className="succesCasesText2">Our Practice Area</h1>
        </div>

        {activate1 === 0 && (
          <Swiper
            className="swiperSuccesCases"
            ref={swiperSuccesCases}
            slidesPerView={windowWidth < 950 ? 1 : 3}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            spaceBetween={7}
            initialSlide={1}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination, Navigation, Autoplay]}
          >
            <SwiperSlide className="swiperSlideSuccesCases">
              <div
                className="cardSuccesCases"
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1}
                onClick={() => {
                  handleActive2(swiperSuccesCases, 1);
                }}
              >
                <div className="elementSuccesCases" ref={elementSuccesCases1}>
                  {" "}
                </div>
                <h1 className="titleSuccesCases">Derecho Civil</h1>
                <div className="iconsSuccesCases" ref={iconsSuccesCases1}>
                  <i className="fa-solid fa-person-military-to-person"></i>
                </div>
                <h1 className="succesCasesText3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nisi, sint!
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiperSlideSuccesCases">
              <div
                className="cardSuccesCases"
                onClick={() => {
                  handleActive2(swiperSuccesCases, 2);
                }}
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
              >
                <div
                  className="elementSuccesCases"
                  ref={elementSuccesCases2}
                ></div>
                <h1 className="titleSuccesCases">
                  Derecho De Familia Y Matrimonial
                </h1>
                <div className="iconsSuccesCases" ref={iconsSuccesCases2}>
                  <i className="fa-solid fa-people-roof"></i>{" "}
                </div>
                <h1 className="succesCasesText3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nisi, sint!
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiperSlideSuccesCases">
              <div
                className="cardSuccesCases"
                onClick={() => {
                  handleActive2(swiperSuccesCases, 3);
                }}
                onMouseEnter={handleMouseEnter3}
                onMouseLeave={handleMouseLeave3}
              >
                <div
                  className="elementSuccesCases"
                  ref={elementSuccesCases3}
                ></div>
                <h1 className="titleSuccesCases">Derecho Laboral</h1>
                <div className="iconsSuccesCases" ref={iconsSuccesCases3}>
                  <i className="fa-solid fa-briefcase"></i>{" "}
                </div>
                <h1 className="succesCasesText3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nisi, sint!
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiperSlideSuccesCases">
              <div
                className="cardSuccesCases"
                onClick={() => {
                  handleActive2(swiperSuccesCases, 4);
                }}
                onMouseEnter={handleMouseEnter4}
                onMouseLeave={handleMouseLeave4}
              >
                <div
                  className="elementSuccesCases"
                  ref={elementSuccesCases4}
                ></div>
                <h1 className="titleSuccesCases">Derecho Inmobiliario</h1>
                <div className="iconsSuccesCases" ref={iconsSuccesCases4}>
                  <i className="fa-solid fa-house-medical-circle-check"></i>{" "}
                </div>
                <h1 className="succesCasesText3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nisi, sint!
                </h1>
              </div>
            </SwiperSlide>
            <SwiperSlide className="swiperSlideSuccesCases">
              <div
                className="cardSuccesCases"
                onClick={() => {
                  handleActive2(swiperSuccesCases, 5);
                }}
                onMouseEnter={handleMouseEnter5}
                onMouseLeave={handleMouseLeave5}
              >
                <div
                  className="elementSuccesCases"
                  ref={elementSuccesCases5}
                ></div>
                <h1 className="titleSuccesCases">Derecho Penal</h1>
                <div className="iconsSuccesCases" ref={iconsSuccesCases5}>
                  <i className="fa-solid fa-handcuffs"></i>
                </div>
                <h1 className="succesCasesText3">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Nisi, sint!
                </h1>
              </div>
            </SwiperSlide>
          </Swiper>
        )}

        {activate1 === 1 && (
          <>
            <div className="containerInfoService" ref={containerInfoService}>
              <div className="elementcontainerInfoService">
                <div className="containerTitleInfoService">
                  <h1>Derecho Civil</h1>
                </div>
                {windowWidth > 950 ? (
                  <>
                    {" "}
                    <div className="containerListService">
                      <ol ref={containerRef}>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Reclamaciones de Deudas</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Accidentes de tráfico</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Indemnizaciones por daños</h1>
                        </li>
                      </ol>
                    </div>
                    <div className="containerListService">
                      {" "}
                      <ol>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Incumplimientos contractuales</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Monitorios</h1>
                        </li>
                      </ol>
                    </div>
                  </>
                ) : (
                  <>
                    {" "}
                    <div className="containerListService">
                      <ol>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Reclamaciones de Deudas</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Accidentes de tráfico</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Indemnizaciones por daños</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Incumplimientos contractuales</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Monitorios</h1>
                        </li>
                      </ol>
                    </div>
                  </>
                )}

                <div
                  onClick={() => handleActive(containerInfoService)}
                  className="toBackService"
                >
                  <h1>Volver</h1>
                </div>
              </div>
            </div>
          </>
        )}

        {activate1 === 2 && (
          <>
            <div className="containerInfoService" ref={containerInfoService}>
              <div className="elementcontainerInfoService">
                <div className="containerTitleInfoService2">
                  <h1>Derecho De Familia Y Matrimonial</h1>
                </div>
                {windowWidth > 950 ? (
                  <>
                    {" "}
                    <div className="containerListService listService2">
                      <ol>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Divorcios Express</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Custodia Compartida</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Pensiones Alimentarias</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Liquidación de ganancias</h1>
                        </li>
                      </ol>
                    </div>
                    <div className="containerListService listService2">
                      {" "}
                      <ol>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Herencias y Testamentos</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Modificación de medidas</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Separaciones de Mutuo Acuerdo</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Mediación Familiar</h1>
                        </li>
                      </ol>
                    </div>
                    <div className="containerListService listService2">
                      {" "}
                      <ol>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Régimen de Visitas</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Violencia doméstica</h1>
                        </li>
                      </ol>
                    </div>
                  </>
                ) : (
                  <>
                    {" "}
                    <div className="containerListService">
                      <ol>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Divorcios Express</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Custodia Compartida</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Pensiones Alimentarias</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Liquidación de ganancias</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Herencias y Testamentos</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Modificación de medidas</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Separaciones de Mutuo Acuerdo</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Mediación Familiar</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Régimen de Visitas</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Violencia doméstica</h1>
                        </li>
                      </ol>
                    </div>
                  </>
                )}

                <div
                  onClick={() => handleActive(containerInfoService)}
                  className="toBackService"
                >
                  <h1>Volver</h1>
                </div>
              </div>
            </div>
          </>
        )}

        {activate1 === 3 && (
          <>
            <div className="containerInfoService" ref={containerInfoService}>
              <div className="elementcontainerInfoService">
                <div className="containerTitleInfoService3">
                  <h1>Derecho Laboral</h1>
                </div>
                {windowWidth > 950 ? (
                  <>
                    {" "}
                    <div className="containerListService listService3">
                      <ol>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Accidentes Laborales</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Impugnación de despidos</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Acoso Laboral</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Reclamaciones Salariales</h1>
                        </li>
                      </ol>
                    </div>
                    <div className="containerListService listService3">
                      {" "}
                      <ol>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Incapacidades Laborales</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Régimen sancionador</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Implementación de planes y protocolos</h1>
                        </li>
                      </ol>
                    </div>
                  </>
                ) : (
                  <>
                    {" "}
                    <div className="containerListService">
                      <ol>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Accidentes Laborales</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Impugnación de despidos</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Acoso Laboral</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Reclamaciones Salariales</h1>
                        </li>

                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Incapacidades Laborales</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Régimen sancionador</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Implementación de planes y protocolos</h1>
                        </li>
                      </ol>
                    </div>
                  </>
                )}

                <div
                  onClick={() => handleActive(containerInfoService)}
                  className="toBackService"
                >
                  <h1>Volver</h1>
                </div>
              </div>
            </div>
          </>
        )}

        {activate1 === 4 && (
          <>
            <div className="containerInfoService" ref={containerInfoService}>
              <div className="elementcontainerInfoService">
                <div className="containerTitleInfoService4">
                  <h1>Derecho Inmobiliario</h1>
                </div>

                <div className="containerListService listService4">
                  <ol>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      <h1>Desahucios </h1>
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      <h1>Reclamación de cantidades</h1>
                    </li>
                    <li>
                      <i className="fa-solid fa-circle-check"></i>
                      <h1>Contratos de alquiler</h1>
                    </li>
                  </ol>
                </div>

                <div
                  onClick={() => handleActive(containerInfoService)}
                  className="toBackService"
                >
                  <h1>Volver</h1>
                </div>
              </div>
            </div>
          </>
        )}

        {activate1 === 5 && (
          <>
            <div className="containerInfoService" ref={containerInfoService}>
              <div className="elementcontainerInfoService">
                <div className="containerTitleInfoService5">
                  <h1>Derecho Penal</h1>
                </div>
                {windowWidth > 950 ? (
                  <>
                    {" "}
                    <div className="containerListService">
                      <ol>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Alcoholemias</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Lesiones</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Violencia de género</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Estafas y Fraudes</h1>
                        </li>
                      </ol>
                    </div>
                    <div className="containerListService">
                      {" "}
                      <ol>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Robos y Hurtos</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Asistencia en detenciones</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Tráfico de drogas</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Jugos Rápidos</h1>
                        </li>
                      </ol>
                    </div>
                  </>
                ) : (
                  <>
                    {" "}
                    <div className="containerListService">
                      <ol>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Alcoholemias</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Lesiones</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Violencia de género</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Estafas y Fraudes</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Robos y Hurtos</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Asistencia en detenciones</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Tráfico de drogas</h1>
                        </li>
                        <li>
                          <i className="fa-solid fa-circle-check"></i>
                          <h1>Jugos Rápidos</h1>
                        </li>
                      </ol>
                    </div>
                  </>
                )}

                <div
                  onClick={() => handleActive(containerInfoService)}
                  className="toBackService"
                >
                  <h1>Volver</h1>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SuccesCasesPage;
