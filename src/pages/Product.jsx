import ProductDetails from "../features/products/ProductDetails";
import PageHeading from "../components/PageHeading";

function Product() {
  return (
    <>
      <PageHeading head="home" sup="product details" />
      <section className="mt-8">
        <ProductDetails />
      </section>
    </>
  );
}

export default Product;
