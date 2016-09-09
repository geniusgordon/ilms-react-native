import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  toolbar: {
    height: 56,
    flexDirection: 'row',
  },
  toolbarIconContainer: {
    width: 56,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toolbarIcon: {
    width: 24,
    height: 24,
  },
  toolbarTitleContainer: {
    height: 56,
    paddingLeft: 16,
    paddingRight: 16,
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
  fixedActionButton: {
    position: 'absolute',
    right: 24,
    bottom: 24,
    width: 56,
    height: 56,
    borderRadius: 28,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;

