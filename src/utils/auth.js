import { request, baseUrl } from "./api";
const headers = {
  "Content-Type": "application/json",
};

export const signUp = ({ name, avatar, email, password }) => {
  return request(`${baseUrl}/signup`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ name, avatar, email, password }),
  });
};

export const signIn = ({ email, password }) => {
  return request(`${baseUrl}/signin`, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({ email, password }),
  });
};

export const update = ({ name, avatar }, token) => {
  return request(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, avatar }),
  });
};

export const getUser = (token) => {
  return request(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });
};
