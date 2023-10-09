import { useDispatch } from "react-redux";
import axiosInstance from "../utils/axiosCreate";
import {
  loadAllBookReducer,
  loadBookByRatingDescReducer,
  loadBooksByPriceAscReducer,
  loadBooksByViewDescReducer,
  lodingFinishedReducer,
} from "../store/slices/bookReducer";

const bookAPI = () => {
  const dispatch = useDispatch();

  const getAllBooks = () => {
    axiosInstance
      .get(`/books/all`)
      .then((res) => res.data)
      .then((data) => {
        // console.log(data?.data?.books);
        dispatch(loadAllBookReducer(data?.data?.books));
      })
      .catch((e) => {
        console.log(e);
        console.log("Error: ", e?.response?.statusText);
      })
      .finally(() => {
        dispatch(lodingFinishedReducer("isLoadingAllBook"));
      });
  };

  const getBooksByRatingDesc = () => {
    axiosInstance
      .get(`/books/all?sortOrder=desc&sortParam=rating`)
      .then((res) => res.data)
      .then((data) => {
        // console.log(data?.data?.books);
        dispatch(loadBookByRatingDescReducer(data?.data?.books));
      })
      .catch((e) => {
        console.log(e);
        console.log("Error: ", e?.response?.statusText);
      })
      .finally(() => {
        dispatch(lodingFinishedReducer("isLoadingBooksByRating"));
      });
  };

  const getBooksByPriceAsc = () => {
    axiosInstance
      .get(`/books/all?sortOrder=asc&sortParam=price`)
      .then((res) => res.data)
      .then((data) => {
        // console.log(data?.data?.books);
        dispatch(loadBooksByPriceAscReducer(data?.data?.books));
      })
      .catch((e) => {
        console.log("Error: ", e?.response?.statusText);
      })
      .finally(() => {
        dispatch(lodingFinishedReducer("isLoadingBooksByPrice"));
      });
  };
  const getBooksByViewDesc = () => {
    axiosInstance
      .get(`/books/all?sortOrder=asc&sortParam=views`)
      .then((res) => res.data)
      .then((data) => {
        // console.log(data?.data?.books);
        dispatch(loadBooksByViewDescReducer(data?.data?.books));
      })
      .catch((e) => {
        console.log("Error: ", e?.response?.statusText);
      })
      .finally(() => {
        dispatch(lodingFinishedReducer("isLoadingBooksByView"));
      });
  };

  return {
    getAllBooks,
    getBooksByRatingDesc,
    getBooksByPriceAsc,
    getBooksByViewDesc,
  };
};

export default bookAPI;
