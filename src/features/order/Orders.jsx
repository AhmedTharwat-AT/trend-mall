import { useSelector } from "react-redux";
import Order from "./Order";
import Modal from "../../components/Modal";
import EmptyList from "../../components/EmptyList";

function Orders() {
  const orders = useSelector((state) => state.user.orders);

  if (orders.length == 0)
    return <EmptyList message="there are no orders to display" />;

  return (
    <div className="w-full space-y-6">
      <Modal>
        {orders.map((order, i) => (
          <Order order={order} num={i + 1} key={order.orderId} />
        ))}
      </Modal>
    </div>
  );
}

export default Orders;
