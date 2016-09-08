import HTMLParser from 'fast-html-parser';

function parseDate(dateStr) {
  const match = dateStr.match(/(\d+)-(\d+)-(\d+)\s+(\d+):(\d+):(\d+)/);
  return {
    year: match[1],
    month: match[2],
    day: match[3],
    hour: match[4],
    minute: match[5],
    second: match[6],
  };
}

export function parseCourseList(html) {
  const root = HTMLParser.parse(html);
  const mnuItems = root.querySelectorAll('.mnuItem a');
  const courseUrlRegex = /^\/course\/(\d+)$/;
  return mnuItems.filter((item) => (
    courseUrlRegex.test(item.attributes.href)
  ))
  .map((item) => ({
    id: item.attributes.href.match(courseUrlRegex)[1],
    name: item.text,
  }));
}

export function parseCourseName(html) {
  const root = HTMLParser.parse(html);
  const title = root.querySelector('title').text;
  return title.replace(' - 國立清華大學 iLMS數位學習平台', '');
}

function parseAnnouncementList(html) {
  const root = HTMLParser.parse(html);
  const tr = root.querySelectorAll('#main tr').filter((r, i) => i % 2 === 1);
  if (root.querySelector('#main').text.indexOf('目前尚無資料') !== -1) {
    return [];
  }
  return tr.map((r) => {
    const td = r.querySelectorAll('td');
    return {
      id: td[0].text,
      title: td[1].text,
      date: parseDate(td[3].childNodes[0].attributes.title),
    };
  });
}

function parseMaterialList(html) {
  const root = HTMLParser.parse(html);
  const tr = root.querySelectorAll('#main tr').slice(1);
  if (root.querySelector('#main').text.indexOf('目前尚無資料') !== -1) {
    return [];
  }
  return tr.map((r) => {
    const td = r.querySelectorAll('td');
    return {
      id: td[0].text,
      title: td[1].text.trim(),
      date: parseDate(td[5].childNodes[0].attributes.title),
    };
  });
}

function parseAssignmentList(html) {
  const root = HTMLParser.parse(html);
  const tr = root.querySelectorAll('#main tr').slice(1);
  if (root.querySelector('#main').text.indexOf('目前尚無資料') !== -1) {
    return [];
  }
  return tr.map((r) => {
    const td = r.querySelectorAll('td');
    const href = td[1].childNodes[0].attributes.href;
    return {
      id: href.match(/.*hw=(\d+).*/)[1],
      title: td[1].text.trim(),
      date: parseDate(td[4].childNodes[0].attributes.title),
    };
  });
}

export function parseItemList(itemType, html) {
  if (itemType === 'announcement') {
    return parseAnnouncementList(html);
  }
  if (itemType === 'material') {
    return parseMaterialList(html);
  }
  if (itemType === 'assignment') {
    return parseAssignmentList(html);
  }
  return [];
}
