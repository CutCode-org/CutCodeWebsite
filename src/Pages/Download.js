import React from "react";
import Header from "./../Components/Download/Header";
import Main from "./../Components/Download/Main";
import Footer from "./../Components/Home/Footer";
import DownloadMain from "./../Components/Download/DownloadMain";

export default function Download() {
  document.title = "CutCode - Download";
  return (
    <div>
      <Header />
      <Main />
      <DownloadMain />
      <Footer />
    </div>
  );
}
