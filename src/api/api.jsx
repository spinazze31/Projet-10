const errorConnexion = document.querySelector(".error_connexion");

export const Api = async (credentials) => {
  const response = await fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });
  const data = await response.json();
  if (data) {
    return data;
  } else {
    errorConnexion.innerText = "Erreur de connection";
  }
};
