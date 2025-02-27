import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  login as appwriteLogin,
  logout as appwriteLogout,
} from "@/lib/appwrite";
import User from "@/models/User";

interface AuthState {
  currentUser: User | null;
}

const initialState: AuthState = {
  currentUser: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      console.log("Redux login.fullfilled action:", action.payload);
      if (action.payload !== undefined) {
        state.currentUser = action.payload;
      } else {
        state.currentUser = null;
      }
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.currentUser = null;
    });
  },
});

export default authSlice.reducer;

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const user = await appwriteLogin(email, password);
      console.log("Login API Response", user);
      return user;
    } catch (error) {
      throw error;
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
  try {
    const isLoggedOut = await appwriteLogout();
    console.log("isLoggedOut", isLoggedOut);
    return !isLoggedOut;
  } catch (error) {
    throw error;
  }
});
