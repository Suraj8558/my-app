import { createEntityAdapter, createSlice, PayloadAction } from "@reduxjs/toolkit";


interface Exercise {
  id: string;
  title: string;
  completed: boolean;
}

const workoutAdapter = createEntityAdapter<Exercise>()
export const workoutSlice = createSlice({
  name: 'workout',
  initialState: workoutAdapter.getInitialState(),
  reducers:{
    addExercise:  workoutAdapter.addOne,
    setExercises: workoutAdapter.setAll,
    updateExercise: workoutAdapter.updateOne,
    
    
  }
})

export const { 
  addExercise, 
  setExercises, 
  updateExercise,   
} = workoutSlice.actions;

export default workoutSlice.reducer;