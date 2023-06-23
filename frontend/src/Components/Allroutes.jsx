import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'

export default function Allroutes() {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}

    </Routes>
  )
}
