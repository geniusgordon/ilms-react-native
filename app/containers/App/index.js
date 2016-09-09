import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from '../Home';
import Login from '../Auth';
import Course from '../Course';
import Detail from '../Course/Detail';
import Forum from '../Forum';
import Compose from '../Forum/Compose';

const mainScene = {
  duration: 100,
  direction: 'vertical',
  panHandlers: null,
  hideNavBar: true,
};

const detailScene = {
  duration: 300,
  direction: 'vertical',
  hideNavBar: true,
};

const App = () => (
  <Router>
    <Scene key="root">
      <Scene key="home" component={Home} {...mainScene} />
      <Scene key="login" component={Login} {...mainScene} />
      <Scene key="course" component={Course} {...mainScene} />
      <Scene key="detail" component={Detail} {...detailScene} />
      <Scene key="forum" component={Forum} {...detailScene} />
      <Scene key="compose" component={Compose} {...detailScene} />
    </Scene>
  </Router>
);

export default App;

