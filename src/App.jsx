import { useState, useEffect } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import {LoadingScreen} from "./components/sections/LoadingScreen";
import {Navbar} from "./components/Navbar";
import { MobileMenu } from "./components/Mobilemenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import {Projects} from "./components/sections/Projects";
import { MeteorEffect} from "./components/meteorEffect";
import {Contact} from "./components/sections/Contact";
import {ChatbotWidget} from "./components/ChatbotWidget";
import "./index.css"
function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      
    {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100":"opacity-0"}bg-black text-gray-100`}
      >
      
     <Navbar menuOpen={menuOpen} setMenuOpen= {setMenuOpen}/>
     <MobileMenu menuOpen={menuOpen} setMenuOpen= {setMenuOpen}/>
       <MeteorEffect/>  
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <ChatbotWidget/>
      </div>
      
    </>
  );
}

export default App; 