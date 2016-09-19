import React, { PropTypes } from 'react';
import {
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomNavButton = ({ icon, style, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    { icon ?
      <Icon
        name={icon}
        size={24}
        color="black"
        style={style}
      /> : null
    }
  </TouchableOpacity>
);

CustomNavButton.propTypes = {
  icon: PropTypes.string,
  style: View.propTypes.style,
  onPress: PropTypes.func,
};

export default CustomNavButton;

