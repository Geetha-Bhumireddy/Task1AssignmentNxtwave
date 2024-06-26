import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import DesktopSeventyThree from "pages/DesktopSeventyThree";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <DesktopSeventyThree /> },
    { path: "*", element: <NotFound /> },
    {
      path: "desktopseventythree",
      element: <DesktopSeventyThree />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
