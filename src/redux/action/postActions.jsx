import axios from "axios";
import { setPostDetails, setPosts, setSearch } from "../reducers/postReducers";
import { toast } from "react-toastify";

// Function to get all the posts
export const getAllPosts = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/v1/movie/popular?page=1`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(setPosts(response.data.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

// Function to get the details of a post
export const getPostDetails = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/v1/movie/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(setPostDetails(response.data.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response.status === 401) {
        localStorage.removeItem("token");
        // Temporary solution
        return (window.location.href = "/");
      }
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};

export const getSearchedMovies = (query) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }
    const response = await axios.get(
      `${import.meta.env.VITE_BASE_URL}/v1/search/movie?&page=1&query=${query}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(setSearch(response.data.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};
