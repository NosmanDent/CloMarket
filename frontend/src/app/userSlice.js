import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from "../supabaseClient";

export const getUserDetail = createAsyncThunk(
  "user/getUserDetail",
  async () => {
    try {
      const response = await supabase.auth.getUser();
      return response;
    } catch (error) {
      return { error }; // Return the error in the payload
    }
  }
);

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserDetail.fulfilled, (state, action) => {
      if (action.payload?.error) {
        state.user = null;
        console.log("Error:", action.payload.error);
      } else {
        state.user = action.payload?.data?.user;
      }
    });
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
