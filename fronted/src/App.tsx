import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nuoc-hoa-nam' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App