import ProductDetails from "../features/products/ProductDetails";
import PageHeading from "../components/PageHeading";
import Newsletter from "../components/Newsletter";
import SimpleSlider from "../components/SimpleSlider";

function ProductPage() {
  return (
    <>
      <PageHeading path={["home", "shop"]} current="product details" />
      <section className="bg-white pt-2">
        <ProductDetails />
      </section>
      <section className=" border bg-gray-50 pb-24 pt-7">
        <div className="container mb-20 sm:mb-0">
          <h1 className="my-7 text-left text-3xl font-semibold uppercase text-gray-600">
            you might also like
          </h1>
        </div>
        <SimpleSlider />
      </section>
      <Newsletter />
    </>
  );
}

export default ProductPage;
