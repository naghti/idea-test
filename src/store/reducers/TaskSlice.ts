import { TaskI } from "@/types/task";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface taskState {
  tasks: TaskI[],
}

const initialState: taskState = {
  tasks: [],
}

export const taskSLice = createSlice({
  name: "taskSLice",
  initialState,
  reducers: {
    editTask: (state, action: PayloadAction<TaskI>) => {
      for (let i = 0; i < state.tasks.length; i++) {
        const task = state.tasks[i]
        if (task.id == action.payload.id) {
          state.tasks[i] = action.payload
          break
        }
      }
    },

    deleteTask: (state, action: PayloadAction<number>) => {
      state.tasks = state.tasks.filter(task => task.id != action.payload)
    },
    deleteAllDone: (state) => {
      state.tasks = state.tasks.filter(task => task.type != "done")
    },

    addTask: (state, action: PayloadAction<TaskI>) => {
      state.tasks.push(action.payload)
    },

    setTasks: (state, action: PayloadAction<TaskI[]>) => {
      state.tasks = action.payload
    },
  }
})

export default taskSLice.reducer