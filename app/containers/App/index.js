import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from '../Home';
import Login from '../Auth';
import Course from '../Course';

const App = () => (
  <Router>
    <Scene key="root">
      <Scene key="home" component={Home} title="Home" hideNavBar />
      <Scene key="login" component={Login} title="Login" hideNavBar />
      <Scene key="course" component={Course} title="Course" hideNavBar initial />
    </Scene>
  </Router>
);

export default App;

