import React, { useEffect, useState } from 'react';

import MobileNavbar from './Components/MobileNavbar';
import Navbar from './Components/Navbar';
import Hero from './Pages/Hero';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

//Function to get screen width for displaying correct navbar
function getCurrentDimensions() {
  return window.innerWidth;
}

function App() {

  const [screenSize, setScreenSize] = useState(getCurrentDimensions());

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimensions());
    }
    window.addEventListener('resize', updateDimension);

    return(() => {
      window.removeEventListener('resize', updateDimension);
    })
   
  }, [screenSize])

  return (
    <div className="App">
      {screenSize < 720 ? <MobileNavbar /> : <Navbar />}
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
