import axios from "axios";
const URL = "https://mbtibackserver-production.up.railway.app";
const AllURL = "http://127.0.0.1:5000/article/admin/all";
const articleUrl = "http://127.0.0.1:5000/article/user/";
const loginUrl = "http://127.0.0.1:5000/login/token";
const au =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtYXJ0aW4iLCJleHAiOjE2NzIwMDYzNzl9.748rh9d_zz6MANeY3EUr5nMIuSFjgn1Il-00ZUrxDGg";
// export const getProductById = async ({ queryKey }) => {
//   const [productId] = queryKey;
//   let data = await axios.get(`${URL}/products/id/${productId}`);
//   return data.data;
// }

export const getAllArticle = async ({ queryKey }) => {
  //   const [url] = queryKey;
  let data;
  data = await axios.get(`${URL}/article/admin/all`);
  return data;
};

export const adminLogin = async (username, password) => {
  //   const [url] = queryKey;
  return await axios.post(
    URL + "/login/token",
    `grant_type=password&username=${username}&password=${password}`
  );
};
//   function a(result){
// console.log(result)
//   }
//   function b(error){
//     console.log(error)
//       }
//   const loginstatus=adminLogin()
//   console.log(loginstatus)
//   loginstatus.then(a,b)
export const updateArticle = async (value, token) => {
  //   const [url] = queryKey;
  return await axios.put(URL + "/article/edit", JSON.stringify(value), {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      // "Authorization":au
    },
  });
};
// const update=updateArticle()
// console.log(update)
