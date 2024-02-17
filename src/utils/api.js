const baseUrl = "http://localhost:3001";
const headers = { "Content-Type": "application/json" };

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
};

export const fetchItems = () => {
  return fetch(`${baseUrl}/items`, {
    method: "GET",
    headers: headers,
  }).then((res) => {
    return checkResponse(res);
  });
};

export const removeItems = (cardId) => {
  return fetch(`${baseUrl}/items/${cardId}`, {
    method: "DELETE",
    headers: headers,
  }).then((res) => {
    return checkResponse(res);
  });
};

export const loadItems = ({ name, weather, imageUrl }) => {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      name: name,
      weather: weather,
      imageUrl: imageUrl,
    }),
  }).then((res) => {
    return checkResponse(res);
  });
};
