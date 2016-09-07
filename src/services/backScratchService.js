import * as api from '../utils/api';

export async function getTasks() {
  // return GET promise
  return api.get('/tasks');
}

export async function postTask(task) {
  return api.post('/tasks', task);
}
