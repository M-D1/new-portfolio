import { useState } from 'react'

import './index.css'
import NavBar from './components/NavBar'
import Hero from './components/HeroSection'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'

function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
      <div className='container mx-auto'>

        <NavBar />
        <Hero />
        <Projects />
        <About />
        <Skills />
      </div>
    </>
  )
}

export default App
