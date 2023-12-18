import ProductsOptions from "./ProductsOptions";
import ShopProductsList from "./ShopProductsList";

function ShopProducts() {
  return (
    <section>
      <div className="container mx-auto flex flex-wrap py-20">
        <ProductsOptions />
        <ShopProductsList />
      </div>
    </section>
  );
}

export default ShopProducts;
