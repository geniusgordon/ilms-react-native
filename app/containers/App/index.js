import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from '../Home';
import Login from '../Auth';

const App = () => (
  <Router>
    <Scene key="root">
      <Scene key="home" component={Home} title="Home" hideNavBar initial />
      <Scene key="login" component={Login} title="Login" hideNavBar />
    </Scene>
  </Router>
);

export default App;

