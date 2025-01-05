export const api = async (credentials) => {
  const response = await fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  const data = await response.json();
  return data.body.token;
};

export const getProfile = async (token) => {
  const response = await fetch("http://localhost:3001/api/v1/user/profile", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const data = await response.json();
  return data;
};

export const putProfile = async (token, userInformations) => {
  const response = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(userInformations),
  });
  const data = await response.json();
  console.log(data);
  return data;
};
