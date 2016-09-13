import React, { Component, PropTypes } from 'react';
import { Platform } from 'react-native';
import { connect } from 'react-redux';
import AndroidBase from './AndroidBase';
import IosBase from './IosBase';
import { checkLogin } from '../Auth/actions';

class Base extends Component {
  static propTypes = {
    title: PropTypes.string,
    statusBarBackgroundColor: PropTypes.string,
    toolbarBackgroundColor: PropTypes.string,
    toolbarActions: PropTypes.array,
    children: PropTypes.node,
    dispatch: PropTypes.func,
    onActionSelected: PropTypes.func,
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
      onActionSelected,
      children,
    } = this.props;
    if (Platform.OS === 'ios') {
      return (
        <IosBase
          title={title}
          statusBarBackgroundColor={statusBarBackgroundColor}
          toolbarBackgroundColor={toolbarBackgroundColor}
        >
          {children}
        </IosBase>
      );
    }
    return (
      <AndroidBase
        title={title}
        statusBarBackgroundColor={statusBarBackgroundColor}
        toolbarBackgroundColor={toolbarBackgroundColor}
        toolbarActions={toolbarActions}
        onActionSelected={onActionSelected}
      >
        {children}
      </AndroidBase>
    );
  }
}

export default connect()(Base);

