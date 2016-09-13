import { ToastAndroid, Alert, Platform } from 'react-native';

export default function alert(text) {
  if (Platform.OS === 'android') {
    ToastAndroid.show(text, ToastAndroid.SHORT);
  } else {
    Alert.alert(text);
  }
}

