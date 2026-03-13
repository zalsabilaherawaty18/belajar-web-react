import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./belajar-react/pages/Home";
import Catatan from "./belajar-react/pages/Catatan";
import Motion from "./belajar-react/pages/Motion";
import UseState from "./belajar-react/pages/UseState";
import DataUser from "./belajar-react/pages/dataUser";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Catatan" element={<Catatan />} />
      <Route path="/Motion" element={<Motion />} />
      <Route path="/UseState" element={<UseState />} />
      <Route path="/dataUser" element={<DataUser />} />
    </Routes>
  );
}
