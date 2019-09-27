import React from "react";
import { Route, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import Login from "../Components/Login";
import Header from "../Components/Header";
import Register from "../Components/Register/Register";
import SchoolStaffRegister from "../Components/Register/SchoolStaffRegister";
import BoardMemberRegister from "../Components/Register/BoardMemberRegister";

import Dashboard from "../Components/dashboard/dashboard.component";


const Routes = () => {
  return (
    <div>
      <Route exact path="/home" render={() => <Redirect to="/" />} />
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route exact path="/login" component={Login} />
      <Route path="/" component={Header} />
      <Route exact path="/new_user" component={Register} />
      <Route
        exact
        path="/new_user/school_staff"
        component={SchoolStaffRegister}
      />
      <Route
        exact
        path="/new_user/board_member"
        component={BoardMemberRegister}
      />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
     
      

    </div>
  );
};

export default Routes;
