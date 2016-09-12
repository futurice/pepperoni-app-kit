import * as api from '../utils/api';

// ------------- Tasks ------------
export async function getTasks() {
  // return GET promise
  return api.get('/tasks');
}

export async function getRequestedTasks(id) {
  return api.get(`/tasks/${id}`);
}

export async function postTask(task) {
  return api.post('/tasks', task);
}

export async function updateTask(id, newProps) {
  return api.put(`/tasks/${id}`, newProps);
}

export async function postTaskAssignment(assignment) {
  return api.post('/tasks/assign', assignment);
}

// ------------- Users ------------
export async function getUserInfo(id) {
  return api.get(`/users/${id}`);
}

export async function loginUser(email) {
  return api.get(`/users/login/${encodeURIComponent(email)}`);
}

export async function createUser(user) {
  return api.post('/users', user);
}

export async function updateUser(id, newProps) {
  return api.put(`/users/${id}`, newProps);
}
