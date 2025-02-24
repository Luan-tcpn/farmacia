import axios from 'axios';
import type { Categoria } from '../models/Categoria';

const API_URL = 'https://farmacia-jjxo.onrender.com/categorias';

export const getCategoria = async (id: number): Promise<Categoria> => {
  const response = await axios.get<Categoria>(`${API_URL}/${id}`);
  return response.data;
};

export const createCategoria = async (categoria: Omit<Categoria, 'id'>): Promise<Categoria> => {
  const response = await axios.post<Categoria>(API_URL, categoria);
  return response.data;
};

export const updateCategoria = async (id: number, categoria: Partial<Categoria>): Promise<Categoria> => {
  const response = await axios.put<Categoria>(`${API_URL}/${id}`, categoria);
  return response.data;
};

export const deleteCategoria = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};

export const getCategorias = async (): Promise<Categoria[]> => {
    const response = await axios.get<Categoria[]>(API_URL);
    return response.data;
  };
  