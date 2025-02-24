import React from 'react';
import type { Categoria } from '../models/Categoria';

interface CardCategoriaProps {
  categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
  return (
    <div className="border p-4 mb-4">
      <h3 className="text-xl font-bold">{categoria.nome}</h3>
      <p>{categoria.descricao}</p>
    </div>
  );
}

export default CardCategoria;