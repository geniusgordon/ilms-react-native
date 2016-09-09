import React, { PropTypes } from 'react';
import { TouchableNativeFeedback, View } from 'react-native';

const RippleView = ({ darkRipple, style, children, borderless, onPress }) => {
  const rippleColor = darkRipple ? 'rgba(0, 0, 0, 0.2)' : '#ffffff';
  return (
    <TouchableNativeFeedback
      background={new TouchableNativeFeedback.Ripple(rippleColor, borderless)}
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

