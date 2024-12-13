import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  username: '',
  gender: null,
  age: 1,
};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setGender: (state, action) => {
      state.gender = action.payload;
    },
    setAge: (state, action) => {
      state.age = action.payload;
    },
    resetUserData: state => {
      state.username = '';
      state.gender = null;
      state.age = 1;
    },
  },
});

export const {setUsername, setGender, setAge, resetUserData} =
  UserSlice.actions;

export default UserSlice.reducer;
