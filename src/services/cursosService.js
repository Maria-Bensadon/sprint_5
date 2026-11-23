
import api from '../api/axiosInstance'; 


export const getCursos = async () => {
  const { data } = await api.get('/cursos');
  return data;
};

export const getCursoById = async (id) => {
  const { data } = await api.get(`/cursos/${id}`);
  return data;
};

export const createCurso = async (curso) => {
  const { data } = await api.post('/cursos', curso);
  return data;
};

export const updateCurso = async (id, curso) => {
  const { data } = await api.put(`/cursos/${id}`, curso);
  return data;
};

export const deleteCurso = async (id) => {
  const { data } = await api.delete(`/cursos/${id}`);
  return data;
};