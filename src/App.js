import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Events from "./pages/Events";
import Staff from "./pages/Staff";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Layout from './components/Layout';
function App() {
  return (
    <Layout>
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    </Layout>
  );
}

export default App;
