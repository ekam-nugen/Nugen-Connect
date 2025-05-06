import axios from "axios";

export default axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, //get your base url from env or any file,
  transformRequest: [
    function (data, headers) {
      if (data instanceof FormData) {
        headers["Content-Type"] = "multipart/form-data";
        return data;
      } else {
        headers["Content-Type"] = "application/json";
      }
      return JSON.stringify(data);
    }
  ]
});
