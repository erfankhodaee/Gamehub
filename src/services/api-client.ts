import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "ffd9962e96ed44d0a1ff7cad617c4c1e",
  },
});
