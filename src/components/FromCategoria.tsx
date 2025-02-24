import React, { useState, useEffect } from 'react';
import { createCategoria, updateCategoria, getCategoria } from '../services/categoriaService';
import type { Categoria } from '../models/Categoria';

interface FormCategoriaProps {
  categoriaId?: number; // Opcional, para edição
  onSuccess: () => void; // Callback após sucesso
}

function FormCategoria({ categoriaId, onSuccess }: FormCategoriaProps) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');

  // Define um valor padrão para categoriaId
  const id = categoriaId ?? 0; // Usa 0 se categoriaId for undefined

  useEffect(() => {
    if (id !== 0) { // Verifica se id não é o valor padrão
      // Carrega os dados da categoria para edição
      async function loadCategoria() {
        try {
          const categoria = await getCategoria(id); // Agora id é garantidamente um número
          setNome(categoria.nome);
          setDescricao(categoria.descricao);
        } catch (error) {
          console.error('Erro ao carregar categoria:', error);
        }
      }
      loadCategoria();
    }
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (id !== 0) { // Verifica se id não é o valor padrão
        // Atualiza a categoria existente
        await updateCategoria(id, { nome, descricao });
        alert('Categoria atualizada com sucesso!');
      } else {
        // Cria uma nova categoria
        await createCategoria({ nome, descricao });
        alert('Categoria criada com sucesso!');
      }
      onSuccess(); // Executa o callback de sucesso
    } catch (error) {
      console.error('Erro ao salvar categoria:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id !== 0 ? 'Editar Categoria' : 'Adicionar Categoria'}</h2>
      <div>
        <label>Nome:</label>
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
      </div>
      <div>
        <label>Descrição:</label>
        <input type="text" value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
      </div>
      <button type="submit">{id !== 0 ? 'Atualizar' : 'Criar'}</button>
    </form>
  );
}

export default FormCategoria;