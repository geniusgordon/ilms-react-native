import React, { PropTypes } from 'react';
import { TouchableNativeFeedback } from 'react-native';

const RippleView = ({ darkRipple, children, onPress }) => {
  const rippleColor = darkRipple ? 'rgba(0, 0, 0, 0.2)' : '#ffffff';
  return (
    <TouchableNativeFeedback
      background={new TouchableNativeFeedback.Ripple(rippleColor)}
      delayPressIn={0}
      onPress={onPress}
    >
      {children}
    </TouchableNativeFeedback>
  );
};

RippleView.propTypes = {
  darkRipple: PropTypes.bool,
  children: PropTypes.node,
  onPress: PropTypes.func,
};

export default RippleView;

