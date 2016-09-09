import React, { PropTypes } from 'react';
import { Animated, View } from 'react-native';
import RippleView from './RippleView';
import styles from './styles';

const FixedActionButton = ({ style, children, onPress }) => (
  <RippleView onPress={onPress}>
    <Animated.View style={[styles.fixedActionButton, style]}>
      {children}
    </Animated.View>
  </RippleView>
);

FixedActionButton.propTypes = {
  style: View.propTypes.style,
  children: PropTypes.node,
  onPress: PropTypes.func,
};

export default FixedActionButton;

