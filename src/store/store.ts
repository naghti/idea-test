import { combineReducers, configureStore } from "@reduxjs/toolkit";
import taskReducer from "./reducers/TaskSlice";
import fitlerReducer from "./reducers/FilterSlice";

const rootReducer = combineReducers({
  taskReducer,
  fitlerReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']