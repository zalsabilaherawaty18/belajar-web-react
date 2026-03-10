import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './belajar-react/pages/Home'
import Product from './belajar-react/pages/Prodoct'
import Biodata from './belajar-react/pages/Biodata'
import Data from './belajar-react/pages/Data'

export default function App() {
  return (


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/Biodata" element={<Biodata />} />
        <Route path="/Data" element={<Data />} />
      </Routes>
  );
}

