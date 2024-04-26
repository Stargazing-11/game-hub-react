import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "970f967dc1484bdca6a60c850c19e071",
  },
});
