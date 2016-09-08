import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  toolbar: {
    height: 56,
    backgroundColor: '#888',
  },
  drawer: {
    flex: 1,
  },
  drawerHeader: {
    height: 168,
    backgroundColor: 'skyblue',
  },
  courseList: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 8,
  },
  courseListItem: {
    height: 48,
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  logout: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f44336',
  },
});

export default styles;

