// d) Importa o axios
import axios from 'axios';

// e) Define a URL da API a partir das variáveis de ambiente
const API_URL = process.env.EXPO_PUBLIC_API_URL;

// f) Declara função para buscar tarefas
export const getTasks = () => {
  return axios
    .get(`${API_URL}/`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

// h) Declara função para adicionar tarefa
export const addTask = (task) => {
  return axios
    .post(`${API_URL}/`, task)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

// j) Declara função para atualizar tarefa
export const updateTask = (taskId, task) => {
  return axios
    .put(`${API_URL}/${taskId}`, task)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

// l) Declara função para deletar tarefa
export const deleteTask = (taskId) => {
  return axios
    .delete(`${API_URL}/${taskId}`)
    .then((response) => response.data)
    .catch((error) => {
      throw error;
    });
};

// n) Exporta todas as funções (já estamos exportando individualmente acima)
// Alternativamente, poderia ser:
// export { getTasks, addTask, updateTask, deleteTask };