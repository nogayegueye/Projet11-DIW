import React from "react";
import Navbar from "../components/nav.js";
import Footer from "../components/footer.js";
import MainPageUser from "../main/mainPageUser.js";
import "../App.css";

function page_user() {
  const isLoggedIn = true;

  return (
    <div>
      <div>
        <Navbar isLoggedIn={isLoggedIn} />
      </div>
      <MainPageUser />
      <Footer />
    </div>
  );
}

export default page_user;
