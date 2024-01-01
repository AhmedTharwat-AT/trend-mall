import { useState } from "react";

function OrdersFilter({ orders, setFilteredOrders }) {
  const [filter, setFilter] = useState("all");

  function handleFilter(value) {
    let filteredOrders = [];
    switch (value) {
      case "all":
        filteredOrders = [...orders];
        break;
      case "prepare":
        filteredOrders = orders.filter((order) => order.status == "preparing");
        break;
      case "delivery":
        filteredOrders = orders.filter(
          (order) => order.status == "on-delivery",
        );
        break;
      case "cancel":
        filteredOrders = orders.filter((order) => order.status == "cancelled");
        break;
      default:
        filteredOrders = [...orders];
    }
    setFilteredOrders(filteredOrders);
  }

  function handleClick(value) {
    setFilter(value);
    handleFilter(value);
  }
  return (
    <ul className=" flex w-fit divide-x-2 overflow-hidden whitespace-nowrap rounded-lg border border-gray-300 max-[320px]:flex-wrap max-[320px]:justify-center">
      <li
        data-value="all"
        onClick={(e) => {
          handleClick(e.target.dataset.value);
        }}
        className={`cursor-pointer bg-gray-50 px-3 py-2 text-sm capitalize text-gray-800 hover:bg-indigo-500 hover:text-gray-100 max-[320px]:w-full  ${
          filter == "all" && "bg-indigo-500 !text-gray-100"
        }`}
      >
        All
      </li>
      <li
        data-value="prepare"
        onClick={(e) => {
          handleClick(e.target.dataset.value);
        }}
        className={`cursor-pointer bg-gray-50 px-3 py-2 text-sm capitalize text-gray-800 hover:bg-indigo-500 hover:text-gray-100 max-[320px]:w-full  ${
          filter == "prepare" && "bg-indigo-500 !text-gray-100"
        }`}
      >
        preparing
      </li>
      <li
        data-value="delivery"
        onClick={(e) => {
          handleClick(e.target.dataset.value);
        }}
        className={`cursor-pointer bg-gray-50 px-3 py-2 text-sm capitalize text-gray-800 hover:bg-indigo-500 hover:text-gray-100 max-[320px]:w-full  ${
          filter == "delivery" && "bg-indigo-500 !text-gray-100"
        }`}
      >
        on delivery
      </li>
      <li
        data-value="cancel"
        onClick={(e) => {
          handleClick(e.target.dataset.value);
        }}
        className={` cursor-pointer bg-gray-50 px-3 py-2 text-sm capitalize text-gray-800 hover:bg-indigo-500 hover:text-gray-100 max-[320px]:w-full  ${
          filter == "cancel" && " bg-indigo-500 !text-gray-100 "
        }`}
      >
        cancelled
      </li>
    </ul>
  );
}

export default OrdersFilter;
