import { useQuery } from "react-query";
import { api } from "../api";

export const UseGetProduct = () => {

  const fetchProduct = async () => {
    const req = api.get("");
    return (await req).data;
  };

  const { data, isLoading } = useQuery(
    "Produtos",
    async () => await fetchProduct()
  );

  return { data };
};
