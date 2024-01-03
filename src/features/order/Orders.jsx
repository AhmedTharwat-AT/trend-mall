import { useSelector } from "react-redux";
import { useState } from "react";

import Order from "./Order";
import Modal from "../../components/Modal";
import EmptyList from "../../components/EmptyList";
import OrdersFilter from "./OrdersFilter";

function Orders() {
  const orders = useSelector((state) => state.user.orders);
  const [filteredOrders, setFilteredOrders] = useState([...orders]);

  if (orders.length == 0)
    return <EmptyList message="there are no orders to display 🚨" />;

  return (
    <div className="w-full space-y-6">
      <div className="flex w-full justify-center sm:justify-end">
        <OrdersFilter orders={orders} setFilteredOrders={setFilteredOrders} />
      </div>
      {filteredOrders.length <= 0 ? (
        <p className="flex items-center  gap-1 text-base tracking-wide text-gray-700 sm:text-lg">
          <span className="text-sm">🔴</span> There are no orders with this
          state
        </p>
      ) : (
        <Modal>
          {filteredOrders.map((order, i) => (
            <Order order={order} num={i + 1} key={order.orderId} />
          ))}
        </Modal>
      )}
    </div>
  );
}

export default Orders;
