import axios from "axios";
import { API } from "../../backend";

export const signup = async (user) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify(user);

  try {
    const res = await axios.post(`${API}/api/users/register`, body, config);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const signin = async (user) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify(user);

  try {
    const res = await axios.post(`${API}/api/users/login/`, body, config);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const authenticate = (data, next) => {
  if (typeof window !== undefined) {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

export const isAuthenticated = () => {
  if (typeof window == undefined) {
    return false;
  }
  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
  } else {
    return false;
  }
};

export const signout = async (next) => {
  if (typeof window !== undefined) {
    const token = isAuthenticated().access;
    localStorage.removeItem("jwt");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    const res = await axios.get(`${API}/api/users/logout`, config);
    return res
      .then((response) => {
        console.log("Signout success");
        next();
      })
      .catch((err) => console.log(err));
  }
};
