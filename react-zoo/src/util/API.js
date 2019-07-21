import axios from "axios";

export default {
  search: function(query) {
    return axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=garZqKF43Z1oYqEuQRR2Nr300rHn2n9r&q=${query}&limit=12&offset=0&rating=G&lang=en`
    );
  }
};
