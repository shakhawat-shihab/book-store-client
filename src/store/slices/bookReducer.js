import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allBooks: [],
  isLoadingAllBook: false,
  booksByRatingDesc: [],
  isLoadingBooksByRating: false,
  booksByPriceAsc: [],
  isLoadingBooksByPrice: false,
  booksByViewsDesc: [],
  isLoadingBooksByView: false,
  message: "",
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    loadAllBookReducer: (state, action) => {
      state.isLoadingAllBook = true;
      state.allBooks = action.payload;
    },
    loadBookByRatingDescReducer: (state, action) => {
      state.isLoadingBooksByRating = true;
      state.booksByRatingDesc = action.payload;
    },

    loadBooksByPriceAscReducer: (state, action) => {
      state.isLoadingBooksByPrice = true;
      state.booksByPriceAsc = action.payload;
    },

    loadBooksByViewDescReducer: (state, action) => {
      state.isLoadingBooksByView = true;
      state.booksByViewsDesc = action.payload;
    },
    lodingFinishedReducer: (state, action) => {
      state[`${action.payload}`] = false;
    },

    // addProductReducer: (state, action) => {
    //   console.log(state);
    //   let products = state.productList;
    //   products.push(action?.payload);
    //   state.productList = products;
    // },
    // deleteProductReducer: (state, action) => {
    //   let products = state.productList.filter((x) => x?._id !== action.payload);
    //   state.productList = products;
    // },
    // updateProductReducer: (state, action) => {
    //   let products = state.productList.map((x) => {
    //     if (x?._id == action.payload.id) {
    //       return action.payload;
    //     }
    //     return x;
    //   });
    //   state.productList = products;
    // },
  },
});

export const {
  loadAllBookReducer,
  lodingFinishedReducer,
  loadBookByRatingDescReducer,
  loadBooksByPriceAscReducer,
  loadBooksByViewDescReducer,
} = bookSlice.actions;

export default bookSlice.reducer;
