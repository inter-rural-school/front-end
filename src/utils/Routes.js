import React from "react";
import { Route, Redirect } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import Login from "../Components/Login";
import Header from "../Components/Header";
import Register from "../Components/Register/Register";
import SchoolStaffRegister from "../Components/Register/SchoolStaffRegister";
import BoardMemberRegister from "../Components/Register/BoardMemberRegister";

import Dashboard from "../Components/dashboard/dashboard.component";

import newIssueForm from "../Components/single-issue/NewIssueForm";

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
     
      <PrivateRoute exact path="/dashboard/issue_form" component={newIssueForm} />
      

    </div>
  );
};

export default Routes;
