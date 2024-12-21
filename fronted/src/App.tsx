import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nuoc-hoa-nam' element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App