import { useForm } from "react-hook-form";
import PageHeading from "../components/PageHeading";
import CheckoutOrder from "../features/order/CheckoutOrder";
import CheckoutUserInfo from "../features/order/CheckoutUserInfo";
import { useDispatch, useSelector } from "react-redux";
import { checkout } from "../features/user/userSlice";
import { clearCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function Checkout() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();

  function onSuccess(data) {
    const order = {
      city: data.city,
      address: data.address,
      phone: data.phone,
      notes: data.notes,
      cart,
    };
    dispatch(checkout(order));
    dispatch(clearCart());
    const userID = localStorage.getItem("user");
    const users = JSON.parse(localStorage.getItem("users"));
    const userIndex = users.findIndex((el) => el.id == userID);
    users[userIndex].orders.push(order);
    localStorage.setItem("users", JSON.stringify(users));
    navigate("/home");
    toast.success("Order checked out successfully !");
  }

  return (
    <>
      <PageHeading path={["home", "shop"]} current="Checkout" />
      <section className="md:my-8">
        <div className="container flex flex-wrap  gap-8 px-4 py-16 sm:px-7 md:flex-nowrap md:gap-5">
          <CheckoutUserInfo register={register} errors={errors} />
          <CheckoutOrder handleSubmit={handleSubmit} onSuccess={onSuccess} />
        </div>
      </section>
    </>
  );
}

export default Checkout;
