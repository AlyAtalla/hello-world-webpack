import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  randomGreeting: '',
  status: 'idle',
  error: null
};

// Async thunk
export const fetchRandomGreeting = createAsyncThunk(
  'greeting/fetchRandomGreeting',
  async (_, { rejectWithValue }) => {
    try {
      // Replace with your async request
      const response = await fetch('https://api.example.com/greeting');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.greeting;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

// Slice
const greetingSlice = createSlice({
  name: 'greeting',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomGreeting.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRandomGreeting.fulfilled, (state, { payload }) => {
        state.status = 'idle';
        state.randomGreeting = payload;
      })
      .addCase(fetchRandomGreeting.rejected, (state, { payload }) => {
        state.status = 'idle';
        state.error = payload;
      });
  }
});

export default greetingSlice.reducer;
