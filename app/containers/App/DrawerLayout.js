import React, { Component, PropTypes } from 'react';
import { View, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import RNDrawerLayout from 'react-native-drawer-layout';
import Drawer from './Drawer';
import UpdateNotification from './UpdateNotification';
import ToolBar from '../../components/ToolBar';
import { checkLogin } from '../Auth/actions';
import styles from './styles';

class DrawerLayout extends Component {
  static propTypes = {
    title: PropTypes.string,
    statusBarColor: PropTypes.string,
    toolbarBackgroundColor: PropTypes.string,
    toolbarElevation: PropTypes.number,
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
      toolbarElevation,
      toolbarActions,
      onActionSelected,
      children,
    } = this.props;
    const renderDrawer = () => <Drawer onItemClick={this.handleDrawerItemClick} />;
    const toolbarStyle = [{ backgroundColor: toolbarBackgroundColor }];
    if (toolbarElevation > 0) {
      toolbarStyle.push(styles.toolbarElevation);
    }
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
          style={toolbarStyle}
          statusBarColor={statusBarColor}
          actions={toolbarActions}
          onActionSelected={onActionSelected}
          onIconClicked={this.handleIconClick}
        />
        <View style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            {children}
          </View>
          <UpdateNotification />
        </View>
      </RNDrawerLayout>
    );
  }
}

export default connect()(DrawerLayout);

