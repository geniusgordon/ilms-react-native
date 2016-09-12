import React, { Component, PropTypes } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import RippleView from '../../components/RippleView';
import styles from './styles';

class CourseListItem extends Component {
  static propTypes = {
    course: PropTypes.object,
    onPress: PropTypes.func,
  };
  handlePress = () => {
    const { course, onPress } = this.props;
    onPress(course.id);
  };
  render() {
    const { course } = this.props;
    return (
      <RippleView onPress={this.handlePress} darkRipple>
        <View style={styles.drawerItem}>
          <Icon name="copyright" size={24} color="#000" />
          <Text
            style={styles.drawerItemName}
            ellipsizeMode="tail"
            numberOfLines={1}
          >
            {course.name}
          </Text>
        </View>
      </RippleView>
    );
  }
}

export default CourseListItem;

