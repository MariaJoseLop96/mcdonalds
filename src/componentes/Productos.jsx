import React from 'react'
import productosArray from "../assets/productos.json"
import { Link } from 'react-router-dom'

const Productos = () => {
    
  return (
    <div>
       <h1>Productos</h1>
       {productosArray.map(producto => (<div className="card"  key={producto.id}>
            <img src={producto.img} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{producto.nombre}</h5>
              <p className="card-text">{producto.precio}</p>
              <Link to={"/productos/"+producto.id} className="btn btn-primary">Ver mas</Link>
            </div>
          </div>))}
    </div>
  )
}

export default Productos
