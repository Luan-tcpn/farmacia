import React from 'react';
import { deleteCategoria } from '../services/categoriaService';

interface DeletarCategoriaProps {
  categoriaId: number;
  onSuccess: () => void; // Callback após sucesso
}

function DeletarCategoria({ categoriaId, onSuccess }: DeletarCategoriaProps) {
  const handleDelete = async () => {
    try {
      await deleteCategoria(categoriaId);
      alert('Categoria excluída com sucesso!');
      onSuccess(); // Executa o callback de sucesso
    } catch (error) {
      console.error('Erro ao excluir categoria:', error);
    }
  };

  return (
    <button onClick={handleDelete} className="bg-red-500 text-white p-2">
      Excluir
    </button>
  );
}

export default DeletarCategoria;