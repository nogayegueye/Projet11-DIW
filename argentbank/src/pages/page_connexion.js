import React from "react";
import Navbar from "../components/nav.js";
import Footer from "../components/footer.js";
import MainPageConnect from "../main/mainPageConnect.js";
import "../App.css";


function Connexion() {
  const isLoggedIn = false;

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} />
      <MainPageConnect />
      <Footer />
    </div>
  );
}

export default Connexion;
