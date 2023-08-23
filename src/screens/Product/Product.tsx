import { FC } from "react";
interface IParam {
  slug: string;
}

async function getData(slug: string) {
  const res = await fetch(
    `https://umbrellas-bac.onrender.com/api/products/${slug}?populate=*`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Product: FC<IParam> = async ({ slug }) => {
  const { data } = await getData(slug);
  const { attributes } = data;

  return (
    <>
      <div>Product: {slug}</div>
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
