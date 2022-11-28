import { useQuery } from '@tanstack/react-query'
import {getAllArticle } from "../api";

export const useAllArticle = (url) => {
   const { data, isLoading } = useQuery([url], getAllArticle)
   return { data, isLoading };
};

