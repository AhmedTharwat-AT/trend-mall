import PageHeading from "../components/PageHeading";
import ShopProducts from "../features/products/ShopProducts";

function Shop() {
  return (
    <>
      <PageHeading head="home" sup="shop" />
      <ShopProducts />
    </>
  );
}

export default Shop;
