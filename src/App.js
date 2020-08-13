import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  // Redirect,
  Switch
} from "react-router-dom";

import HomePage from './components/HomePage/HomePage';
import Login from './components/HomePage/Login';


const LoginLayout = ({ children, ...rest }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

const GameLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <LoginLayout>
          <Component {...matchProps} />
        </LoginLayout>
      )}
    />
  );
};

const HomeLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <LoginLayout>
          {/* <Header /> */}
          <Component {...matchProps} />
          {/* <Footer /> */}
        </LoginLayout>
      )}
    />
  );
};



export class App extends Component {
  render() {

    return (
      <Router>
      <Switch>
        {/* <HomeLayoutRoute path="/login" component={Login} /> */}
        {/* <HomeLayoutRoute path="/table" component={PokerModifiedTwo} /> */}
        <HomeLayoutRoute path="/home" component={Login} />
        <HomeLayoutRoute exact path="/" component={HomePage} />
        {/* /* <HomeLayoutRoute path="/schedule" component={Schedule} /> */}
        {/* <Route path="/register"><Registration /></Route> */}
      </Switch>
    </Router>
  
    )
  }
}

export default App;
