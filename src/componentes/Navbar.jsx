import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to={"/"}className="nav-link active" aria-current="page">Todos</Link >
        </li>
        <li className="nav-item">
          <Link to={"/categoria/hamburguesas"} className="nav-link" href="#">Hamburguesas</Link >
        </li>
        <li className="nav-item">
          <Link to={"/categoria/papasfritas"} className="nav-link" href="#">Papas fritas</Link >
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar