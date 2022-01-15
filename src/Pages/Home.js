import React from "react";
import Features from "../Components/Home/Features";
import MainHome from "../Components/Home/MainHome";
import Testimonials from "../Components/Home/Testimonials";
import Footer from "./../Components/Home/Footer";

export default function Home() {
  document.title = "CutCode - Home";
  return (
    <div>
      <MainHome />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}
