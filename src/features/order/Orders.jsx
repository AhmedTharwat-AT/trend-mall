import { useSelector } from "react-redux";

import Order from "./Order";
import Modal from "../../components/Modal";
import EmptyList from "../../components/EmptyList";
import OrdersFilter from "./OrdersFilter";
import { useSearchParams } from "react-router-dom";

function Orders() {
  const orders = useSelector((state) => state.user.orders);
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter") || "all";
  let filteredOrders = [...orders];

  switch (filter) {
    case "all":
      filteredOrders = [...orders];
      break;
    case "prepare":
      filteredOrders = orders.filter((order) => order.status == "preparing");
      break;
    case "delivery":
      filteredOrders = orders.filter((order) => order.status == "on-delivery");
      break;
    case "cancel":
      filteredOrders = orders.filter((order) => order.status == "cancelled");
      break;
    default:
      filteredOrders = [...orders];
  }

  if (orders.length == 0)
    return <EmptyList message="there are no orders to display" />;

  return (
    <div className="w-full space-y-6">
      <div className="flex w-full justify-center sm:justify-end">
        <OrdersFilter />
      </div>
      {filteredOrders.length <= 0 ? (
        <p className="flex items-center  gap-1 text-base tracking-wide text-gray-700 sm:text-lg">
          <span className="text-sm">🔴</span> There are no orders with this
          state
        </p>
      ) : (
        <Modal>
          {filteredOrders.reverse().map((order, i, arr) => (
            <Order order={order} num={arr.length - i} key={order.orderId} />
          ))}
        </Modal>
      )}
    </div>
  );
}

export default Orders;
