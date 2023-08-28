import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { authRoutes, publicRoutes } from "../../routes";

export default function AppRouter() {
  const isAuthenticated = false;
  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated &&
          authRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} Component={Component} exact></Route>
          ))}
        {publicRoutes.map(({ path, Component }) => (
          <Route key={path} path={path} Component={Component} exact></Route>
        ))}
        <Route
          path="*"
          element={
            <div>
              <h2>404 Page not found</h2>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
