import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { RequireAuth } from "react-auth-kit";
import {
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  USER_INFO_ROUTE,
  USER_LIST_ROUTE,
} from "../../utils/constants";
import UserInfo from "../user-info/UserInfo";
import UserList from "../user-list/UserList";
import Login from "../login/Login";
import Registration from "../registration/Registration";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Login />} />
        <Route path={LOGIN_ROUTE} element={<Login />} />
        <Route path={REGISTRATION_ROUTE} element={<Registration />} />
        <Route
          path={USER_INFO_ROUTE}
          element={
            <RequireAuth loginPath={LOGIN_ROUTE}>
              <UserInfo />
            </RequireAuth>
          }
        />
        <Route
          path={USER_LIST_ROUTE}
          element={
            <RequireAuth loginPath={LOGIN_ROUTE}>
              <UserList />
            </RequireAuth>
          }
        />
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
