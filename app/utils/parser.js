import HTMLParser from 'fast-html-parser';

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

export function parseAnnouncementList(html) {
  const root = HTMLParser.parse(html);
  const tr = root.querySelectorAll('#main tr').filter((r, i) => i % 2 === 1);
  console.log(tr);
  if (tr.length === 1 && tr[0].text === '目前尚無資料') {
    return [];
  }
  return tr.map((r) => {
    const td = r.querySelectorAll('td');
    return {
      id: td[0].text,
      title: td[1].text,
      date: new Date(td[3].childNodes[0].attributes.title),
    };
  });
}

