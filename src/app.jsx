import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ListarCategorias from './components/ListarCategorias';
import FormCategoria from './components/FormCategoria';
import DeletarCategoria from './components/DeletarCategoria';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Rota para a página inicial */}
        <Route path="/" element={<Home />} />

        {/* Rotas para categorias */}
        <Route path="/categorias" element={<ListarCategorias />} />
        <Route path="/categorias/nova" element={<FormCategoria />} />
        <Route path="/categorias/editar/:id" element={<FormCategoria />} />
        <Route path="/categorias/deletar/:id" element={<DeletarCategoria />} />

        {/* Rota para páginas não encontradas (opcional) */}
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </Router>
  );
}

export default App;