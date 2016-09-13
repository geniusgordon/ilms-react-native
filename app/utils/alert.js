import { ToastAndroid, Alert, Platform } from 'react-native';

export default function alert(text) {
  if (Platform.OS === 'android') {
    ToastAndroid.show('無法載入課程', ToastAndroid.SHORT);
  } else {
    Alert.alert('無法載入課程');
  }
}

