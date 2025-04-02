import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavMenu from "../components/NavMenu.jsx";
import Footer from "../components/Footer.jsx";
import "../App.css";
import scpData from "../data/scpdata.json"; // Load SCP data

function Home() {
  const [scps, setScps] = useState([]);

  useEffect(() => {
    setScps(scpData); // Load SCP data into state
  }, []);

  return (
    <div className="content">
      <NavMenu />
      <div className="page">
        <h1>Welcome to the SCP Foundation</h1>
        <p>
          Explore the mysterious and classified SCPs documented by the Foundation.<br />
          Click on an SCP below to learn more about its unique characteristics.
        </p>
        <h2>Featured SCPs</h2>
        <div className="scp-list">
        {scps.map((scp) => (
          <article className="scp-item" key={scp.item}>
            <Link to={`/${scp.item}`}>
              <h3>{scp.item}: {scp.name}</h3>
              <p>{scp.subtitle}</p>
            </Link>
          </article>
          ))}
        <Footer />
        </div>
      </div>
      <Link to="/" className="folder-link"><strong>CLOSE</strong></Link>
    </div >
  );
}

export default Home;
