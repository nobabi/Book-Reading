import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import React from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadList } from "../../utilites/utilits";
import { useEffect, useState } from "react";
import Book from "../Book/Book";
const ListsBook = () => {
  const [readList, setReadList] = useState([]);
  const allBooks = useLoaderData();

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedReadListInt = storedReadList.map((id) => parseInt(id));
    console.log(storedReadList, allBooks, storedReadListInt);
    const readBookList = allBooks.filter((book) =>
      storedReadListInt.includes(book.bookId)
    );
    setReadList(readBookList);
  }, []);
  return (
    <div>
      <h3>Book List</h3>
      <Tabs>
        <TabList>
          <Tab>Read List</Tab>
          <Tab>Wish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl">Book I Read:{readList.length}</h2>
          {readList.map((book) => (
            <Book key={book.bookId} book={book}></Book>
          ))}
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl">My wish list</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListsBook;
