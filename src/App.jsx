import { useState } from 'react'
import React from 'react'
import './App.css'
import Home from './pages/Home'
import MouseTracker from './components/MouseTracker/MouseTracker'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MouseTracker />
      <Home />
    </>
  )
}

export default App
