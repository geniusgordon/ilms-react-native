import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  padding: {
    height: 56,
    backgroundColor: '#ffc107',
  },
  list: {
    transform: [{
      translateY: -50,
    }],
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    height: 96,
    margin: 8,
    backgroundColor: 'white',
    elevation: 2,
    borderRadius: 1,
  },
  listItemDate: {
    width: 96,
    padding: 16,
    alignItems: 'center',
  },
  listItemYear: {
    fontSize: 12,
    fontWeight: '100',
  },
  listItemDay: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  listItemTitle: {
    flex: 1,
    padding: 16,
  },
});

export default styles;

