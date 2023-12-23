import PageHeading from "../components/PageHeading";
import CartTable from "../features/cart/CartTable";

function Cart() {
  return (
    <>
      <PageHeading path={["home", "shop"]} current="Shopping Cart" />
      <section>
        <div className="container px-4 py-16 sm:px-7">
          <CartTable />
        </div>
      </section>
    </>
  );
}

export default Cart;
