import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#555',
  },
  drawer: {
    flex: 1,
  },
  drawerHeader: {
    height: 168,
    alignItems: 'center',
  },
  logo: {
    width: 96,
    height: 96,
    marginTop: 16,
  },
  courseList: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 8,
  },
  courseListItem: {
    height: 48,
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: 'center',
    flexDirection: 'row',
  },
  courseIcon: {
    width: 24,
    height: 24,
  },
  courseName: {
    flex: 1,
    paddingLeft: 16,
  },
  logout: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f44336',
    paddingLeft: 16,
  },
});

export default styles;

