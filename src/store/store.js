import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./slices/bookReducer";
import userReducer from "./slices/userReducer";

const store = configureStore({
  reducer: {
    books: bookReducer,
    user: userReducer,
  },
});

export default store;
