import React from 'react';
import "../App.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='footer'>
      <h5>
        <a href="" onClick={scrollToTop} className="back-to-top">
          <strong>Back to Top</strong>
        </a>
      </h5>
      <h6>&copy; 2024 SCP Foundation. All rights reserved.</h6>
    </div>
  );
}

export default Footer;