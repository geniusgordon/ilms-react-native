import React, { PropTypes } from 'react';
import {
  TouchableOpacity,
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
  style: PropTypes.object,
  onPress: PropTypes.func,
};

export default CustomNavButton;

