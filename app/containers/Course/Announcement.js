import React, { Component, PropTypes } from 'react';
import { Text, View } from 'react-native';
import ListItem from './ListItem';
import styles from './styles';

class Announcement extends Component {
  static propTypes = {
    announcements: PropTypes.array,
  };
  renderList = () => {
    const { announcements } = this.props;
    return announcements.map(({ id, title }) => (
      <ListItem key={id} title={title} />
    ));
  };
  render() {
    return (
      <View>
        <View style={styles.padding} />
        <View style={styles.list}>
          {this.renderList()}
        </View>
      </View>
    );
  }
}

export default Announcement;

