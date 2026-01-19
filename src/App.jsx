import React from 'react'
import './App.css'
import Home from './pages/Home'
import MouseTracker from './components/MouseTracker/MouseTracker'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <MouseTracker />
      <Home />
    </ThemeProvider>
  )
}

export default App
