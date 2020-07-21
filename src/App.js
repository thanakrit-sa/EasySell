import React from 'react';
import './App.css';
import RouteAuth from './route_auth'
import RouteDash from './route_dashboard'
import Error from './error'
import { Switch, Route, Redirect } from 'react-router-dom'
import Warehouse from './warehouse/warehouse'
import Routes from './routes'

function App() {
  return (
    <Switch>
      <Redirect from="/" exact={true} to="/login" />
      <Route path="/login" component={RouteAuth} />
      <Route path="/register" component={RouteAuth} />
      <Route path="/forget" component={RouteAuth} />
      <Route path="/dashboard" component={RouteDash} />
      <Route path="/warehouse" component={RouteDash} />
      <Route path="/addwarehouse" component={RouteDash} />
      <Route path="/stock" component={RouteDash} />
      <Route path="/addStock" component={RouteDash} />
      <Route path="/facebookPage" component={RouteDash} />
      <Route path="/facebookDashboard" component={RouteDash} />
      <Route path="/facebookChatbot" component={RouteDash} />
      <Route path="/facebookComment" component={RouteDash} />
      <Route path="/orderList" component={RouteDash} />
      <Route path="/package" component={RouteDash} />
      <Route component={Error} />
    </Switch>
  );
}

export default App;
