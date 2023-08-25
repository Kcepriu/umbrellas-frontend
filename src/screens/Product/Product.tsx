import { FC } from "react";
import { fetchOneProduct } from "@/services/fetchProduct";
interface IParam {
  slug: string;
}

const Product: FC<IParam> = async ({ slug }) => {
  const { data } = await fetchOneProduct(slug);
  // const { id, attributes } = data[0];
  const { id, attributes } = data;

  return (
    <>
      <div>Product: {slug}</div>
      <p>id {id}</p>
      <p>name {attributes.name}</p>
      <p>description {attributes.description}</p>
      <p>price {attributes.price}</p>
      <p>quantity {attributes.quantity}</p>
      <p>code {attributes.code}</p>
      <p>active {attributes.active}</p>
      <p>slug {attributes.slug}</p>
      <p>uuid {attributes.uuid}</p>
    </>
  );
};

export default Product;
