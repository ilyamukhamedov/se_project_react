const baseUrl = "http://localhost:3001";
const headers = { "Content-Type": "application/json" };

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
}

function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

export const fetchItems = () => {
  return request(`${baseUrl}/items`, {
    method: "GET",
    headers: headers,
  });
};

export const removeItems = (cardId) => {
  return request(`${baseUrl}/items/${cardId}`, {
    method: "DELETE",
    headers: headers,
  });
};

export const loadItems = ({ name, weather, imageUrl }) => {
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      name: name,
      weather: weather,
      imageUrl: imageUrl,
    }),
  });
};
