import React, { useEffect, useState } from 'react';
import { getCategorias } from '../services/categoriaService'; // Use getCategorias, não getCategoria
import type { Categoria } from '../models/Categoria';
import CardCategoria from './CardCategoria';

function ListarCategorias() {
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCategorias(); // Chama getCategorias, que não requer parâmetros
        setCategorias(data);
      } catch (error) {
        console.error('Erro ao buscar categorias:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Lista de Categorias</h1>
      {categorias.map((categoria) => (
        <CardCategoria key={categoria.id} categoria={categoria} />
      ))}
    </div>
  );
}

export default ListarCategorias;