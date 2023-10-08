import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slices/bookReducer";

const store = configureStore({
  reducer: {
    books: bookReducer,
    // user: userReducer,
  },
});

export default store;
