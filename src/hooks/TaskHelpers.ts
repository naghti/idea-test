import { taskSLice } from "@/store/reducers/TaskSlice";
import { useAppDispatch, useAppSelector } from "./redux";
import { tasksTemplate } from "@/consts/tasks";
import { TaskI } from "@/types/task";
import { useCallback } from "react";
import { BoardTypes } from "@/types/board";

const setStorage = (data: TaskI[]) => localStorage.setItem("taskList", JSON.stringify(data))
const getStorage = (): TaskI[] => JSON.parse(localStorage.getItem("taskList")) || [];

const useSetTasks = () => {
  const dispatch = useAppDispatch()
  const {setTasks} = taskSLice.actions
  const taskList = getStorage();

  if (!taskList.length) {
    setStorage(tasksTemplate)
    dispatch(setTasks(tasksTemplate))
  }
  else {
    dispatch(setTasks(getStorage()))
  }
}

const useAddTask = () => {
  const dispatch = useAppDispatch()
  const {addTask} = taskSLice.actions

  const addTaskF = (data: TaskI) => {
    const existingTasks = getStorage()
    const updatedTasks = [...existingTasks, data];
    
    setStorage(updatedTasks)
    dispatch(addTask(data))
  }
  
  return addTaskF;
}

const useEditTask = () => {
  const dispatch = useAppDispatch()
  const {editTask} = taskSLice.actions

  const editTaskF = (data: TaskI) => {
    let existingTasks = getStorage()
    existingTasks = existingTasks.filter((task: TaskI) => task.id != data.id)
    const updatedTasks = [...existingTasks, data];
    
    setStorage(updatedTasks)
    dispatch(editTask(data))
  }
  
  return editTaskF;
}

const useDeleteTask = () => {
  const dispatch = useAppDispatch()
  const {deleteTask} = taskSLice.actions

  const deleteF = (id: number) => {
    let existingTasks = getStorage()
    const updatedTasks = existingTasks.filter((task: TaskI) => task.id != id)

    setStorage(updatedTasks)
    dispatch(deleteTask(id))
  }

  return deleteF
}

const useSetTypeTask = () => {
  const dispatch = useAppDispatch()
  const {editTask} = taskSLice.actions

  const setTypeF = (data: TaskI, type: BoardTypes) => {
    const newData = {...data, type}
    let existingTasks = getStorage()
    existingTasks = existingTasks.filter((task: TaskI) => task.id != data.id)
    const updatedTasks = [...existingTasks, newData];

    setStorage(updatedTasks)
    dispatch(editTask(newData))
  }

  return setTypeF
}

const useDeleteAllDone = () => {
  const dispatch = useAppDispatch()
  const {deleteAllDone} = taskSLice.actions

  const deleteAllDoneF = () => {
    let newData = getStorage()
    newData = newData.filter(task => task.type != "done")

    setStorage(newData)
    dispatch(deleteAllDone())
  }

  return deleteAllDoneF
}

export {
  useSetTasks,
  useAddTask,
  useEditTask,
  useDeleteTask,
  useSetTypeTask,
  useDeleteAllDone
}