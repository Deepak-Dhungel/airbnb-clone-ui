import React from "react";
import Header from "../components/header/Header";
import MobileHeader from "../components/header/MobileHeader";
import MobileNavBar from "../components/header/MobileNavBar";
import Categories from "../components/header/Categories";
import PropertySection from "../components/Properties/PropertySection";

const Home = () => {
  return (
    <>
      <MobileHeader />

      <MobileNavBar />

      <Categories />

      <PropertySection />
    </>
  );
};

export default Home;
