import navigationSlice from "./navigation/navigationSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    navigation: navigationSlice.reducer,
  },
});

export default store;
