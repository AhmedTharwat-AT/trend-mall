import { formatCurrency } from "../../utils/helpers";

function OrderSummary({ items, padding }) {
  const size = padding && "px-2";
  return (
    <>
      <div className="flex  justify-between text-base font-medium capitalize tracking-wide">
        <h3>product</h3>
        <h3>total</h3>
      </div>
      {items.map((item, i) => (
        <div
          key={item.id}
          className={`flex justify-between text-sm ${size}  text-gray-700`}
        >
          <h3 className="max-w-[50%]  truncate capitalize">
            <span className="font-medium">{`${i + 1}`.padStart(2, 0)}.</span>
            {item.title}
          </h3>
          <p className="font-medium">
            {formatCurrency(item.price * item.quantity)}
          </p>
        </div>
      ))}
    </>
  );
}

export default OrderSummary;
