export function getEvents() {
  const url = `http://localhost:3000/events`;
  return fetch(url).then(response => response.json());
}

export function getEvent(id) {
  const url = `http://localhost:3000/events/`+id;
  return fetch(url).then(response => response.json());
}
