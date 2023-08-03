import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  specializations: []
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    // replaceUserData(state, action) {
    //   state.userData = action.payload;
    // },
    // replaceToken(state, action) {
    //   state.token = action.payload;
    // }
    replaceSpecializations(state, action) {
      state.specializations = action.payload;
    }
  }
});

export default authSlice.reducer;
export const authAction = authSlice.actions;
