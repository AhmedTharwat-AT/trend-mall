import { useDispatch } from "react-redux";
import { updateOrders } from "../user/userSlice";

const getLocalUser = (order) => {
  const userID = localStorage.getItem("user");
  const users = JSON.parse(localStorage.getItem("users"));
  const userIndex = users.findIndex((el) => el.id == userID);
  const orderIndex = users[userIndex].orders.findIndex(
    (el) => el.orderId == order.orderId,
  );
  return { users, userIndex, orderIndex };
};

function useOrders(order) {
  const dispatch = useDispatch();

  function updateOrder(state) {
    const { users, userIndex, orderIndex } = getLocalUser(order);
    users.at(userIndex).orders.at(orderIndex).status = state;
    localStorage.setItem("users", JSON.stringify(users));
    dispatch(updateOrders(users[userIndex].orders));
  }

  function deleteOrder() {
    const { users, userIndex, orderIndex } = getLocalUser(order);
    users.at(userIndex).orders.splice(orderIndex, 1);
    const orders = users[userIndex].orders;
    localStorage.setItem("users", JSON.stringify(users));
    dispatch(updateOrders(orders));
  }

  return { updateOrder, deleteOrder };
}

export default useOrders;
