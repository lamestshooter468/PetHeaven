import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import PetGallery from "./pages/PetGallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Mission from "./pages/Mission";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdoptForm from "./pages/AdoptForm";
import ReleaseForm from "./pages/ReleaseForm";
import Reviews from "./pages/Reviews";
import PetCare from "./pages/PetCare";
import dogs from "./data/dogs";
import cats from "./data/cats";

function App() {
  return (
    <Router basename="/PetHeaven">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogs" element={<PetGallery title="Available Dogs" petData={dogs} />} />
        <Route path="/cats" element={<PetGallery title="Available Cats" petData={cats} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/adopt" element={<AdoptForm />} />
        <Route path="/release" element={<ReleaseForm />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/petcare" element={<PetCare />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;