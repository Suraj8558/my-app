import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: number;
  name: string;
}

interface UserState {
  entities : User[];
  loading: 'idle'| 'pending' | 'succeeded' | 'failed';
  error : {} | null;   
}

const initialState : UserState =  {
  entities : [],
  loading: 'idle',
  error : null
}


export const fetchUserById = createAsyncThunk('users/fetchUserByID', async (id: number) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await response.json();
  return data;
})


export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => { 
    builder
      // When the async thunk is pending
      .addCase(fetchUserById.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      // When the async thunk resolves successfully
      .addCase(fetchUserById.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = 'succeeded';
        state.entities.push(action.payload);
      })
      // When the async thunk fails
      .addCase(fetchUserById.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.payload || 'Something went wrong';
      });
  }
    
}) 

export default usersSlice.reducer;