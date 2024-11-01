import React from "react";
import { useState, useEffect } from "react";
import books from "/public/booksData.json";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("./booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <h2 className="text-4xl font-bold text-center"> Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <Book book={book} key={book.bookId}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
/*
1. sate data to store book why we use state we do not know how much data will be load less or increase for this reason we use state
2.useffect  why use for this reason data will take from outside for this application can be take any side effect for this reason we use useffect
3. fetch to load data
4. set the data to the bookstate
*/
