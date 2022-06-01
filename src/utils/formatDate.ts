import dayjs from 'dayjs';

export function unixToDate(unixDate: number): string {
  return dayjs.unix(unixDate).format('DD');
}

export function toDate(date: Date) {
  return dayjs(date).format('DD/MM/YYYY');
}

export function toHour(hour: Date) {
  return dayjs(hour).format('HH:mm');
}

export function dayOfWeek() {
  const semana = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];

  const today = new Date();

  return semana[today.getDay()];
}
