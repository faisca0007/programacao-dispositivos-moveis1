// b) Importa createContext e useState do React
import { createContext, useState } from 'react';

// c) Importa o TaskService
import * as TaskService from "../services/TaskService";

// d) Cria o contexto
export const TaskContext = createContext();

// e) Cria o Provider
export const TaskProvider = ({ children }) => {
  // f) Estado para armazenar as tarefas
  const [tasks, setTasks] = useState([]);

  // g) Função assíncrona para buscar tarefas
  const getTasks = async () => {
    try {
      const response = await TaskService.getTasks();
      setTasks(response);
    } catch (error) {
      throw new Error("Erro ao buscar tarefas:", error);
    }
  };

  // i) Função para adicionar tarefa
  const addTask = async (newTask) => {
    try {
      const response = await TaskService.addTask(newTask);
      setTasks([...tasks, response]);
    } catch (error) {
      throw new Error("Erro ao adicionar tarefa:", error);
    }
  };

  // k) Função para atualizar tarefa
  const updateTask = async (updatedTask) => {
    try {
      await TaskService.updateTask(updatedTask.id, updatedTask);
      setTasks(
        tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
      );
    } catch (error) {
      throw new Error("Erro ao atualizar tarefa:", error);
    }
  };

  // m) Função para deletar tarefa
  const deleteTask = async (taskId) => {
    try {
      await TaskService.deleteTask(taskId);
      setTasks(tasks.filter((task) => task.id !== taskId));
    } catch (error) {
      throw new Error("Erro ao excluir tarefa:", error);
    }
  };

  // o) Retorna o Provider com o value contendo tudo que será compartilhado
  return (
    <TaskContext.Provider 
      value={{ tasks, getTasks, addTask, updateTask, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};

// p) Exporta o Context e o Provider (já feito nas declarações acima)