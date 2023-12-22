import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";

function Quantity({ setQuantity, quantity }) {
  return (
    <div className="flex items-center space-x-3 text-xl">
      <span
        onClick={() => setQuantity((q) => (q == 1 ? q : q - 1))}
        className="cursor-pointer text-4xl transition-all hover:text-gray-800"
      >
        <IoMdRemoveCircle />
      </span>
      <span className="select-none font-semibold">{quantity}</span>
      <span
        onClick={() => setQuantity((q) => q + 1)}
        className="cursor-pointer text-4xl transition-all hover:text-gray-800"
      >
        <IoMdAddCircle />
      </span>
    </div>
  );
}

export default Quantity;
