import { BrowserRouter,Routes,Route, Navigate } from "react-router-dom";

import Proyects from "./pages/proyects/Proyects";
import Navbar from "./components/Navbar";
import Reader from "./pages/reader/Reader";
import { useEffect, useState } from "react";
import './App.css'
import logo from './images/logo T.png'


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 2000)
  },[])

  return (
<>
    {
      loading?
     <div className="fondo">
      <div className="logo-load">
        <img src={logo} alt="log"/>
      </div>
        <div className="spinner">
          
        </div>
      </div> 
    
      :

   
      <BrowserRouter>

        <Navbar/>
      <Routes>
        <Route  exact path="/" element={<Reader/>}/>
          <Route exact path="proyectos" element={<Proyects/>}></Route>
          <Route  exact path="*" element={<Navigate replace to='/' />}/>
        
      </Routes> 
      </BrowserRouter>
}

</>
  );
}

export default App;
