import User from "@/models/user";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { logout, login as appwriteLogin, getCurrentUser } from "@/lib/appwrite";

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.user = null;
    });
  },
});

export const login = createAsyncThunk(
  "user/login",
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const userId = await appwriteLogin(email, password);
      if (userId) {
        const user = await getCurrentUser();
        console.log("user in Slice", user);
        return user;
      }
    } catch (error) {
      throw error;
    }
  }
);

export default userSlice.reducer;
