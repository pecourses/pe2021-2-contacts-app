import { getDate, getMonth } from 'date-fns';

export const isBirthdayToday = (date1, date2) =>
  getDate(date1) === getDate(date2) && getMonth(date1) === getMonth(date2);
