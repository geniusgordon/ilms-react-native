import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import DrawerLayout from './DrawerLayout';
import Login from '../Auth';

const App = () => (
  <Router>
    <Scene key="root">
      <Scene key="home" component={DrawerLayout} title="Home" hideNavBar />
      <Scene key="login" component={Login} title="Login" hideNavBar initial />
    </Scene>
  </Router>
);

export default App;

