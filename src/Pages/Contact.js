import React from "react";
import Header from "../Components/Download/Header";
import Footer from "../Components/Home/Footer";
import MainContact from "./../Components/Contact/MainContact";

export default function Contact() {
  document.title = "CutCode - Contact";
  return (
    <div>
      <Header />
      <MainContact />
      <Footer />
    </div>
  );
}
