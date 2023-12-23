import PageHeading from "../components/PageHeading";
import CartTable from "../features/cart/CartTable";

function Cart() {
  return (
    <>
      <PageHeading path={["home"]} current="Shopping Cart" />
      <section>
        <div className="container px-7 py-16">
          <CartTable />
        </div>
      </section>
    </>
  );
}

export default Cart;
