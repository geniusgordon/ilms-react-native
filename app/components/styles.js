import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  toolbar: {
    height: 56,
    flexDirection: 'row',
  },
  toolbarIcon: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toolbarTitleContainer: {
    height: 56,
    padding: 16,
    justifyContent: 'center',
    flex: 1,
  },
  toolbarTitle: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  tabBarUnderline: {
    height: 2,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  dividerContainer: {
    padding: 16,
  },
  divider: {
    height: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
});

export default styles;

