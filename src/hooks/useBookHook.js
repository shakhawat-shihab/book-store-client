import { useState } from "react";

const useBookHook = () => {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState({});
  const [isLoadingBook, setIsLoadingBook] = useState(false);

  //   useEffect(() => {
  //     fetch(`http://localhost:8000/books/all`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setProducts(data?.data?.products);
  //       });
  //   }, []);

  const getAllBooks = () => {
    setIsLoadingBook(true);
    fetch(`http://localhost:8000/books/all`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBooks(data?.data?.books);
        setIsLoadingBook(false);
        // if (data?.success) {
        //   alert(data?.message);
        // } else {
        //   alert(data?.message);
        // }
      })
      .finally(() => {
        setIsLoadingBook(false);
      });
  };

  const getSmartPhone = () => {
    setIsLoadingBook(true);
    fetch(`http://localhost:8000/books/all?search=phone`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setPhone(data?.data?.products);
        setIsLoadingBook(false);
        // if (data?.success) {
        //   alert(data?.message);
        // } else {
        //   alert(data?.message);
        // }
      })
      .finally(() => {
        setIsLoadingBook(false);
      });
  };

  const getProductById = (id) => {
    setIsLoadingBook(true);
    // console.log("begin");
    fetch(`http://localhost:8000/books/find-by-id/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log("shihab");
        setIsLoadingBook(false);
        if (data?.success == false) {
          alert(data?.message);
        }
        if (data?.data) setBook(data?.data);
        else setBook({});
      })
      .finally(() => {
        setIsLoadingBook(false);
      });
    // console.log("end");
  };

  const deleteProduct = (id) => {
    setIsLoadingBook(true);
    fetch(`http://localhost:8000/books/delete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoadingBook(false);
        if (data?.success) {
          alert(data?.message);
        } else {
          alert(data?.message);
        }
      })
      .finally(() => {
        setIsLoadingBook(false);
      });
  };

  const insertProduct = (book) => {
    setIsLoadingBook(true);
    fetch(`http://localhost:8000/books/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoadingBook(false);
        if (data?.success) {
          alert(data?.message);
        } else {
          alert(data?.message);
        }
      })
      .finally(() => {
        setIsLoadingBook(false);
      });
  };

  const updateProduct = (book) => {
    setIsLoadingBook(true);
    const { id, ...other } = book;
    fetch(`http://localhost:8000/books/update/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(other),
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoadingBook(false);
        if (data?.success) {
          alert(data?.message);
        } else {
          alert(data?.message);
        }
      })
      .finally(() => {
        setIsLoadingBook(false);
      });
  };

  return {
    books,
    book,
    setBook,
    isLoadingBook,
    getAllBooks,
    // getSmartPhone,
    // insertProduct,
    // deleteProduct,
    // getProductById,
    // updateProduct,
  };
};

export default useBookHook;
