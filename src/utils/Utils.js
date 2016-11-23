export function getTodayFormatted() {
  //Get the todays date with the format yyyyMMdd
  return new Date().toISOString().slice(0,10).split('-').join('');
}

export function getRamdonNumberBetweenRange(max, min) {
  return Math.floor(Math.random() * (max - min) + min);
}
