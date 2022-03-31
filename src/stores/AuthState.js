import { createSlice } from '@reduxjs/toolkit'

const AuthState = createSlice({
  name: "website",
  initialState: {
    user: localStorage.getItem("auth") ?? false,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = false;
      localStorage.removeItem("auth");
    },
  },
});
export const {login, logout} = AuthState.actions


export default AuthState.reducer
