import PageHeading from "../components/PageHeading";
import CheckoutOrder from "../features/order/CheckoutOrder";
import CheckoutUserInfo from "../features/order/CheckoutUserInfo";

function Checkout() {
  return (
    <>
      <PageHeading path={["home", "shop"]} current="Checkout" />
      <section className="my-8">
        <div className="container flex h-full gap-5 px-4 py-16 sm:px-7">
          <CheckoutUserInfo />
          <CheckoutOrder />
        </div>
      </section>
    </>
  );
}

export default Checkout;
