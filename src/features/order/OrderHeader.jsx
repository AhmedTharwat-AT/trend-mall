function OrderHeader({ num, status }) {
  const statusList = {
    preparing: "bg-[var(--color-brand-500)] text-white",
    "on-delivery":
      "bg-[var(--color-indigo-100)] font-medium text-[var(--color-indigo-700)]",
    cancelled:
      "bg-[var(--color-red-100)] font-medium text-[var(--color-red-700)]",
    delivered: "bg-[var(--color-green-100)] text-[var(--colors-green-700)]",
  };

  return (
    <div
      className={` ${statusList[status]} flex items-center justify-between p-3 uppercase tracking-wide `}
    >
      <h1 className="text-sm sm:text-base">
        <span>{(num + "").padStart(2, "0") + "."}</span> order details
      </h1>
      <p className=" p-2 text-end text-xs sm:text-sm">{status}</p>
    </div>
  );
}

export default OrderHeader;
