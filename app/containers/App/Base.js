import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AndroidBase from './AndroidBase';
import { checkLogin } from '../Auth/actions';

class Base extends Component {
  static propTypes = {
    children: PropTypes.node,
    dispatch: PropTypes.func,
  };
  componentDidMount() {
    this.props.dispatch(checkLogin());
  }
  render() {
    const { children } = this.props;
    return (
      <AndroidBase>
        {children}
      </AndroidBase>
    );
  }
}

export default connect()(Base);

