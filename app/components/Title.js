import React, { PropTypes } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  titleContainer: {
    height: 56,
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

const Title = ({ title, backgroundColor }) => (
  <View style={[styles.titleContainer, { backgroundColor }]}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

Title.propTypes = {
  title: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default Title;

