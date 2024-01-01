import { useEffect, useState } from "react";
import { formatCurrency } from "../../utils/helpers";
import useOrders from "./useOrders";
import { toast } from "react-hot-toast";

import { CiDollar } from "react-icons/ci";
import Button from "../../components/Button";
import ConfirmCancel from "../../components/ConfirmCancel";
import ConfirmDelete from "../../components/ConfirmDelete";
import Modal from "../../components/Modal";
import OrderOverview from "./OrderOverview";
import OrderSummary from "./OrderSummary";
import OrderHeader from "./OrderHeader";
import OrderTimeLeft from "./OrderTimeLeft";

function Order({ order, num }) {
  const { updateOrder, deleteOrder } = useOrders(order);
  const [isCancable, setIsCancable] = useState(order.status != "cancelled");
  const secondsPassed = Math.floor(
    +new Date(Date.now() - +new Date(order.createdAt)) / 1000,
  );

  function handleCancel() {
    updateOrder("cancelled");
    toast.success("Order cancelled successfully!");
  }

  function handleShowCancel() {
    setIsCancable(false);
  }

  function handleDelete() {
    if (order.status != "cancelled" && order.status != "delivered") return;
    deleteOrder();
    toast.success("Order deleted successfully!");
  }

  useEffect(() => {
    if (
      !isCancable &&
      order.status != "on-delivery" &&
      order.status != "cancelled"
    ) {
      updateOrder("on-delivery");
      setIsCancable(false);
    }
  }, [order.status, isCancable, updateOrder]);

  return (
    <div className="overflow-hidden rounded-md border">
      <OrderHeader num={num} status={order.status} />

      <div className="space-y-2 bg-white px-3 py-5">
        <OrderOverview order={order} />
        <div className="mt-8 flex max-w-[90vw] flex-col  gap-2 py-6">
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

        {order.status !== "cancelled" && isCancable ? (
          <div className="flex items-center justify-end gap-3 ">
            <OrderTimeLeft
              secondsPassed={secondsPassed}
              handleShowCancel={handleShowCancel}
            />
            <Modal.Open modalName={`cancel-${num}`}>
              <Button variant="warning">cancel</Button>
            </Modal.Open>
          </div>
        ) : null}

        {order.status == "cancelled" || order.status == "delivered" ? (
          <div className="flex items-center justify-end gap-3 ">
            <Modal.Open modalName={`delete-${num}`}>
              <Button variant="danger">delete</Button>
            </Modal.Open>
          </div>
        ) : null}

        <Modal.Window modalName={`cancel-${num}`}>
          <ConfirmCancel onCancel={handleCancel} />
        </Modal.Window>
        <Modal.Window modalName={`delete-${num}`}>
          <ConfirmDelete onCancel={handleDelete} />
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
