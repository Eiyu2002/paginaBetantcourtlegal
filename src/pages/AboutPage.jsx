import React, { useRef, useState } from "react";
import "../assets/styleAboutPage.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
let ctx = gsap.matchMedia();
function AboutPage() {
  const img0 = useRef(null);
  const img3 = useRef(null);
  const underlineAbout2 = useRef(null);
  const underlineAbout3 = useRef(null);
  const underlineAbout1 = useRef(null);
  const [progressValue, setProgressValue] = useState(0);

  useGSAP(() => {
    gsap
      .timeline({ repeat: -1, yoyo: true })
      .to(img0.current, {
        scale: 1.1,

        duration: 1.5,
        ease: "power2.inOut",
      })
      .to(img0.current, {
        scale: 1,

        duration: 1.5,
        ease: "power2.inOut",
      });

    gsap
      .timeline({ repeat: -1, yoyo: true })
      .to(img3.current, {
        scale: 1.1,

        duration: 1.5,
        ease: "power2.inOut",
      })
      .to(img3.current, {
        scale: 1,

        duration: 1.5,
        ease: "power2.inOut",
      });

    gsap.fromTo(
      underlineAbout2.current,
      { width: "0%" },
      {
        width: "70%",
        duration: 1,
        ease: "power1.out",

        scrollTrigger: {
          trigger: img0.current, // Elemento que activa la animación
          start: "top 80%", // Inicia cuando la parte superior del elemento llega al 80% de la pantalla
          toggleActions: "play none none none", // Solo se ejecuta una vez
        },
      }
    );

    ctx.add("(max-width: 1400px)", () => {
      gsap.fromTo(
        underlineAbout3.current,
        { x: -400, innerText: 0 },
        {
          x: 0,
          innerText: 70,
          duration: 1,

          ease: "power1.out",
          scrollTrigger: {
            trigger: img0.current, // Elemento que activa la animación
            start: "top 80%", // Inicia cuando la parte superior del elemento llega al 80% de la pantalla
            toggleActions: "play none none none", // Solo se ejecuta una vez
          },
          onUpdate: function () {
            const roundedValue = parseInt(this.targets()[0].innerText);
            setProgressValue(roundedValue);
            this.targets()[0].innerText = roundedValue;
          },
        }
      );
    });
    ctx.add("(min-width: 1400px)", () => {
      gsap.fromTo(
        underlineAbout3.current,
        { x: -600, innerText: 0 },
        {
          x: 0,
          innerText: 70,
          duration: 1,

          ease: "power1.out",
          scrollTrigger: {
            trigger: img0.current, // Elemento que activa la animación
            start: "top 80%", // Inicia cuando la parte superior del elemento llega al 80% de la pantalla
            toggleActions: "play none none none", // Solo se ejecuta una vez
          },
          onUpdate: function () {
            const roundedValue = parseInt(this.targets()[0].innerText);
            setProgressValue(roundedValue);
            this.targets()[0].innerText = roundedValue;
          },
        }
      );
    });


  }, []);

  return (
    <div id="us" className="containerAboutPage">
      <div className="containerSection">
        <div className="containerImgs">
          <div className="img0" ref={img0}></div>

          <div className="img1"></div>
          <div className="img2"></div>

          <div className="img3" ref={img3}></div>
        </div>
        <div className="containerTextAbout">
          <div className="containerTextAbout2">
            <h1 className="textAbout1">ABOUT US</h1>
            <h1 className="textAbout2">
              ¿Por qué necesitas a Betancourt Legal?
            </h1>
            <p className="textAbout3">
              En Betancourt Legal te ofrecemos soluciones rápidas, eficaces y
              personalizadas. Contamos con un equipo de abogados expertos en
              diversas áreas del derecho, comprometidos con la defensa de tus
              derechos. Ya seas una empresa o un trabajador, te proporcionamos
              asesoría legal clara y directa, adaptada a tus necesidades.
              Nuestro objetivo es resolver tus problemas jurídicos de manera
              ágil y eficiente, garantizando siempre la máxima transparencia y
              confianza. Confía en nosotros para proteger lo que más importa y
              tomar decisiones legales con seguridad.
            </p>
            <div className="containerTextAbout3">
              <div className="containerSpeechBubble">
                <div className="speechBubble">
                  <h1>
                    Adalat Trial Lawyers offers a team of dedicated & aggressive
                    personal injury attorneys.
                  </h1>
                </div>

                <div className="containerImg4">
                  <div className="img4"></div>
                  <div className="img5"></div>
                </div>
                <h1 className="textAbout4">CEO & CO - FOUNDER</h1>
              </div>
              <div className="containerListAbout">
                <ul>
                  <li>
                    <i className="fa-solid fa-square-check"></i>Serving 18 years
                  </li>
                  <li>
                    <i className="fa-solid fa-square-check"></i>Strong Network
                  </li>
                  <li>
                    <i className="fa-solid fa-square-check"></i>100 Year Family
                    History
                  </li>
                  <li>
                    <i className="fa-solid fa-square-check"></i>Excellent
                    Operational Model
                  </li>
                  <li>
                    <i className="fa-solid fa-square-check"></i>Practical
                    Commercial Solution
                  </li>
                  <li>
                    <i className="fa-solid fa-square-check"></i>Probably the
                    Largest Law Firm
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="underlineAbout1" ref={underlineAbout1}>
            <div className="underlineAbout2" ref={underlineAbout2}></div>
            <div className="underlineAbout3" ref={underlineAbout3}>
              {parseInt(progressValue)}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
