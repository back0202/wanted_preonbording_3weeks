import axios from "axios";

const getRelatedSearch = (string) => {
  const result = axios.get("http://localhost:4000/sick", {
    params: { q: string },
  });
  console.log("api호출");
  return result;
};

export default getRelatedSearch;
