import React from "react";
import book from "./Book";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  // "bookId":
  // "bookName":
  // "author":
  // "image":
  // "review":
  // "totalPages":
  // "rating":
  // "category":
  // "tags":
  // "publisher":
  // "yearOfPublishing":
  const { image, bookName, author, tags, category, bookId } = book;

  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-xl p-6 ">
        <figure className="bg-blue-200 py-8 rounded-2xl">
          <img src={image} className="h-[166px]" alt="bookName" />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-4">
            {tags.map((tag, index) => (
              <button
                key={index}
                className="btn btn-xs bg-green-200 text-green-500"
              >
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By:{author}</p>
          <div className="border-t-2 border-dashed"></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
