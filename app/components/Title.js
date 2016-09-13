import React, { PropTypes } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Divider from './Divider';

const styles = StyleSheet.create({
  container: {
    margin: 8,
    padding: 16,
    backgroundColor: 'white',
    elevation: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    shadowColor: 'black',
    shadowOpacity: 0.6,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontWeight: '100',
    textAlign: 'center',
  },
});

const Title = ({ title, subtitle }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Divider />
    <Text style={styles.subtitle}>{subtitle}</Text>
  </View>
);

Title.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Title;

