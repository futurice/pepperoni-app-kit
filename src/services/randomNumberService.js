import Promise from 'bluebird';

export async function generateRandomNumber() {
  // simulate an asynchronous operation
  return Promise
    .delay(1000)
    .then(() => Math.floor(Math.random() * 100));
}
