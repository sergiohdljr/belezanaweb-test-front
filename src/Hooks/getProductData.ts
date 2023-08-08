import { useQuery } from "react-query";
import { api } from "../api";
import { InventoryProducts } from "./interfaces";

export const UseGetProduct = () => {
  const fetchProduct = async (): Promise<InventoryProducts> => {
    const req = api.get("");
    return (await req).data;
  };

  const { data, isLoading } = useQuery(
    "Produtos",
    async () => await fetchProduct()
  );

  return { data, isLoading };
};
