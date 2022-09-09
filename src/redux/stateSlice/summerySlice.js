import { createSlice } from "@reduxjs/toolkit";

export const summerySlice = createSlice({
  name: "summery",
  initialState: {
     value:[]
  },
  reducers: {
    setSummery:(state,action)=>{
        state.value=action.payload;
    }
  },
});

export const {  setSummery } = summerySlice.actions;
export default summerySlice.reducer;
