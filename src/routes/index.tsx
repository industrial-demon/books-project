import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootPage } from "../pages/root";
import { lazy } from "react";

const BookPage = lazy(() =>
  import("../pages/book").then((module) => ({
    default: module.BookPage,
  }))
);

const BookListPage = lazy(() =>
  import("../pages/book-list").then((module) => ({
    default: module.BookListPage,
  }))
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,

    children: [
      { index: true, element: <BookListPage /> },
      { path: ":bookId", element: <BookPage /> },
    ],
  },
]);

export const Routing = () => {
  return <RouterProvider router={router} />;
};
