import React, { PropTypes } from 'react';
import {
  Platform,
  TouchableNativeFeedback,
  View,
} from 'react-native';

const RippleView = ({ darkRipple, style, children, borderless, onPress }) => {
  const rippleColor = darkRipple ? 'rgba(0, 0, 0, 0.2)' : '#ffffff';
  let background = new TouchableNativeFeedback.SelectableBackground();
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    background = new TouchableNativeFeedback.Ripple(rippleColor, borderless);
  }
  return (
    <TouchableNativeFeedback
      background={background}
      delayPressIn={0}
      style={style}
      onPress={onPress}
    >
      {children}
    </TouchableNativeFeedback>
  );
};

RippleView.propTypes = {
  darkRipple: PropTypes.bool,
  style: View.propTypes.style,
  children: PropTypes.node,
  borderless: PropTypes.bool,
  onPress: PropTypes.func,
};

export default RippleView;

