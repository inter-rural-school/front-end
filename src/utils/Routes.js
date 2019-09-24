import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Login from '../Components/Login';
import Register from '../Components/Register/Register';
import SchoolStaffRegister from '../Components/Register/SchoolStaffRegister';
import BoardMemberRegister from '../Components/Register/BoardMemberRegister';
// import SchoolStaffPage from "../components/SchoolStaff/SchoolStaffPage";
// import SSIssueView from "../components/SchoolStaff/SSIssueView";
// import BoardMemberPage from '../components/BoardMember/BoardMemberPage';
// import BMIssueView from '../components/BoardMember/BMIssueView'
import Dashboard from '../Components/dashboard/dashboard.component';

const Routes = () => {
  return (
    <div>
      <Route exact path="/home" render={() => <Redirect to="/" />} />
      <Route exact path="/" render={() => <Redirect to="/login" />} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/new_user" component={Register} />
      <Route exact path="/dashboard" component={Dashboard} />
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

      {/* <PrivateRoute exact path="/schoolstaffpage" component={SchoolStaffPage} />
      <PrivateRoute
        exact
        path="/schoolstaffpage/issue-view/:id"
        component={SSIssueView}
      />
      <PrivateRoute exact path="/boardmemberpage" component={BoardMemberPage} />
      <PrivateRoute
        exact
        path="/boardmemberpage/issue-view/:id"
        component={BMIssueView} 
      />*/}
    </div>
  );
};

export default Routes;
