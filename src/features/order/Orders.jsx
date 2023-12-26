import { useSelector } from "react-redux";
import Order from "./Order";
import Modal from "../../components/Modal";

function Orders() {
  const { orders } = useSelector((state) => state.user);

  if (orders.length == 0)
    return (
      <div>
        <h1>there are no orders</h1>
      </div>
    );

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
