import { useRef } from "react";
import "../assets/styleServicePage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { Pagination, Navigation, Autoplay } from "swiper/modules";
function ServicePage() {
  const elementService1 = useRef(null);
  const elementService2 = useRef(null);
  const elementService3 = useRef(null);
  const elementService4 = useRef(null);
  const elementService5 = useRef(null);



  const handleMouseEnter1 = () => {
    gsap.to(elementService1.current, {
      height: "100%",
      duration: 0.5,
    });
  };

  const handleMouseLeave1 = () => {
    gsap.to(elementService1.current, {
      height: "0%",
      duration: 0.5,
    });
  };
  const handleMouseEnter2 = () => {
    gsap.to(elementService2.current, {
      height: "100%",
      duration: 0.5,
    });
  };

  const handleMouseLeave2 = () => {
    gsap.to(elementService2.current, {
      height: "0%",
      duration: 0.5,
    });
  };

  const handleMouseEnter3 = () => {
    gsap.to(elementService3.current, {
      height: "100%",
      duration: 0.5,
    });
  };

  const handleMouseLeave3 = () => {
    gsap.to(elementService3.current, {
      height: "0%",
      duration: 0.5,
    });
  };
  const handleMouseEnter4 = () => {
    gsap.to(elementService4.current, {
      height: "100%",
      duration: 0.5,
    });
  };

  const handleMouseLeave4 = () => {
    gsap.to(elementService4.current, {
      height: "0%",
      duration: 0.5,
    });
  };
  const handleMouseEnter5 = () => {
    gsap.to(elementService5.current, {
      height: "100%",
      duration: 0.5,
    });
  };

  const handleMouseLeave5 = () => {
    gsap.to(elementService5.current, {
      height: "0%",
      duration: 0.5,
    });
  };
  return (
    <div id="cases" className="containerServicePage">
      <div className="backgrounServicePage">
        <h1 className="textServicePage1">CASOS DE EXITO</h1>
      </div>
      <div className="containerSwiperServicePage">
        <Swiper
          className="swiperService"
          slidesPerView={3}
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
          <SwiperSlide className="slideServices" >
            <div
              className="cardService"
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
            >
              <div className="imgService1"></div>
              <div className="containerTextService">
                <div className="elementService" ref={elementService2}></div>
                <h1 className="textServicePage2">SOLVED CASE</h1>
                <p className="textServicePage3">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <p className="textServicePage4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quam incidunt. Velit labore placeat vel! Hic omnis necessitatibus rerum nemo?</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slideServices">
            <div
              className="cardService"
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
            >
              <div className="imgService0"></div>
              <div className="containerTextService">
                <div className="elementService" ref={elementService1}></div>
                <h1 className="textServicePage2">SOLVED CASE</h1>
                <p className="textServicePage3">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <p className="textServicePage4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quam incidunt. Velit labore placeat vel! Hic omnis necessitatibus rerum nemo?</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slideServices">
          <div
              className="cardService"
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3}
            >
              <div className="imgService2"></div>
              <div className="containerTextService">
                <div className="elementService" ref={elementService3}></div>
                <h1 className="textServicePage2">SOLVED CASE</h1>
                <p className="textServicePage3">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <p className="textServicePage4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quam incidunt. Velit labore placeat vel! Hic omnis necessitatibus rerum nemo?</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slideServices">
          <div
              className="cardService"
              onMouseEnter={handleMouseEnter4}
              onMouseLeave={handleMouseLeave4}
            >
              <div className="imgService3"></div>
              <div className="containerTextService">
                <div className="elementService" ref={elementService4}></div>
                <h1 className="textServicePage2">SOLVED CASE</h1>
                <p className="textServicePage3">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <p className="textServicePage4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quam incidunt. Velit labore placeat vel! Hic omnis necessitatibus rerum nemo?</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slideServices">
          <div
              className="cardService"
              onMouseEnter={handleMouseEnter5}
              onMouseLeave={handleMouseLeave5}
            >
              <div className="imgService4"></div>
              <div className="containerTextService">
                <div className="elementService" ref={elementService5}></div>
                <h1 className="textServicePage2">SOLVED CASE</h1>
                <p className="textServicePage3">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <p className="textServicePage4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, quam incidunt. Velit labore placeat vel! Hic omnis necessitatibus rerum nemo?</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default ServicePage;
