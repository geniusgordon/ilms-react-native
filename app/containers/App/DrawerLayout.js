import React, { Component, PropTypes } from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import RNDrawerLayout from 'react-native-drawer-layout';
import Drawer from './Drawer';
import ToolBar from '../../components/ToolBar';
import { checkLogin } from '../Auth/actions';

class DrawerLayout extends Component {
  static propTypes = {
    title: PropTypes.string,
    statusBarColor: PropTypes.string,
    toolbarBackgroundColor: PropTypes.string,
    toolbarActions: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      show: PropTypes.oneOf(['always', 'ifRoom', 'never']),
    })),
    children: PropTypes.node,
    dispatch: PropTypes.func,
    onActionSelected: PropTypes.func,
  };
  componentDidMount() {
    this.props.dispatch(checkLogin());
  }
  handleIconClick = () => {
    this.openDrawer();
  };
  handleDrawerItemClick = () => {
    this.closeDrawer();
  };
  drawerRef = (ref) => {
    if (ref) {
      this.openDrawer = ref.openDrawer;
      this.closeDrawer = ref.closeDrawer;
    }
  };
  render() {
    const {
      title,
      statusBarColor,
      toolbarBackgroundColor,
      toolbarActions,
      onActionSelected,
      children,
    } = this.props;
    const renderDrawer = () => <Drawer onItemClick={this.handleDrawerItemClick} />;
    return (
      <RNDrawerLayout
        drawerBackgroundColor="#FFFFFF"
        drawerWidth={300}
        drawerPosition={RNDrawerLayout.positions.left}
        renderNavigationView={renderDrawer}
        ref={this.drawerRef}
      >
        <StatusBar backgroundColor={statusBarColor} />
        <ToolBar
          title={title}
          leftIcon="menu"
          style={{ backgroundColor: toolbarBackgroundColor }}
          statusBarColor={statusBarColor}
          actions={toolbarActions}
          onActionSelected={onActionSelected}
          onIconClicked={this.handleIconClick}
        />
        {children}
      </RNDrawerLayout>
    );
  }
}

export default connect()(DrawerLayout);

