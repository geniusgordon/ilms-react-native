import React, { PropTypes } from 'react';
import { Image, Text, View } from 'react-native';
import RippleView from './RippleView';
import menuIcon from '../assets/ic_menu_black.png';
import styles from './styles';

const Toolbar = ({ backgroundColor, style, title, onIconClicked }) => (
  <View style={[styles.toolbar, { backgroundColor }, style]}>
    <RippleView onPress={onIconClicked} borderless>
      <View style={styles.toolbarIconContainer}>
        <Image source={menuIcon} style={styles.toolbarIcon} />
      </View>
    </RippleView>
    <View style={styles.toolbarTitleContainer}>
      <Text
        style={styles.toolbarTitle}
        ellipsizeMode="tail"
        numberOfLines={1}
      >
        {title}
      </Text>
    </View>
  </View>
);

Toolbar.propTypes = {
  backgroundColor: PropTypes.string,
  style: View.propTypes.style,
  title: PropTypes.string,
  onIconClicked: PropTypes.func,
};

export default Toolbar;

