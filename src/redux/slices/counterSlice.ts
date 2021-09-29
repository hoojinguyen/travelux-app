import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CounterState {
  value: number;
  status: boolean;
}

const initialState: CounterState = {
  value: 0,
  status: false,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    incrementSaga: state => {
      state.status = true;
    },
    incrementSagaSuccess: state => {
      state.value += 5;
      state.status = false;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  incrementSaga,
  incrementSagaSuccess,
} = counterSlice.actions;

export default counterSlice.reducer;
