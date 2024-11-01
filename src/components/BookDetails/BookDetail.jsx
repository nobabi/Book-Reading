import React from "react";
import { useParams, useLoaderData } from "react-router-dom";
import { addToStoredReadList } from "../../utilites/utilits";

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();

  const book = data.find((book) => book.bookId === id);
  const { bookId: currentBookId, image } = book;
  const handelMarkAsRead = (id) => {
    addToStoredReadList(id);
  };

  return (
    <div className="my-12">
      <h2>Book details</h2>
      <img className="w-36" src={image} alt="" />
      <br />
      <button
        onClick={() => handelMarkAsRead(bookId)}
        className="btn btn-outline mr-4 btn-accent"
      >
        Mark as Read
      </button>
      <button className="btn btn-accent">Add to Wish List</button>
    </div>
  );
};

export default BookDetail;
