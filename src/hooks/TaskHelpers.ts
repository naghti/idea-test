import { taskSLice } from "@/store/reducers/TaskSlice";
import { useAppDispatch, useAppSelector } from "./redux";
import { tasksTemplate } from "@/consts/tasks";
import { TaskI } from "@/types/task";
import { useCallback } from "react";

const useSetTasks = () => {
  const dispatch = useAppDispatch()
  const {setTasks} = taskSLice.actions
  const taskList = localStorage.getItem("taskList");


  if (!taskList) {
    localStorage.setItem("taskList", JSON.stringify(tasksTemplate))
    dispatch(setTasks(tasksTemplate))
  }
  else {
    dispatch(setTasks(JSON.parse(taskList)))
  }
}

const useAddTask = () => {
  const dispatch = useAppDispatch()
  const {addTask} = taskSLice.actions

  const addTaskF = useCallback((data: TaskI) => {
    const existingTasks = JSON.parse(localStorage.getItem("taskList")) || [];
    const updatedTasks = [...existingTasks, data];
    
    localStorage.setItem('taskList', JSON.stringify(updatedTasks));
    dispatch(addTask(data))
  }, [dispatch]);
  
  return addTaskF;
}

const useEditTask = () => {
  const dispatch = useAppDispatch()
  const {editTask} = taskSLice.actions

  const editTaskF = useCallback((data: TaskI) => {
    let existingTasks = JSON.parse(localStorage.getItem("taskList")) || [];
    existingTasks.filter((task: TaskI) => task.id != data.id)
    const updatedTasks = [...existingTasks, data];
    
    localStorage.setItem('taskList', JSON.stringify(updatedTasks));
    dispatch(editTask(data))
  }, [dispatch]);
  
  return editTaskF;
}

export {
  useSetTasks,
  useAddTask,
  useEditTask
}