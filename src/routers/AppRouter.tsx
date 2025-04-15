import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Project from "../pages/Project";
import App from "../App";
import Skill from "../pages/Skill";

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
      {
        path: "/skill",
        Component: Skill,
      },
    ],
  },
]);
