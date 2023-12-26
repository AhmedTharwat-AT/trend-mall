import Button from "../../components/Button";
import ConfirmCancel from "../../components/ConfirmCancel";
import Modal from "../../components/Modal";
import { formatCurrency } from "../../utils/helpers";
import { CiDollar } from "react-icons/ci";
import OrderOverview from "./OrderOverview";
import OrderSummary from "./OrderSummary";
import { useLocalStorageState } from "../../hooks/useLocalStorageState";
import { useDispatch } from "react-redux";
import { updateOrders } from "../user/userSlice";
import OrderHeader from "./OrderHeader";
import { useCallback, useEffect } from "react";

function Order({ order, num }) {
  const [users, setUsers] = useLocalStorageState([], "users");
  const dispatch = useDispatch();

  const minutesPassed = Math.floor(
    +new Date(Date.now() - +new Date(order.createdAt)) / (1000 * 60),
  );

  const updateOrder = useCallback(
    (state) => {
      const userID = localStorage.getItem("user");
      const userIndex = users.findIndex((el) => el.id == userID);
      const orderIndex = users[userIndex].orders.findIndex(
        (el) => el.orderId == order.orderId,
      );
      users[userIndex].orders[orderIndex].status = state;
      setUsers(users);
      dispatch(updateOrders(users[userIndex].orders));
    },
    [dispatch, order.orderId, setUsers, users],
  );

  function handleCancel() {
    updateOrder("cancelled");
  }

  useEffect(() => {
    if (
      minutesPassed > 5 &&
      order.status != "on-delivery" &&
      order.status != "cancelled"
    ) {
      updateOrder("on-delivery");
    }
  }, [order.status, minutesPassed, updateOrder]);

  return (
    <div className="overflow-hidden rounded-md border">
      <OrderHeader num={num} status={order.status} />

      <div className="space-y-2 bg-white px-3 py-5">
        <OrderOverview order={order} />
        <div className="mt-8 flex flex-col gap-2  py-6">
          <OrderSummary items={order.cart.items} padding />
          <div>
            <div className="flex items-center justify-between bg-[var(--color-green-100)] p-2 pt-2  tracking-wide text-[var(--color-green-700)]">
              <div className="flex items-center gap-1">
                <CiDollar className="text-xl" />
                <h3>total price</h3>
              </div>
              <p className="font-medium ">
                {formatCurrency(order.cart.totalPrice)}
              </p>
            </div>
          </div>
        </div>

        {order.status !== "cancelled" && minutesPassed < 5 ? (
          <div className="flex items-center justify-end gap-3 ">
            <div className="flex gap-1 text-xs sm:text-sm">
              <p className="whitespace-nowrap text-gray-700">
                minutes left to cancel :
              </p>{" "}
              <span className="font-medium">({5 - minutesPassed})</span>
            </div>
            <Modal.Open modalName={`cancel-${num}`}>
              <Button variant="danger">cancel</Button>
            </Modal.Open>
          </div>
        ) : null}

        <Modal.Window modalName={`cancel-${num}`}>
          <ConfirmCancel onCancel={handleCancel} />
        </Modal.Window>

        <div className="flex gap-2  text-xs sm:text-sm">
          <h2 className=" text-gray-600">created at </h2>
          <p className="text-gray-600">
            ({new Date(order.createdAt).toDateString()})
          </p>
        </div>
      </div>
    </div>
  );
}

export default Order;
