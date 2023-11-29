import { useState } from 'react'
import './App.css'
import Productos from './componentes/Productos'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import DetalleProducto from './componentes/DetalleProducto'
import Logo from './componentes/Logo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Logo />
    <Routes>
      
    <Route>
      <Route path="/" element={<Productos />} />
      <Route path="/productos/:id" element={<DetalleProducto />} />
      

    </Route>

    </Routes>
    
    
    </BrowserRouter>
    
      
    
  )
}

export default App
