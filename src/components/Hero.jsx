import "../assets/styleHero.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import {
  Pagination,
  Navigation,
  Scrollbar,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import { useEffect, useRef, useContext } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { UserContext } from "../context/Context";

function Hero() {
  const { windowWidth } = useContext(UserContext);

  gsap.registerPlugin(useGSAP);
  const textSlide1 = useRef(null);
  const textSlide2 = useRef(null);
  const textSlide3 = useRef(null);
  const textSlide4 = useRef(null);
  const underline = useRef(null);
  const underline2 = useRef(null);
  const underline3 = useRef(null);
  const underline4 = useRef(null);
  const underline5 = useRef(null);
  const textSlide6 = useRef(null);
  const underline7 = useRef(null);
  const underline8 = useRef(null);
  const underline9 = useRef(null);
  const underline10 = useRef(null);
  const underline11 = useRef(null);
  const underline12 = useRef(null);
  const underline13 = useRef(null);
  const underline14 = useRef(null);

  const containerAnimate = useRef(null);
  const containerAnimate2 = useRef(null);
  const buttonHero = useRef(null);
  const buttonHero2 = useRef(null);

  const imgRef = useRef(null);
  const imageHero = [
    "https://betancourtlegal.es/wp-content/uploads/2021/07/slider4-1.jpg",
    "https://betancourtlegal.es/wp-content/uploads/2021/07/image-11.jpg",
  ];
  const animateSlide = () => {
    gsap.fromTo(
      textSlide1.current,
      { opacity: 0, y: 0, width: 0 },
      { opacity: 1, y: 0, width: "100%", duration: 5, ease: "power3.out" }
    );

    gsap.fromTo(
      textSlide2.current,
      {
        backgroundColor: "#ffffff",
        width: 0,
      },
      {
        backgroundColor: "transparent",
        width: "100%",
        duration: 1.5,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      textSlide3.current,
      { opacity: 0, y: 50, height: 0, backgroundColor: "#fffffff" },
      {
        opacity: 1,
        y: 0,
        height: 50,
        backgroundColor: "transparent",
        ease: "power3.out",
        duration: 1,
      }
    );
    gsap.fromTo(
      buttonHero.current,
      { opacity: 0, x: 200 },
      { opacity: 1, x: 0, ease: "bounce.out", duration: 1.5 }
    );

    gsap.fromTo(
      containerAnimate.current,
      { height: 0, backgroundColor: "#fffffff" },
      {
        height: "60%",
        backgroundColor: "transparent",
        duration: 1,
        ease: "power3.out",
      }
    );

    if (windowWidth > 950) {
      gsap.fromTo(
        underline.current,
        { width: "80%", borderBottom: "solid 1px #fffffff" },
        {
          width: "0%",
          borderBottom: "solid 1px #fffffff",
          duration: 2,
          ease: "power3.out",
        }
      );
      gsap.fromTo(
        underline2.current,
        { width: "0%", borderBottom: "solid 1px #fffffff" },
        {
          width: "80%",
          borderBottom: "solid 1px #fffffff",
          duration: 3,
          ease: "power3.out",
        }
      );
      gsap.fromTo(
        underline3.current,
        { width: "0%", borderBottom: "solid 1px #fffffff" },
        {
          width: "80%",
          borderBottom: "solid 1px #fffffff",
          duration: 3,
          ease: "power3.out",
        }
      );
    } else {
      gsap.fromTo(
        underline3.current,
        { width: "0%", borderBottom: "solid 1px #fffffff" },
        {
          width: "200%",
          borderBottom: "solid 1px #fffffff",
          duration: 3,
          ease: "power3.out",
        }
      );
      gsap.fromTo(
        underline2.current,
        { width: "0%", borderBottom: "solid 1px #fffffff" },
        {
          width: "200%",
          borderBottom: "solid 1px #fffffff",
          duration: 3,
          ease: "power3.out",
        }
      );
      gsap.fromTo(
        underline.current,
        { width: "150%", borderBottom: "solid 1px #fffffff" },
        {
          width: "0%",
          borderBottom: "solid 1px #fffffff",
          duration: 2,
          ease: "power3.out",
        }
      );
    }

    if (windowWidth > 950) {
      gsap.fromTo(
        underline4.current,
        { width: "0%", borderBottom: "solid 1px #fffffff" },
        {
          width: "55%",
          borderBottom: "solid 1px #fffffff",
          duration: 1.5,
          ease: "power3.out",
        }
      );
      gsap.fromTo(
        underline5.current,
        { width: "0%", borderBottom: "solid 1px #fffffff" },
        {
          width: "55%",
          borderBottom: "solid 1px #fffffff",
          duration: 2,
          ease: "power3.out",
        }
      );
    } else {
      gsap.fromTo(
        underline4.current,
        { width: "0%", borderBottom: "solid 1px #fffffff" },
        {
          width: "100%",
          borderBottom: "solid 1px #fffffff",
          duration: 1.5,
          ease: "power3.out",
        }
      );
      gsap.fromTo(
        underline5.current,
        { width: "0%", borderBottom: "solid 1px #fffffff" },
        {
          width: "100%",
          borderBottom: "solid 1px #fffffff",
          duration: 2,
          ease: "power3.out",
        }
      );
    }

    gsap.fromTo(
      underline7.current,
      { width: "0%", borderBottom: "solid 2px #fffffff" },
      {
        width: "20%",
        borderBottom: "solid 2px #fffffff",
        duration: 3,
        ease: "power3.out",
        position: "absolute",
      }
    );
    gsap.fromTo(
      underline8.current,
      {
        height: "0%",
        width: "0%",
        borderLeft: "solid 2px #fffffff",
      },
      {
        width: "0%",
        height: "25%",
        borderLeft: "solid 2px #fffffff",
        duration: 3,
        ease: "power3.out",
        position: "absolute",
      }
    );

    gsap.fromTo(
      underline9.current,
      { width: "0%", borderBottom: "solid 2px #fffffff" },
      {
        width: "20%",

        borderBottom: "solid 2px #fffffff",
        duration: 3,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      underline10.current,
      {
        height: "0%",
        width: "0%",
        borderRight: "solid 2px #fffffff",
      },
      {
        width: "0%",
        height: "25%",
        borderRight: "solid 2px #fffffff",
        duration: 3,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      underline11.current,
      { width: "0%", borderBottom: "solid 2px #fffffff" },
      {
        width: "20%",

        borderBottom: "solid 2px #fffffff",
        duration: 3,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      underline12.current,
      {
        height: "0%",
        width: "0%",
        borderRight: "solid 2px #fffffff",
      },
      {
        width: "0%",
        height: "25%",
        borderRight: "solid 2px #fffffff",
        duration: 3,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      underline13.current,
      {
        height: "0%",
        width: "0%",
        borderRight: "solid 2px #fffffff",
      },
      {
        width: "0%",
        height: "25%",
        borderRight: "solid 2px #fffffff",
        duration: 3,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      underline14.current,
      { width: "0%", borderBottom: "solid 2px #fffffff" },
      {
        width: "20%",

        borderBottom: "solid 2px #fffffff",
        duration: 3,
        ease: "power3.out",
      }
    );
    gsap.fromTo(
      containerAnimate2.current,
      { height: "0%", width: "55%", backgroundColor: "#fffffff" },
      {
        width: "55%",
        height: "80%",
        backgroundColor: "transparent",
        duration: 1,
        ease: "power3.out",
      }
    );
  };

  useGSAP(() => {
    animateSlide();
  }, []);

  return (
    <div id="hero" className="containerHero">
      <Swiper
        className="containerSlide"
        spaceBetween={20}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={700}
        loop={true}
        navigation={false} // Activa los botones de navegación
        // Activa la barra de scroll
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Navigation, Scrollbar, Pagination, Autoplay, EffectFade]}
        onSlideChange={() => {
          animateSlide();
        }}
      >
        <SwiperSlide>
          <div
            style={
              windowWidth < 950
                ? {
                    backgroundImage: `url(https://betancourtlegal.es/wp-content/uploads/2021/07/slider4-1.jpg)`,
                    backgroundPosition: "55% 50%",
                  }
                : {
                    backgroundImage: `url(https://betancourtlegal.es/wp-content/uploads/2021/07/slider4-1.jpg)`,
                  }
            }
            className="slide"
          >
            <div className="containerTextSlide">
              <div ref={underline4}></div>
              <div ref={underline5}></div>
              <h1
                style={
                  windowWidth > 950
                    ? {
                        fontWeight: "200",
                        fontSize: "1.5em",
                        marginLeft: "1.4em",
                        letterSpacing: "0.3em",
                      }
                    : {
                        marginLeft: "1em",
                        fontWeight: "200",
                        fontSize: "0.8em",
                        letterSpacing: "0.3em",
                      }
                }
                className="textSlide textSlide1"
                ref={textSlide1}
              >
                BIENVENIDO A BETANCOUR LEGAL
              </h1>
              <h1
                className="textSlide textSlide2"
                style={
                  windowWidth < 950 ? { fontSize: "0.8em" } : { undefined }
                }
                ref={textSlide2}
              >
                LA LEALTAD ES MUY IMPORTANTE PARA EL CLIENTE
              </h1>
              <p
                className="textSlide textSlide3"
                ref={textSlide3}
                style={
                  windowWidth > 950
                    ? {
                        fontWeight: "500",
                        fontSize: "1.3em",
                        width: "50%",
                        textAlign: "left",
                        marginLeft: "1.5em",
                      }
                    : { width: "60%", textAlign: "left" }
                }
              >
                Si se le acusa de cometer un delito, necesitará lo mejor.
              </p>
              <button className="buttonStyle buttonHero" ref={buttonHero}>
                Comencemos
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(https://betancourtlegal.es/wp-content/uploads/2021/07/slider-2.jpg)`,
            }}
            className="slide"
          >
            <div className="containerTextSlide3">
              <div className="containerAnimate2" ref={containerAnimate2}>
                <div className="underline7" ref={underline7}></div>
                <div className="underline8" ref={underline8}></div>
                <div className="underline9" ref={underline9}></div>
                <div className="underline10" ref={underline10}></div>
                <div className="underline11" ref={underline11}></div>
                <div className="underline12" ref={underline12}></div>
                <div className="underline13" ref={underline13}></div>
                <div className="underline14" ref={underline14}></div>
                <h1
                  style={{
                    fontWeight: "200",
                    fontSize: "1.5em",
                    letterSpacing: "0.3em",
                  }}
                  className="textSlide textSlide1"
                >
                  BIENVENIDO A BETANCOUR LEGAL
                </h1>
                <h1
                  className="textSlide textSlide2"
                  style={
                    windowWidth < 950 ? { fontSize: "0.7em" } : { undefined }
                  }
                >
                  LA LEALTAD ES MUY IMPORTANTE PARA EL CLIENTE
                </h1>
                <p
                  className="textSlide textSlide3"
                  style={
                    windowWidth < 950
                      ? { fontSize: "0.9em", textAlign: "center" }
                      : {
                          fontWeight: "500",
                          fontSize: "1.3em",

                          textAlign: "center",
                        }
                  }
                >
                  Si se le acusa de cometer un delito, necesitará lo mejor.
                </p>
                <button
                  className="buttonStyle buttonHero2"
                  style={
                    windowWidth < 950 ? { width: "50%" } : { width: "28%" }
                  }
                  ref={buttonHero2}
                >
                  Comencemos
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            ref={imgRef}
            style={
              windowWidth < 950
                ? {
                    backgroundImage: `url(https://betancourtlegal.es/wp-content/uploads/2021/07/image-11.jpg)`,
                    backgroundPosition: "55% 50%",
                  }
                : {
                    backgroundImage: `url(https://betancourtlegal.es/wp-content/uploads/2021/07/image-11.jpg)`,
                  }
            }
            className="slide"
          >
            <div className="containerTextSlide2">
              <div
                className="containerAnimate"
                style={
                  windowWidth < 950
                    ? { alignItems: "end", marginRight: "0.5em" }
                    : { undefined }
                }
                ref={containerAnimate}
              >
                <div ref={underline2}></div>
                <h1
                  style={
                    windowWidth > 950
                      ? {
                          fontWeight: "200",
                          fontSize: "1.5em",

                          letterSpacing: "0.3em",
                        }
                      : {
                          fontWeight: "200",
                          fontSize: "0.9em",

                          letterSpacing: "0.3em",
                        }
                  }
                  className="textSlide textSlide1"
                  ref={textSlide4}
                >
                  BIENVENIDO A BETANCOUR LEGAL
                </h1>
                <h1
                  className="textSlide textSlide2"
                  style={
                    windowWidth < 950 ? { fontSize: "0.9em" } : { undefined }
                  }
                >
                  LA LEALTAD ES MUY IMPORTANTE PARA EL CLIENTE
                </h1>
                <div ref={underline}></div>
                <p
                  className="textSlide textSlide3"
                  ref={textSlide6}
                  style={
                    windowWidth < 950
                      ? { textAlign: "end", fontSize: "1em", width: "120%" }
                      : {
                          fontWeight: "500",
                          textAlign: "center",
                          fontSize: "1.3em",
                          width: "70%",
                          marginTop: "0.5em",
                        }
                  }
                >
                  Si se le acusa de cometer un delito, necesitará lo mejor.
                </p>
                <button
                  style={windowWidth < 950 ? { width: "80%" } : { undefined }}
                  className="buttonStyle buttonHero2"
                  ref={buttonHero2}
                >
                  Comencemos
                </button>
                <div ref={underline3}></div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Hero;
