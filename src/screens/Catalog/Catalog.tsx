import { FC } from "react";
import Link from "next/link";
import { fetchProducts } from "@/services/fetchProduct";

const Catalog: FC = async () => {
  const { data } = await fetchProducts();

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
