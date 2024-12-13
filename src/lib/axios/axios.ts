import Axios from "axios";
import { CONFIGS } from "../configs";

const axios = Axios.create({
  baseURL: CONFIGS.site.apiUrl,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${CONFIGS.site.apiKey}`,
  },
});

export default axios;
