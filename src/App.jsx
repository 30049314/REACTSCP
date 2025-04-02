import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Folder from "./components/Folder";
import SCPContent from "./pages/SCPContent"; // Generic SCP Component
import Home from "./pages/Home";
import Index from "./pages/Index";

function App() {
  const { pathname } = useLocation(); // Track route changes

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on every route change
  }, [pathname]);

  return (
    <Folder className="folder">
      <Routes>
        <Route path="/" element={<Index />} /> {/* Landing Page */}
        <Route path="/home" element={<Home />} /> {/* SCP List Page */}
        <Route path="/:scpId" element={<SCPContent />} /> {/* SCP Content Page */}
      </Routes>
    </Folder>
  );
}

export default App;
