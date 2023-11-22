import React from "react";
import "./navbar.css";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div>
        <h1 className="nombrePagina"> Gamer's Haven Hub</h1>
      </div>
        <div className="categorias">
          <ul>
          <li>
            <a href=""></a> Consolas
          </li>
          <li>
            <a href=""></a> Videojuegos
          </li>
          <li>
            <a href=""></a> Accesorios
          </li>
          <li>
              <CartWidget />
          </li>
        </ul>
        </div>
        
    </nav>
  );
};

export default NavBar;
