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
  drawerItemList: {
    flex: 1,
    marginTop: 8,
    marginBottom: 8,
  },
  drawerItem: {
    height: 48,
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: 'center',
    flexDirection: 'row',
  },
  drawerItemIcon: {
    width: 24,
    height: 24,
  },
  drawerItemName: {
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

