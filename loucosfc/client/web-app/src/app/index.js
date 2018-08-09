import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { LoginRoute, SignupRoute, } from './routes';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <Switch>
            <Route exact path="/" component={LoginRoute} />
            <Route path="/signup" component={SignupRoute} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
