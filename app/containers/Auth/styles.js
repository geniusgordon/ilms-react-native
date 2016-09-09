import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  formContainer: {
    flex: 2,
    padding: 24,
  },
  inputContainer: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: 'white',
    elevation: 2,
  },
  button: {
    height: 48,
    backgroundColor: '#ef5350',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    elevation: 2,
  },
});

export default styles;

