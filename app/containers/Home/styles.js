import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  logoContainer: {
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  info: {
    alignItems: 'center',
  },
  content: {
    padding: 16,
    alignItems: 'center',
  },
  linkContainer: {
    height: 96,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    padding: 16,
  },
});

export default styles;

