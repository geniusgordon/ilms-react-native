import React, { PropTypes } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RippleView from '../../components/RippleView';
import styles from './styles';

const DrawerItem = ({ icon, name, onPress }) => (
  <RippleView onPress={onPress} darkRipple>
    <View style={styles.drawerItem}>
      <Icon name={icon} size={24} color="#000" />
      <Text
        style={styles.drawerItemName}
        ellipsizeMode="tail"
        numberOfLines={1}
      >
        {name}
      </Text>
    </View>
  </RippleView>
);

DrawerItem.propTypes = {
  icon: PropTypes.string,
  name: PropTypes.string,
  onPress: PropTypes.func,
};

export default DrawerItem;

