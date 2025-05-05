import axios from 'axios';

const API_URL = 'https://ifocus.onrender.com/api/categories';

interface Category {
  id?: number;
  name: string;
  icon: string;
  description: string;
}

// Obtener todas las categorías
export const getCategories = async (): Promise<Category[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error al obtener categorías:', error);
    throw error;
  }
};

// Crear una nueva categoría
export const createCategory = async (categoryData: Category): Promise<Category> => {
  try {
    const response = await axios.post(API_URL, categoryData);
    return response.data;
  } catch (error) {
    console.error('Error al crear categoría:', error);
    throw error;
  }
};

// Actualizar una categoría existente
export const updateCategory = async (id: number, categoryData: Partial<Category>): Promise<Category> => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, categoryData);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar categoría:', error);
    throw error;
  }
};

// Eliminar una categoría
export const deleteCategory = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error al eliminar categoría:', error);
    throw error;
  }
};