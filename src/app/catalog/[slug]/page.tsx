import { FC } from "react";
import Product from "@/screens/Product/Product";

interface IParam {
  params: { slug: string };
}

const PageProduct: FC<IParam> = ({ params }) => {
  const { slug } = params;

  return <Product slug={slug} />;
};

export default PageProduct;
