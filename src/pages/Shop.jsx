import Newsletter from "../components/Newsletter";
import PageHeading from "../components/PageHeading";
import ShopProducts from "../features/products/ShopProducts";

function Shop() {
  return (
    <>
      <PageHeading path={["home"]} current="shop" />
      <ShopProducts />
      <Newsletter />
    </>
  );
}

export default Shop;
