import TimeAgo from 'javascript-time-ago';

// English.
import en from 'javascript-time-ago/locale/en';

TimeAgo.addDefaultLocale(en);

export const createTimeStamp = function (seconds) {
  const timeAgo = new TimeAgo('en-US');

  return timeAgo.format(Date.now() - seconds * 1000);
};
