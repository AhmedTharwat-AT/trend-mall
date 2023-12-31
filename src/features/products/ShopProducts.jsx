import ProductsCategories from "./ProductsCategories";
import ShopProductsList from "./ShopProductsList";

function ShopProducts() {
  return (
    <section className="bg-white">
      <div className="container mx-auto flex flex-wrap py-20">
        <ProductsCategories />
        <ShopProductsList />
      </div>
    </section>
  );
}

export default ShopProducts;
