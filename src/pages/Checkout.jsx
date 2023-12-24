import PageHeading from "../components/PageHeading";
import CheckoutOrder from "../features/order/CheckoutOrder";
import CheckoutUserInfo from "../features/order/CheckoutUserInfo";

function Checkout() {
  <PageHeading path={["home"]} current="about us" />;
  return (
    <>
      <PageHeading path={["home", "shop"]} current="Checkout" />
      <section>
        <div className="container flex gap-2 px-4 py-16 sm:px-7">
          <CheckoutUserInfo />
          <CheckoutOrder />
        </div>
      </section>
    </>
  );
}

export default Checkout;
