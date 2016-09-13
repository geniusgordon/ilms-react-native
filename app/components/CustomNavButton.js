import React, { PropTypes } from 'react';
import {
  Image,
  TouchableOpacity,
} from 'react-native';

const CustomNavButton = ({ icon, style, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Image
      source={icon}
      style={style}
    />
  </TouchableOpacity>
);

CustomNavButton.propTypes = {
  icon: Image.propTypes.source,
  style: Image.propTypes.style,
  onPress: PropTypes.func,
};

export default CustomNavButton;

