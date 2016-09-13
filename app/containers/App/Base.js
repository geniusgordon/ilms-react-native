import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import AndroidBase from './AndroidBase';
import { checkLogin } from '../Auth/actions';

class Base extends Component {
  static propTypes = {
    title: PropTypes.string,
    statusBarBackgroundColor: PropTypes.string,
    toolbarBackgroundColor: PropTypes.string,
    toolbarActions: PropTypes.array,
    children: PropTypes.node,
    dispatch: PropTypes.func,
  };
  componentDidMount() {
    this.props.dispatch(checkLogin());
  }
  render() {
    const {
      title,
      statusBarBackgroundColor,
      toolbarBackgroundColor,
      toolbarActions,
      children,
    } = this.props;
    return (
      <AndroidBase
        title={title}
        statusBarBackgroundColor={statusBarBackgroundColor}
        toolbarBackgroundColor={toolbarBackgroundColor}
        toolbarActions={toolbarActions}
      >
        {children}
      </AndroidBase>
    );
  }
}

export default connect()(Base);

