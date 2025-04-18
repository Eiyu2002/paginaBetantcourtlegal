import React from "react";

import Hero from "../components/Hero";
import ServicePage from "./ServicePage";
import SuccesCasesPage from "./SuccesCasesPage";
import AboutPage from "./AboutPage";

function HomePage() {
  return (
    <>
      <Hero></Hero>
      <AboutPage></AboutPage>

      <SuccesCasesPage></SuccesCasesPage>
      <ServicePage></ServicePage>
    </>
  );
}

export default HomePage;
