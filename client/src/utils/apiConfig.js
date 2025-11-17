const getBaseUrl = () => {
  if (process.env.REACT_APP_API_BASE_URL) {
    return process.env.REACT_APP_API_BASE_URL;
  }

  if (process.env.NODE_ENV === "development") {
    return "http://localhost:5000";
  }

  return "https://racipe-sharing.onrender.com";
};

export const API_BASE_URL = getBaseUrl();

export const buildUrl = (path = "") => `${API_BASE_URL}${path}`;

