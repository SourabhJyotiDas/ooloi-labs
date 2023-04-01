import './App.css';
import React from 'react';
import Home from "./components/Home.js"
import Navbar from "./components/Navbar.js";
import AllEvents from "./components/AllEvents.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import EventCard from './components/EventCard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
      <Router>
        <Navbar />
      <ToastContainer />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/allnotes' element={<AllEvents />} />
          <Route exact path='/update/:id' element={<EventCard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
