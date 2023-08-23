import { FC } from "react";
import Link from "next/link";

async function getData() {
  const res = await fetch(
    "https://umbrellas-bac.onrender.com/api/products?populate=*"
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Catalog: FC = async () => {
  const { data } = await getData();

  return (
    <div>
      <h1>Catalog</h1>
      {data.length > 0 && (
        <ul>
          {data.map((product) => {
            return (
              <li key={product.id}>
                <Link href={`/catalog/${product.id}`}>
                  {product.attributes.name}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Catalog;
