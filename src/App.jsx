import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import { connect } from 'react-redux';

import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage';
import AppBar from './components/AppBar/AppBar';

class App extends Component {
  state = {};

  render() {
    return (
      <div>
        <AppBar />

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/contacts" component={ContactsPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
