import axios from "axios";
import { API } from "../../backend";
import { isAuthenticated } from "../auth";

export const getPosts = async () => {
  try {
    const res = await axios.get(`${API}/api/blog/`);
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getFeaturedPosts = async () => {
  try {
    const res = await axios.get(`${API}/api/blog/featured`);
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getPost = async (slug) => {
  try {
    const res = await axios.get(`${API}/api/blog/${slug}`);
    return res.data;
  } catch (err) {
    return err;
  }
};

export const getComments = async (slug) => {
  try {
    const res = await axios.get(`${API}/api/comments/get-comments/${slug}`);
    return res.data.comments;
  } catch (err) {
    return err;
  }
};

export const createContact = async (contact) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify(contact);

  try {
    const res = await axios.post(`${API}/api/contact/`, body, config);
    return res.data;
  } catch (error) {
    return error;
  }
};

export const createComment = async (comment, slug) => {
  const config = {
    headers: {
      Authorization: `Bearer ${isAuthenticated().access}`,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify(comment);
  try {
    const res = await axios.post(
      `${API}/api/comments/create-comment/${slug}`,
      body,
      config
    );
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
