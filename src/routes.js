import Login from "./components/login/Login";
import Registration from "./components/registration/Registration";
import UserInfo from "./components/user-info/UserInfo";
import UserList from "./components/user-list/UserList";
import {
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  USER_INFO_ROUTE,
  USER_LIST_ROUTE,
} from "./utils/constants";

export const authRoutes = [
  { path: USER_LIST_ROUTE, Component: UserList },
  { path: USER_INFO_ROUTE + "/:id", Component: UserInfo },
];

export const publicRoutes = [
  { path: LOGIN_ROUTE, Component: Login },
  { path: REGISTRATION_ROUTE, Component: Registration },
];
