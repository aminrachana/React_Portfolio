import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Projects from './components/Projects'
import Education from './components/Education'
import Experience from './components/Experience'
import Certificates from './components/Certificates'
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {

  return (
    <>
        <Navbar />
        <main>  
          <Banner />
              <About />
              <div class="container">
              <Projects />
              <Education />
              {/* <Experience /> */}
              <Certificates />
              <Contact />
            </div>
        </main>
        <Footer />
    </>
  )
}

export default App
