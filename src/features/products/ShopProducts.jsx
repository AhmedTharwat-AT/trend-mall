import { useQuery } from "react-query";
import { getAllProducts } from "../../services/apiProducts";
import Product from "./Product";

function ShopProducts() {
  const { data: products, isLoading } = useQuery(
    ["allProducts"],
    getAllProducts,
  );

  if (isLoading) return null;

  console.log(products);

  return (
    <section>
      <div className="container mx-auto">
        {products.map((pro) => (
          <Product product={pro} key={pro.id} />
        ))}
      </div>
    </section>
  );
}

export default ShopProducts;
