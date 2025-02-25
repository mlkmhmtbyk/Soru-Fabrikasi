import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  login as appwriteLogin,
  logout as appwriteLogout,
} from "@/lib/appwrite";

interface AuthState {
  isLoggedIn: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoggedIn = action.payload ?? false;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.isLoggedIn = action.payload ?? false;
    });
  },
});

export default authSlice.reducer;

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const isLoggedIn = await appwriteLogin(email, password);
      return isLoggedIn;
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
