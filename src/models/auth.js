import config from "../config/config.json";
import storage from "./storage";
const auth = {
  loggedIn: function loggedIn() {
    const token = storage.readToken();
    const twentyFourHours = 1000 * 60 * 60 * 24;
    const notExpired = new Date().getTime() - token.date < twentyFourHours;
    return token && notExpired;
  },

  login: async function login(email, password) {
    const data = {
      email: email,
      password: password,
      api_key: process.env.REACT_APP_REST_API_KEY,
    };
    const response = await fetch(`${config.url}/admins/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    });
    const result = await response.json();

    if (Object.prototype.hasOwnProperty.call(result, "errors")) {
      return {
        message: result.errors.title,
        description: result.errors.detail,
        type: "danger",
      };
    }

    storage.storeToken(result.data.token);

    return {
      message: "Success",
      description: result.data.message,
      type: "success",
    };
  },
  logout: async function logout() {
    storage.deleteToken();
  },
};

export { auth };
