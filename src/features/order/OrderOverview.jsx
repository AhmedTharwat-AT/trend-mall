function OrderOverview({ order }) {
  return (
    <div className="w-full space-y-2 ">
      <div className=" flex gap-4 text-xs sm:text-sm">
        <h2 className="flex min-w-[60px] whitespace-nowrap capitalize  text-gray-900">
          Order id <span className="ml-auto">:</span>
        </h2>
        <p className="max-w-[250px] overflow-hidden text-ellipsis text-gray-600 sm:max-w-[500px]">
          {order.orderId}
        </p>
      </div>
      <div className=" flex gap-4 text-xs sm:text-sm">
        <h2 className="flex min-w-[60px] whitespace-nowrap capitalize  text-gray-900">
          address <span className="ml-auto">:</span>
        </h2>
        <p className="max-w-[250px] overflow-hidden text-ellipsis text-gray-600 sm:max-w-[500px]">
          {order.address}
        </p>
      </div>
      <div className=" flex gap-4 text-xs sm:text-sm">
        <h2 className="flex min-w-[60px] whitespace-nowrap capitalize  text-gray-900">
          phone <span className="ml-auto">:</span>
        </h2>
        <p className="max-w-[250px] overflow-hidden text-ellipsis text-gray-600 sm:max-w-[500px]">
          {order.phone}
        </p>
      </div>
      {order.notes.length > 0 && (
        <div className="flex  gap-4 overflow-hidden text-xs sm:text-sm">
          <h2 className="flex min-w-[60px]  capitalize  text-gray-900">
            notes <span className="ml-auto">:</span>
          </h2>
          <p className="max-w-[250px] overflow-hidden text-ellipsis text-gray-600 sm:max-w-[500px] ">
            {order.notes}
          </p>
        </div>
      )}
    </div>
  );
}

export default OrderOverview;
