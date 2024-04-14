export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "put the URL for your deployed backend here, including https://"
    : "http://localhost:3001";

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
}

export function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

export const fetchItems = () => {
  const jwt = localStorage.getItem("jwt");
  return request(`${baseUrl}/items`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${jwt}`,
    },
  });
};

export const removeItems = (cardId) => {
  const jwt = localStorage.getItem("jwt");
  return request(`${baseUrl}/items/${cardId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${jwt}`,
    },
  });
};

export const loadItems = ({ name, weather, imageUrl }, token) => {
  const jwt = localStorage.getItem("jwt");
  return request(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify({
      name: name,
      weather: weather,
      imageUrl: imageUrl,
    }),
  });
};

export const likeCard = (cardId) => {
  const jwt = localStorage.getItem("jwt");
  return request(`${baseUrl}/items/${cardId}/likes`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${jwt}`,
    },
  });
};

export const dislikeCard = (cardId) => {
  const jwt = localStorage.getItem("jwt");
  return request(`${baseUrl}/items/${cardId}/likes`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${jwt}`,
    },
  });
};
