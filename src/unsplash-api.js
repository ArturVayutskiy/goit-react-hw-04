import axios from "axios";

const BASE_URL = "https://api.unsplash.com";
const ACCESS_KEY = "UPxl6-45tqMJoCuFQ7lQoPMaXFq5QYfPjOTgxRNxIC0";

const fetchPhotos = async (searchQuery, page) => {
  const response = await axios.get(`${BASE_URL}/search/photos`, {
    params: {
      query: searchQuery,
      page,
      per_page: 12,
    },
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  });

  return response.data;
};

export default fetchPhotos;
