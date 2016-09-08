import React, { Component, PropTypes } from 'react';
import { ScrollView, View } from 'react-native';
import ListItem from './ListItem';
import NoData from'./NoData';
import styles from './styles';

class Announcement extends Component {
  static propTypes = {
    announcements: PropTypes.array,
  };
  renderList = () => {
    const { announcements } = this.props;
    if (announcements.length === 0) {
      return <NoData />;
    }
    return announcements.map(({ id, title, date }) => (
      <ListItem key={id} title={title} date={date} />
    ));
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.padding} />
        <View style={styles.list}>
          {this.renderList()}
        </View>
      </ScrollView>
    );
  }
}

export default Announcement;

