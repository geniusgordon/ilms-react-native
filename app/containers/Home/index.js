import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import DrawerLayout from '../App/DrawerLayout';
import { checkLogin } from '../Auth/actions';

class Home extends Component {
  static propTypes = {
    dispatch: PropTypes.func,
  };
  componentDidMount() {
    this.props.dispatch(checkLogin());
  }
  render() {
    return (
      <DrawerLayout>
        <View>
          <Text>Home</Text>
        </View>
      </DrawerLayout>
    );
  }
}

export default connect()(Home);

