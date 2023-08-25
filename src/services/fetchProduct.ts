// process.env.DB_HOST;
import type { IProduct } from "@/types/typesProduct";
import { URL_BAC } from "@/constants/connect.constants";

interface IResponse {
  data: IProduct[];
}

// TODO Rewrite this module in a class
export const fetchProducts = async (): Promise<IResponse> => {
  console.log("URL_BAC", URL_BAC);
  const res = await fetch(`${URL_BAC}/api/products?populate=*`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const fetchOneProduct = async (slug: string) => {
  const res = await fetch(`${URL_BAC}/api/products/${slug}?populate=*`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
