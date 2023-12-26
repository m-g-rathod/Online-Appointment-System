import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import Slot from "./pages/Slot";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar/> 
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/appoint" element={<Appointment/>} />
          <Route path="/doctor/:id" element={<Slot/>} />
        </Routes>    
        <Footer/>
      </Router>
    </>
  );
}

export default App;
