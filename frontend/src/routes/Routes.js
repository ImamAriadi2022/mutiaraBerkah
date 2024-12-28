import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Guest/Home';
import Search from '../pages/Guest/Search';
import Register from '../pages/Guest/Register';
import AdminDashboard from '../pages/Admin/Dashboard';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/register" component={Register} />
      <Route path="/admin" component={AdminDashboard} />
    </Switch>
  );
}

export default Routes;
