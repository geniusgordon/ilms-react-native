import React, { PropTypes } from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import RippleView from './RippleView';

const styles = StyleSheet.create({
  fixedActionButton: {
    position: 'absolute',
    right: 24,
    bottom: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

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

