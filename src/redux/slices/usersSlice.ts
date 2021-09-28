import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import usersApi from '../../services/usersApi';

interface User {
  id: string;
  name: string;
  phone: string;
}
export interface usersState {
  users: User[];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
}

const initialState: usersState = {
  users: [],
  loading: 'idle',
};

// First, create the thunk
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await usersApi();
  const trans = response.data.map((e: any) => {
    return {
      id: e.id,
      name: e.name,
      phone: e.phone,
    };
  });
  console.log('🚀 ~ trans', trans);
  return trans;
});

export const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    usersLoading(state) {
      if (state.loading === 'idle') {
        state.loading = 'pending';
      }
    },
    usersReceived(state, action: PayloadAction<User[]>) {
      if (state.loading === 'pending') {
        state.loading = 'idle';
        state.users = action.payload;
      }
    },
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      // Add user to the state array
      state.users = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { usersLoading, usersReceived } = usersSlice.actions;

export default usersSlice.reducer;
