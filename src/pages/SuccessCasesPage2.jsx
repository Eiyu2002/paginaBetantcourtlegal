import { useRef } from "react";
import "../assets/styleSuccesCasesPage.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function SuccessCasesPage() {
  const elementSuccesCases1 = useRef(null);
  const elementSuccesCases2 = useRef(null);

  const elementSuccesCases3 = useRef(null);
  const elementSuccesCases4 = useRef(null);

  const elementSuccesCases5 = useRef(null);

  const elementSuccesCases6 = useRef(null);
  const elementSuccesCases7 = useRef(null);

  const handleMouseEnter1 = () => {
    gsap.to(elementSuccesCases1.current, {
      width: "100%",
      duration: 0.3,
    });
  };

  const handleMouseLeave1 = () => {
    gsap.to(elementSuccesCases1.current, {
      width: "0%",
      duration: 0.3,
    });
  };

  const handleMouseEnter2 = () => {
    gsap.to(elementSuccesCases2.current, {
      width: "100%",
      duration: 0.3,
    });
  };

  const handleMouseLeave2 = () => {
    gsap.to(elementSuccesCases2.current, {
      width: "0%",
      duration: 0.3,
    });
  };

  const handleMouseEnter3 = () => {
    gsap.to(elementSuccesCases3.current, {
      width: "100%",
      duration: 0.3,
    });
  };

  const handleMouseLeave3 = () => {
    gsap.to(elementSuccesCases3.current, {
      width: "0%",
      duration: 0.3,
    });
  };

  const handleMouseEnter4 = () => {
    gsap.to(elementSuccesCases4.current, {
      width: "100%",
      duration: 0.3,
    });
  };

  const handleMouseLeave4 = () => {
    gsap.to(elementSuccesCases4.current, {
      width: "0%",
      duration: 0.3,
    });
  };

  const handleMouseEnter5 = () => {
    gsap.to(elementSuccesCases5.current, {
      width: "100%",
      duration: 0.3,
    });
  };

  const handleMouseLeave5 = () => {
    gsap.to(elementSuccesCases5.current, {
      width: "0%",
      duration: 0.3,
    });
  };

  const handleMouseEnter6 = () => {
    gsap.to(elementSuccesCases6.current, {
      width: "100%",
      duration: 0.3,
    });
  };

  const handleMouseLeave6 = () => {
    gsap.to(elementSuccesCases6.current, {
      width: "0%",
      duration: 0.3,
    });
  };

  const handleMouseEnter7 = () => {
    gsap.to(elementSuccesCases7.current, {
      width: "100%",
      duration: 0.3,
    });
  };

  const handleMouseLeave7 = () => {
    gsap.to(elementSuccesCases7.current, {
      width: "0%",
      duration: 0.3,
    });
  };
  return (
    <div className="containerSuccesCasesPage">
      <div style={{ height: "12vh" }}></div>
      <div className="containerTextSuccesCases1">
        <h1 className="textSuccesCases1">NUESTROS CASOS</h1>
        <h1 className="textSuccesCases2">Casos de Exito</h1>
      </div>

      <div className="containerImgCases">
        <div
          className="imgCases1 "
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
        ></div>
        <div
          className="imgCases2 "
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        ></div>
        <div
          className="imgCases3 "
          onMouseEnter={handleMouseEnter3}
          onMouseLeave={handleMouseLeave3}
        ></div>
        <div
          className="imgCases4 "
          onMouseEnter={handleMouseEnter4}
          onMouseLeave={handleMouseLeave4}
        ></div>
        <div
          className="imgCases5 "
          onMouseEnter={handleMouseEnter5}
          onMouseLeave={handleMouseLeave5}
        ></div>
        <div
          className="imgCases6 "
          onMouseEnter={handleMouseEnter6}
          onMouseLeave={handleMouseLeave6}
        ></div>
        <div
          className="imgCases7 "
          onMouseEnter={handleMouseEnter7}
          onMouseLeave={handleMouseLeave7}
        ></div>
        <div
          className="elementSuccesCases1 elementSuccesCases"
          ref={elementSuccesCases1}
        >
          <h1 className="textSuccesCasses3">Lorem ipsum</h1>
          <div className="textSuccesCases4">
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
        <div
          className="elementSuccesCases2 elementSuccesCases"
          ref={elementSuccesCases2}
        >
          <h1 className="textSuccesCasses3">Lorem ipsum</h1>
          <div className="textSuccesCases4">
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
        <div
          className="elementSuccesCases3 elementSuccesCases"
          ref={elementSuccesCases3}
        >
          {" "}
          <h1 className="textSuccesCasses3">Lorem ipsum</h1>
          <div style={{ height: "10%"}} className="textSuccesCases4">
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
        <div
          className="elementSuccesCases4 elementSuccesCases"
          ref={elementSuccesCases4}
        >
          {" "}
          <h1 className="textSuccesCasses3">Lorem ipsum</h1>
          <div className="textSuccesCases4">
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
        <div
          className="elementSuccesCases5 elementSuccesCases"
          ref={elementSuccesCases5}
        >
          {" "}
          <h1 className="textSuccesCasses3">Lorem ipsum</h1>
          <div className="textSuccesCases4">
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
        <div
          className="elementSuccesCases6 elementSuccesCases "
          ref={elementSuccesCases6}
        >
          {" "}
          <h1 className="textSuccesCasses3">Lorem ipsum</h1>
          <div className="textSuccesCases4">
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
        <div
          className="elementSuccesCases7 elementSuccesCases"
          ref={elementSuccesCases7}
        >
          {" "}
          <h1 className="textSuccesCasses3">Lorem ipsum</h1>
          <div className="textSuccesCases4">
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuccessCasesPage;
