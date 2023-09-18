import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home";
import BoardPage from "../pages/Board";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/board", element: <BoardPage /> },
]);

export default router;
