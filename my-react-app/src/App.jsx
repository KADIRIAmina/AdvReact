import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Vans from "../pages/Vans"
import VanDetail from "../pages/VanDetails"
import Dashboard from "../pages/Dashboard"
import Income from "../pages/Income"
import Reviews from "../pages/Reviews"
import Layout from "../pages/Layout"
import HostVans from "../pages/HostVans"
import HostVanDetail from "../pages/HostVanDetail"
import HostVanInfo from "../pages/HostVanInfo"
import HostVanPricing from "../pages/HostVanPricing"
import HostVanPhotos from "../pages/HostVanPhotos"
import HostLayout from "../pages/HostLayout"



import "./server"

function App() {
 
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);