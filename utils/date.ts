export function parseDate(date: Date){
  let year = date.getUTCFullYear();
  let month = date.getUTCMonth() + 1;
  let day = date.getUTCDate();
  return `${year}/${month}/${day}`;
}