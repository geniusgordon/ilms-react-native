import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from '../Home';
import Login from '../Auth';
import Course from '../Course';
import Detail from '../Course/Detail';
import Forum from '../Forum';

const App = () => (
  <Router>
    <Scene key="root">
      <Scene key="home" component={Home} direction="vertical" hideNavBar />
      <Scene key="login" component={Login} direction="vertical" hideNavBar />
      <Scene key="course" component={Course} direction="vertical" hideNavBar />
      <Scene key="detail" component={Detail} direction="vertical" hideNavBar />
      <Scene key="forum" component={Forum} direction="vertical" hideNavBar/>
    </Scene>
  </Router>
);

export default App;

