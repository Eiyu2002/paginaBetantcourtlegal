import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const animateSlide = () => {
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
};
