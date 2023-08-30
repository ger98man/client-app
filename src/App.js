import React from "react";
import { AuthProvider } from "react-auth-kit";
import AppRouter from "./components/app-router/AppRouter";

const App = () => (
  <AuthProvider
    authType={"cookie"}
    authName={"_auth"}
    cookieDomain={window.location.hostname}
    cookieSecure={false}
  >
    <AppRouter />
  </AuthProvider>
);

export default App;
