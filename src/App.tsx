// import { useState } from 'react'

import './App.css'
import { NavigationBar } from './components/NavigationBar.tsx'
import { HeroBanner } from './components/HeroBanner.tsx'
function App() {
  
  return (
    <>
      <div className = "h-full w-full  bg-background flex flex-col items-center">
        <NavigationBar/>
        <HeroBanner/>
      </div>
    </> 
  )
}

export default App
