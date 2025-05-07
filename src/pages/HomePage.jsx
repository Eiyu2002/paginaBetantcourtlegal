import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "../components/Hero";
import ServicePage from "./ServicePage";
import SuccesCasesPage from "./SuccesCasesPage";
import AboutPage from "./AboutPage";
import TestimonialPage from "./TestimonialsPage";
import BlogsPage from "./BlogsPage";

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const scrollTo = location.state?.scrollTo;
    if (scrollTo) {
      const section = document.getElementById(scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100); // le das tiempo al DOM para que se renderice
      }
    }
  }, [location]);
  return (
    <>
      <Hero></Hero>
      <AboutPage></AboutPage>

      <SuccesCasesPage></SuccesCasesPage>
      <ServicePage></ServicePage>
      <TestimonialPage></TestimonialPage>
      <BlogsPage></BlogsPage>
    </>
  );
}

export default HomePage;
