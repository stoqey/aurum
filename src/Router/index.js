import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../Components/Home/';
import PageNotFound from '../Components/PageNotFound/';

const routes = [
  {
    path: '/*',
    component: PageNotFound
  }
];

class Routing extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          {
            routes.map((route) => (
              <Route key={route.path} path={route.path} component={route.component} />
            ))
          }
        </Switch>
      </Router>
    );
  }
}

export default Routing;