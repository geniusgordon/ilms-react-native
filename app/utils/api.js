const BASE_URL = 'http://lms.nthu.edu.tw';

function toQueryString(data) {
  if (!data) {
    return '';
  }
  return Object.keys(data).map((key) => (
    `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
  )).join('&');
}

function get(path, qs) {
  fetch(`${BASE_URL}${path}${toQueryString(qs)}`)
  .then((res) => res.text());
}

function post(path, data) {
  fetch(`${BASE_URL}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    body: toQueryString(data),
  })
  .then((res) => res.text());
}

export default { get, post };

