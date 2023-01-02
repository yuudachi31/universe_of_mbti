import { useQuery ,useMutation} from '@tanstack/react-query'
import {getAllArticle } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTags } from '../redux/selectTagSlice';
import { setArticleList } from '../redux/articleSlice';
export const useAllArticle = (url) => {
   // console.log("appleee")
   const { data, isLoading,refetch,isSuccess } = useQuery([url], getAllArticle)
   return { data, isLoading,refetch ,isSuccess};
};
export const useOneArticle=(id)=>{
   const { data, isLoading,refetch,isSuccess } = useQuery([id], getAllArticle)
   const allArticle = data?.data
   console.log(allArticle)
 
   let targetArticle = allArticle?.find((item)=>{
      return item.id===Number(id)
   })
   // console.log(targetArticle)
   return { targetArticle, isLoading,refetch ,isSuccess};
}
// export const useAllArticle = () => {
//    const dispatch = useDispatch();
//    const { mutate, isLoading, isSuccess, isError, data, error, status } = useMutation(getAllArticle, {
//       // onSuccess: (data) => dispatch(setSelectedTags(data.data))
//       onSuccess: (data) => {dispatch(setArticleList(["a","b"]));console.log(data)}

//    });
//    return { mutate, isLoading, isSuccess, isError, data, error, status };
// }
