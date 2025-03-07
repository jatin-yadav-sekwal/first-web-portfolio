import { useEffect, useState } from 'react';
import Loadingscreen from './components/Loadingscreen.jsx';
import './index.css';
import Navbar from './components/Navbar.jsx';
import MobileMenu from './components/MobileMenu.jsx';
import Home from './components/sections/Home.jsx';
import {About} from './components/sections/About.jsx';


function App() {
  let [isLoaded,setisLoaded]= useState(false);
  let [menuOpen,setmenuOpen]=useState(false);


  return (
    <>
      {!isLoaded && <Loadingscreen onComplete={()=>setisLoaded(true)}/>}
      <div className={`min-h-screen transition-opacity duration-700 ease-in-out ${isLoaded?"opacity-100":"opacity-0"} bg-black text-gray-100 `} >
        <Navbar menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
        <MobileMenu menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
        <Home />
        <About></About>
      </div>
    </>
  )
}

export default App
