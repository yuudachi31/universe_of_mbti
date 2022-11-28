import axios from "axios"

const URL = "http://127.0.0.1:5000/article/admin/all"

// export const getProductById = async ({ queryKey }) => {
//   const [productId] = queryKey;
//   let data = await axios.get(`${URL}/products/id/${productId}`);
//   return data.data;
// }

export const getAllArticle = async ({ queryKey }) => {
//   const [url] = queryKey;
  let data;
    data = await axios.get(`${URL}`);
  return data;
}
