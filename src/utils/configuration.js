let configuration = {};

export function setConfiguration(name, value) {
  configuration = {
    ...configuration,
    [name]: value
  };
}

export function setAll(properties) {
  configuration = {
    ...configuration,
    ...properties
  };
}

export function unsetConfiguration(name) {
  configuration = delete configuration[name];
}

export function getConfiguration(key) {
  if (!configuration[key]) {
    throw new Error('Undefined configuration key: ' + key);
  }

  return configuration[key];
}
