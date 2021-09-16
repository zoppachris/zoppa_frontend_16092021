import { Route, Redirect, HashRouter } from "react-router-dom";
import React, { useState } from "react";
import Login from "./pages/Login";
import DataUser from "./pages/DataUser/DataUser";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import CreateUser from "./pages/DataUser/CreateUser";
import DetailUser from "./pages/DataUser/DetailUser";
import EditUser from "./pages/DataUser/EditUser";

function Routes() {
  const [isLogin, setIsLogin] = useState(false);
  const [userId, setUserId] = useState(
    sessionStorage.getItem("userId") ? sessionStorage.getItem("userId") : null
  );
  function PrivateRoute({ ...props }) {
    if (
      isLogin &&
      sessionStorage.getItem("userName") &&
      sessionStorage.getItem("userId")
    )
      return <Route {...props} exact />;
    else sessionStorage.clear();
    return <Redirect to="/" />;
  }
  const login = (userId) => {
    setIsLogin(true);
    setUserId(userId);
    // console.log("loginRoute userId : ", userId);
  };
  const logout = () => {
    setIsLogin(false);
  };
  return (
    <HashRouter>
      <React.Fragment>
        {isLogin ? (
          <Header
            userName={sessionStorage.getItem("userName")}
            logout={logout}
          />
        ) : null}
        <Route
          exact
          path="/"
          render={(props) => (
            <Login
              name="Login"
              //   userId={userId}
              login={(userIdData) => login(userIdData)}
              {...props}
            />
          )}
        />
        <PrivateRoute
          path="/dashboard"
          render={(props) => (
            <Dashboard name="Dashboard" userId={userId} {...props} />
          )}
        />
        <PrivateRoute
          path="/data-user"
          render={(props) => (
            <DataUser name="Data User" userId={userId} {...props} />
          )}
        />
        <PrivateRoute
          path="/data-user/create"
          render={(props) => (
            <CreateUser name="Create User" userId={userId} {...props} />
          )}
        />
        <PrivateRoute
          path="/data-user/detail/:id"
          render={(props) => (
            <DetailUser name="Detail User" userId={userId} {...props} />
          )}
        />
        <PrivateRoute
          path="/data-user/edit/:id"
          render={(props) => (
            <EditUser name="Edit User" userId={userId} {...props} />
          )}
        />
      </React.Fragment>
    </HashRouter>
  );
}

export default Routes;
