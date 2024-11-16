import { createSlice, configureStore } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: "",
    isLoggedIN: false
  },
  reducers: {
    // Define your reducers here if needed
    login(state, action) {
      state.user = action.payload;
      state.isLoggedIN = true;
    },
    logout(state) {
      state.user = "";
      state.isLoggedIN = false;
    }
  }
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;

export const store = configureStore({
  reducer: {
    auth: authReducer
  }
});
