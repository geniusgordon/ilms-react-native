import React, { PropTypes } from 'react';
import { View } from 'react-native';
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view';
import styles from './styles';

const TabView = ({ children, backgroundColor, tabBarStyle, onChangeTab }) => (
  <ScrollableTabView
    tabBarBackgroundColor={backgroundColor}
    tabBarActiveTextColor="rgba(0, 0, 0, 0.5)"
    tabBarInactiveTextColor="rgba(0, 0, 0, 0.3)"
    tabBarUnderlineStyle={styles.tabBarUnderline}
    prerenderingSiblingsNumber={2}
    renderTabBar={() => <DefaultTabBar style={[{ borderWidth: 0 }, tabBarStyle]} />}
    onChangeTab={onChangeTab}
  >
    {children}
  </ScrollableTabView>
);

TabView.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string,
  tabBarStyle: View.propTypes.style,
  onChangeTab: PropTypes.func,
};

export default TabView;

