import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Header from './Header'
import Navigation from './Navigation'
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Navigation />
      </BrowserRouter>
    </div>
  )
}

export default App
