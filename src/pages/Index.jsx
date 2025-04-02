import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Index() {
  return (
    <div className="index">
      <img src="images/LOGO-SCP2.png" alt="SCP Logo" className="logo" />
      <div className="casefile">CASE FILE NO:</div>
      <div className="casefileno">30049314</div>
      <div className="declassified"></div> {/* Declassified Stamp */}
      {/* Open link, navigating to the home page */}
      <Link to="/home" className="folder-link"><strong>OPEN</strong></Link>
      <div className="footer-index">
        <h6>&copy; 2024 SCP Foundation. All rights reserved.</h6>
      </div>
    </div>
  );
}

export default Index;
