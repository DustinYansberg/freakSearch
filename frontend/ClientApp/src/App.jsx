import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import Search from "./components/Search/Search.jsx";
import Hosts from "./components/Hosts/Hosts.jsx";
import HostPage from "./components/Hosts/HostPage.jsx";
import Guests from "./components/Guests/Guests.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import GuestPage from "./components/Guests/GuestPage.jsx";
import "./App.css";

function App() {
  //todo look into router

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/search" />} />
        <Route path="/search" element={<Search />} />
        <Route path="/hosts" element={<Hosts />} />
        <Route path="/hosts/:id" element={<HostPage />} />
        <Route path="/guests" element={<Guests />} />
        <Route path="/guests/:id" element={<GuestPage />} />
      </Routes>
    </div>
  );
}

export { App };