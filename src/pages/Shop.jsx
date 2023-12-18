import RouteHeading from "../components/RouteHeading";
import ShopProducts from "../features/products/ShopProducts";

function Shop() {
  return (
    <>
      <RouteHeading head="home" sup="shop" />
      <ShopProducts />
    </>
  );
}

export default Shop;
