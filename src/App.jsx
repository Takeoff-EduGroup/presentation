import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TakeoffPortfolio from './components/LandingPage'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<TakeoffPortfolio/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App