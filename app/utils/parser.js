import { Platform } from 'react-native';
import cheerio from 'cheerio-without-node-native';
import I18n from 'react-native-i18n';

function parseCourseName(name) {
  const locale = I18n.locale;
  const englishNameRegex = /[A-Z].+/;
  if (name.length < 10) {
    return name;
  }
  let enlighName = name.match(englishNameRegex);
  if (!enlighName) {
    return name;
  }
  if (Array.isArray(enlighName)) {
    enlighName = enlighName.join(' ');
  }
  const chineseName = name.replace(enlighName, '');
  if (Platform.OS === 'ios') {
    return chineseName;
  }
  if (locale.startsWith('zh')) {
    return chineseName;
  }
  return enlighName;
}

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

const pad = [
  '',
  ' ',
  '  ',
  '   ',
];

function fixCourseIdPadding(courseId) {
  try {
    const department = courseId.match(/[A-Z]+/)[0];
    const departmentPadded = department + pad[4 - department.length];
    return courseId.replace(department, departmentPadded);
  } catch (error) {
    return '';
  }
}

export function parseLatestNews(html) {
  const $ = cheerio.load(html);
  const blockItems = $('#right div.BlockR').eq(1).find('.BlockItem');
  return blockItems.map((i, item) => {
    const link = $(item).find('a');
    const id = link.eq(0).attr('href').match(/.*\((\d+).\)*/)[1];
    const dateStr = `${$(item).find('.hint').attr('title')} 00:00:00`;
    return {
      id: i,
      itemId: id,
      title: parseCourseName(link.eq(1).text()),
      subtitle: link.eq(0).text(),
      date: parseDate(dateStr),
      dateStr,
      courseId: link.eq(1).attr('href').match(/.*ID=(\d+).*/)[1],
    };
  }).get();
}

export function parseProfile(html) {
  const $ = cheerio.load(html);
  const name = $('#fmName').attr('value');
  const email = $('#fmEmail').attr('value');
  return { name, email };
}

export function parseCourseList(html) {
  const $ = cheerio.load(html);
  const mnu = $('.mnu').eq(0);
  const mnuItems = mnu.find('.mnuItem');
  const courseUrlRegex = /^\/course\/(\d+)$/;
  return mnuItems.filter((i, item) => (
    courseUrlRegex.test($(item).find('a').attr('href'))
  ))
  .map((i, item) => ({
    id: $(item).find('a').attr('href').match(courseUrlRegex)[1],
    courseId: fixCourseIdPadding($(item).find('span').text().replace(/[()]/g, '')),
    name: parseCourseName($(item).find('a').text()),
  })).get();
}

export function parseCourseNameTitle(html) {
  const $ = cheerio.load(html);
  const title = $('title').text();
  const courseName = title.replace(' - 國立清華大學 iLMS數位學習平台', '');
  return parseCourseName(courseName);
}

function parseAnnouncementList(html) {
  const $ = cheerio.load(html);
  if ($('#main').text().indexOf('目前尚無資料') !== -1) {
    return [];
  }
  return $('#main tr').filter(i => i % 2 === 1).map((i, tr) => {
    const td = $(tr).find('td');
    const dateStr = td.eq(3).find('span').attr('title');
    return {
      id: td.eq(0).text(),
      title: td.eq(1).text(),
      date: parseDate(dateStr),
      dateStr,
    };
  }).get();
}

function parseMaterialList(html) {
  const $ = cheerio.load(html);
  if ($('#main').text().indexOf('目前尚無資料') !== -1) {
    return [];
  }
  return $('#main tr').slice(1).map((i, tr) => {
    const td = $(tr).find('td');
    const dateStr = td.eq(5).find('span').attr('title');
    return {
      id: td.eq(0).text(),
      title: td.eq(1).text().trim(),
      date: parseDate(dateStr),
      dateStr,
    };
  }).get();
}

function parseAssignmentList(html) {
  const $ = cheerio.load(html);
  if ($('#main').text().indexOf('目前尚無資料') !== -1) {
    return [];
  }
  return $('#main tr').slice(1).map((i, tr) => {
    const td = $(tr).find('td');
    const href = td.eq(1).find('a').eq(0).attr('href');
    const dateStr = td.eq(4).find('span').attr('title');
    return {
      id: href.match(/.*hw=(\d+).*/)[1],
      title: td.eq(1).text().trim(),
      date: parseDate(dateStr),
      dateStr,
    };
  }).get();
}

function parseForumList(html) {
  const $ = cheerio.load(html);
  if ($('#main').text().indexOf('目前尚無資料') !== -1) {
    return [];
  }
  return $('#main tr').filter(i => i % 2 === 1).map((i, tr) => {
    const td = $(tr).find('td');
    const count = td.eq(2).find('span').eq(0).text();
    const lastEdit = td.eq(3).text().trim();
    return {
      id: td.eq(0).text(),
      title: td.eq(1).text(),
      subtitle: `${I18n.t('lastEdit')}: ${lastEdit}`,
      count,
    };
  }).get();
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
  if (itemType === 'forum') {
    return parseForumList(html);
  }
  return [];
}

function parseAnnouncementDetail(html) {
  const item = JSON.parse(html).news;
  let attachments = [];
  if (item.attach) {
    const $ = cheerio.load(item.attach);
    attachments = $('a').map((i, attach) => ({
      id: $(attach).attr('href').match(/.*id=(\d+).*/)[1],
      name: $(attach).text(),
    })).get();
  }
  return {
    content: item.note,
    dateStr: item.createTime,
    date: parseDate(item.createTime),
    attachments,
  };
}

function parseMaterialDetail(html) {
  const $ = cheerio.load(html);
  const title = $('#doc .title').text();
  const poster = $('.poster').text();
  const dateStr = `${poster.split(', ')[1]}:00`;
  const content = $('#doc .article').text();
  const attachments = $('div.attach div.block div').map((i, attach) => {
    const link = $(attach).find('a').eq(1);
    return {
      id: link.attr('href').match(/.*id=(\d+).*/)[1],
      name: link.attr('title'),
    };
  }).get();
  return {
    title,
    content,
    dateStr,
    date: parseDate(dateStr),
    attachments,
  };
}

function parseAssignmentDetail(html) {
  const $ = cheerio.load(html);
  const title = $('#main span.curr').text();
  const tr = $('tr');
  const dateStr = `${tr.eq(5).find('td').eq(1).text()}:00`;
  const content = tr.eq(6).find('td').eq(1).text();
  const links = tr.eq(7).find('a');
  const attachments = links.map((i, link) => ({
    id: $(link).attr('href').match(/.*id=(\d+).*/)[1],
    name: $(link).text(),
  })).get();
  return {
    title,
    content,
    dateStr,
    date: parseDate(dateStr),
    attachments,
  };
}

export function parseItemDetail(itemType, html) {
  if (itemType === 'announcement') {
    return parseAnnouncementDetail(html);
  }
  if (itemType === 'material') {
    return parseMaterialDetail(html);
  }
  if (itemType === 'assignment') {
    return parseAssignmentDetail(html);
  }
  return {};
}

export function parseForum(posts) {
  return {
    id: posts.id,
    title: posts.title,
    count: posts.items.length - 1,
    posts: posts.items.map(item => ({
      id: item.id,
      name: item.name,
      account: item.account,
      email: item.email,
      date: item.date,
      content: item.note,
    })),
  };
}

function parseEmailLine($, line) {
  const type = line.text().split(':')[0].trim();
  const names = line.text().split(':')[1].split(',')
    .map(name => name.trim())
    .filter(name => name !== '無' && name !== 'None');
  const emails = line.find('img')
    .filter((i, img) => $(img).attr('src').endsWith('mail.png'))
    .map((i, img) => $(img).attr('title')).get();
  return names.map((name, i) => ({
    name: `${type}: ${name}`,
    email: emails[i],
  }));
}

export function parseEmailList(html) {
  const $ = cheerio.load(html);
  const boxBody = $('#menu div.boxBody');
  const infoBox = boxBody.eq(boxBody.length - 1);
  const teacherEmailLine = infoBox.find('div').eq(4);
  const taEmailLine = infoBox.find('div').eq(5);
  return [
    ...parseEmailLine($, teacherEmailLine),
    ...parseEmailLine($, taEmailLine),
  ];
}

export function parseScore(html) {
  const $ = cheerio.load(html);
  if ($('#main table').length === 0) {
    return null;
  }
  const tr = $('#main tr');
  const scoreHeader = tr.eq(0).find('td').slice(4);
  const scoreRow = tr.eq(1).find('td').slice(4);
  return scoreRow.map((i, row) => {
    const text = scoreHeader.eq(i).text();
    const percent = text.match(/\((.*)\)/);
    return {
      name: text.replace(/\(.*\)/, ''),
      percent: percent ? percent[1] : '',
      score: $(row).text(),
    };
  }).get();
}

export function parseAndroidVersion(html) {
  const $ = cheerio.load(html);
  return $('[itemprop=softwareVersion]').text().trim();
}

