import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Linking } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import GoogleAnalytics from 'react-native-google-analytics-bridge';
import Home from '../Home';
import About from '../Home/About';
import Login from '../Auth';
import Course from '../Course';
import Detail from '../Course/Detail';
import EmailList from '../Course/EmailList';
import ScoreList from '../Course/ScoreList';
import Forum from '../Forum';
import Compose from '../Forum/Compose';
import Web from '../../components/Web';
import { deepLink } from './actions';

GoogleAnalytics.setTrackerId('UA-68526607-1');

const mainScene = {
  duration: 100,
  panHandlers: null,
  hideNavBar: true,
};

const detailScene = {
  duration: 300,
  hideNavBar: true,
};

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
  };
  componentDidMount() {
    Linking.getInitialURL().then((url) => {
      if (url) {
        this.props.dispatch(deepLink(url));
      }
    });
  }
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={Home} {...mainScene} />
          <Scene key="login" component={Login} {...mainScene} />
          <Scene key="course" component={Course} {...mainScene} />
          <Scene key="detail" component={Detail} {...detailScene} />
          <Scene key="forum" component={Forum} {...detailScene} />
          <Scene key="compose" component={Compose} {...detailScene} />
          <Scene key="email" component={EmailList} {...detailScene} />
          <Scene key="score" component={ScoreList} {...detailScene} />
          <Scene key="about" component={About} {...detailScene} />
          <Scene key="web" component={Web} {...detailScene} />
        </Scene>
      </Router>
    );
  }
}

export default connect()(App);

