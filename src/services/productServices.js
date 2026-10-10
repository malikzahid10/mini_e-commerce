import axios from "axios";

const API_URL = "https://dummyjson.com/products";

export const getCategories = async () => {
  const response = await axios.get(`${API_URL}/categories`);

  return response.data;
};

export const getFeatureProducts = async () => {
  const response = await axios.get(
    `${API_URL}?limit=6&select=id,title,price,rating,thumbnail,category`,
  );

  return response.data.products;
};
