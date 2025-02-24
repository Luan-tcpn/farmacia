import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Farmácia</Link>
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
          <li><Link to="/categorias" className="hover:text-blue-200">Categorias</Link></li>
          <li><Link to="/categorias/nova" className="hover:text-blue-200">Nova Categoria</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;