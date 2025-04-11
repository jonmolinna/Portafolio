import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Project from "../pages/Project";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/projects",
        Component: Project,
      },
    ],
  },
]);
