import { Alert, Platform, Linking } from 'react-native';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import I18n from 'react-native-i18n';
import { parseAndroidVersion } from '../utils/parser';
import { CHECK_UPDATE } from '../containers/App/actionTypes';
import { checkUpdateSuccess } from '../containers/App/actions';

function* checkAndroidUpdate(currentVersion) {
  const url = 'https://play.google.com/store/apps/details?id=com.geniusgordon.ilms';
  const res = yield call(fetch, url);
  const html = yield res.text();
  const latestVersion = parseAndroidVersion(html);
  return currentVersion !== latestVersion;
}

function* checkUpdate(store) {
  const currentVersion = store.getState().app.version;
  try {
    let needUpdate = false;
    if (Platform.OS === 'android') {
      needUpdate = yield call(checkAndroidUpdate, currentVersion);
      yield put(checkUpdateSuccess(needUpdate));
      if (needUpdate) {
        const url = 'https://play.google.com/store/apps/details?id=com.geniusgordon.ilms';
        Alert.alert(
          I18n.t('updateTitle'),
          I18n.t('updateMessage'),
          [
            { text: I18n.t('updateNow'), onPress: () => Linking.openURL(url) },
            { text: I18n.t('updateLater') },
          ]
        );
      }
    }
  } catch (error) {
    //
  }
}

export default function* checkUpdateSaga(store) {
  yield takeEvery(CHECK_UPDATE, checkUpdate, store);
}

