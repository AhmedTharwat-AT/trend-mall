import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { checkout } from "../features/user/userSlice";
import { deleteCart } from "../features/cart/cartSlice";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useEffect, useState } from "react";

import PageHeading from "../components/PageHeading";
import CheckoutOrder from "../features/order/CheckoutOrder";
import CheckoutUserInfo from "../features/order/CheckoutUserInfo";
import Button from "../components/Button";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

function Checkout() {
  const [isChecked, setIsChecked] = useState(false);
  const userID = localStorage.getItem("user");
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  //protected route
  useEffect(() => {
    if (!isChecked && cart.items.length <= 0) {
      navigate("/home");
    }
  }, [isChecked, navigate, cart.items.length]);

  function onSuccess(data) {
    const order = {
      orderId: crypto.randomUUID(),
      city: data.city,
      address: data.address,
      phone: data.phone,
      notes: data.notes,
      cart,
      status: "preparing",
      createdAt: new Date().toISOString(),
    };

    dispatch(checkout(order));
    dispatch(deleteCart());
    const users = JSON.parse(localStorage.getItem("users"));
    const userIndex = users.findIndex((el) => el.id == userID);
    users[userIndex].orders.push(order);
    localStorage.setItem("users", JSON.stringify(users));
    window.scrollTo(0, 0);
    toast.success("Order was checked out successfully !");
    setIsChecked(true);
  }

  return (
    <>
      <PageHeading path={["home", "shop"]} current="Checkout" />
      <section className="md:my-8">
        <div className="container flex flex-wrap  gap-8 px-4 py-16 sm:px-7 md:flex-nowrap md:gap-5">
          {isChecked ? (
            <div className="mx-auto flex w-fit items-center justify-center rounded-md border border-gray-200 bg-gray-100 px-8 py-14">
              <div className="flex flex-col items-center gap-2 text-center ">
                <IoIosCheckmarkCircleOutline className=" text-7xl text-green-700" />
                <h1 className="mb-4 text-xl text-gray-700 sm:text-2xl">
                  Your order checked out successfully !
                </h1>
                <Link
                  onClick={() => window.scrollTo(0, 0)}
                  to="/account/orders"
                >
                  <Button size="sm">track your order</Button>
                </Link>
              </div>
            </div>
          ) : (
            <>
              <CheckoutUserInfo register={register} errors={errors} />
              <CheckoutOrder
                isChecked={isChecked}
                handleSubmit={handleSubmit}
                onSuccess={onSuccess}
              />
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default Checkout;
