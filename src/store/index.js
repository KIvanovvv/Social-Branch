import { configureStore, createSlice } from "@reduxjs/toolkit";

const userInitialState = {
  userData: {
    accessToken: "",
    description: "",
    displayImage: "",
    email: "",
    imageUrl: "",
    messages: [],
    moods: {},
    username: "",
    _id: "",
  },
  userPostsUpdated: false,
};
const userSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    setUserData(state, action) {
      state.userData = action.payload;
    },
    setImageNeutral(state, action) {
      state.userData.displayImage = action.payload;
    },
    setImageHappy(state, action) {
      state.userData.displayImage = action.payload;
    },
    setImageSad(state, action) {
      state.userData.displayImage = action.payload;
    },
    setImageAngry(state, action) {
      state.userData.displayImage = action.payload;
    },
    updateUserPosts(state) {
      state.userPostsUpdated = !state.userPostsUpdated;
    },
  },
});

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
export const userActions = userSlice.actions;
export default store;
