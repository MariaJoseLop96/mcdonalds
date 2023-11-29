import React from 'react'
import productosArray from "../assets/productos.json"
import { useParams } from 'react-router-dom'

const DetalleProducto = () => {
  const {id}=useParams()
  let producto= productosArray.find( item => item.id == id)

  return (
    <div className='container'>
      <h1>Productos</h1>
      <div className="row">
        <div className="col-md-6">
        <img src={producto.img} alt="" />
        </div>
        <div className="col-md-6">
          <h1>{producto.nombre}</h1>
          <h3>{producto.categoria}</h3>
          <h3>{producto.precio}</h3>
        </div>
      </div>

  
    </div>
  )
}

export default DetalleProducto