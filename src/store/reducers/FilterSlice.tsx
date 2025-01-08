import { TaskI } from "@/types/task";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface filterState {
  filter: string
}

const initialState: filterState = {
  filter: ""
}

export const filterSLice = createSlice({
  name: "filterSLice",
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload
    },
  }
})

export default filterSLice.reducer