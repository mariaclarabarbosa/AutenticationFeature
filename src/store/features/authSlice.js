import {createSlice} from '@reduxjs/toolkit';

//Gera criadores de actions e tipos de actions que correspondem aos reducers e estado
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
  },
  //O Redux Toolkit permite criar lógicas "mutáveis", mas internamente realiza o updade imutável por meio do immer library
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: state => {
      state.user = null;
    },
  },
});

export const {login, logout} = authSlice.actions;

export const selectAuth = state => state.auth.user;

export default authSlice.reducer;
