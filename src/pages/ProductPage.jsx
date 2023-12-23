import ProductDetails from "../features/products/ProductDetails";
import PageHeading from "../components/PageHeading";
import OverviewProducts from "../features/products/OverviewProducts";
import Newsletter from "../components/Newsletter";

function ProductPage() {
  return (
    <>
      <PageHeading path={["home", "shop"]} current="product details" />
      <section className="mt-8">
        <ProductDetails />
      </section>
      <section className="mt-5 border bg-gray-50 py-10">
        <div className="container">
          <h1 className="my-7 text-center text-3xl font-semibold uppercase text-gray-600 lg:text-left">
            you might also like
          </h1>
        </div>
        <OverviewProducts limit={4} />
      </section>
      <Newsletter />
    </>
  );
}

export default ProductPage;
