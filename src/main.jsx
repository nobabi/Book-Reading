import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Root from "./components/Root/Root";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./components/Home/Home";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Dashboard from "./components/Dashboard/Dashboard";
import BookDetail from "./components/BookDetails/BookDetail";
import books from "/public/booksData.json";
import ListsBook from "./components/ListsBook/ListsBook";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "books/:bookId",
        element: <BookDetail></BookDetail>,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "ListsBook",
        element: <ListsBook></ListsBook>,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "Dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>
);
