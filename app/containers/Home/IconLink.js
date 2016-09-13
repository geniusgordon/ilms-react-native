import React, { Component, PropTypes } from 'react';
import { Linking, View } from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import RippleView from '../../components/RippleView';
import styles from './styles';

class IconLink extends Component {
  static propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
    link: PropTypes.string,
  };
  handlePress = () => {
    const { link } = this.props;
    Linking.openURL(link);
  };
  render() {
    const { name, color } = this.props;
    return (
      <RippleView borderless>
        <View style={styles.link}>
          <Icon
            name={name}
            size={56}
            color={color}
            onPress={this.handlePress}
          />
        </View>
      </RippleView>
    );
  }
}

export default IconLink;

