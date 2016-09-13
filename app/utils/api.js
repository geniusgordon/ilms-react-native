import CookieManager from 'react-native-cookies';

const BASE_URL = 'http://lms.nthu.edu.tw';

function toQueryString(data) {
  if (!data) {
    return '';
  }
  return Object.keys(data).map((key) => (
    `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
  )).join('&');
}

function get(path, qs, headers) {
  return fetch(`${BASE_URL}${path}?${toQueryString(qs)}`, { headers });
}

function post(path, data, headers) {
  return fetch(`${BASE_URL}${path}`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: toQueryString(data),
  });
}

function postMultipart(path, data) {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });
  return fetch(`${BASE_URL}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'multipart/form-data;',
      Referer: 'http://lms.nthu.edu.tw/post_insert.php?courseID=19025&action=post',
    },
    body: formData,
  });
}

function checkLogin() {
  const url = `${BASE_URL}/home/profile.php`;
  return fetch(url).then((res) => res.text())
  .then((html) => {
    if (html.indexOf('權限不足') !== -1 || html.indexOf('No Permission!') !== -1) {
      return { isLogin: false };
    }
    return {
      isLogin: true,
      html,
    };
  })
  .catch(err => {
    console.log(err);
  });
}

function getCookie() {
  return new Promise((resolve, reject) => {
    CookieManager.get(BASE_URL, (err, cookie) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(Object.keys(cookie).map((key) => (
        `${key}=${cookie[key]}`
      )).join('; '));
    });
  });
}

export default {
  get,
  post,
  postMultipart,
  checkLogin,
  getCookie,
};

