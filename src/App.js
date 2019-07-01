import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import LandingPage from './components/landingPage/landingPage';
import Dashboard from './components/dashboard/dashboard';


function App() {
    return (
        <Router>
            <div id='root'>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
            </div>
        </Router>
    )
}

// todo: move to router config file
function RouteWithSubRoutes(route) {
    return (
      <Route
            exact path={route.path}
            render={props => (
                // pass the sub-routes down to keep nesting
                <route.component {...props} routes={route.routes} />
            )}
      />
    );
  }

  const routes = [
    {
        path: "/",
        component: LandingPage
    },
    {
        path: '/dashboard',
        component: Dashboard
    }
    // {
    //   path: "/tacos",
    //   component: Tacos,
    //   routes: [
    //     {
    //       path: "/tacos/bus",
    //       component: Bus
    //     },
    //     {
    //       path: "/tacos/cart",
    //       component: Cart
    //     }
    //   ]
    // }
  ];

export default App;
