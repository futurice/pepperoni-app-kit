import * as api from '../utils/api';

export async function getTasks() {
  // return GET promise
  return api.get('/tasks');
}

export async function postTask(task) {
  return api.post('/tasks', task);
}

export async function getUserInfo(id) {
  return api.get(`/users/${id}`);
}

export async function loginUser(email) {
  return api.get(`/users/login/${encodeURIComponent(email)}`);
}

export async function createUser(user) {
  return api.post('/users', user);
}
