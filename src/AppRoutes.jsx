import React from "react";
import { Route, Routes } from "react-router-dom";
import approutes from "./config/routes";

const AppRoutes = () => {
  return (
    <Routes>
      {approutes.map((routes, index) => (
        <Route key={index} path={routes.path} Component={routes.Component} />
      ))}
    </Routes>
  );
};

export default AppRoutes;
