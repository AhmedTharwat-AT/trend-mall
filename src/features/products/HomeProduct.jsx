import { formatCurrency } from "../../utils/helpers";

function HomeProduct({ product }) {
  return (
    <div className="">
      <img
        className="h-[30rem] w-full object-cover"
        src={product.images.at(0)}
      />
      <div className="p-5">
        <h2 className="mb-3 text-3xl font-semibold capitalize text-gray-700">
          {product.title}
        </h2>
        <p className="text-2xl font-semibold text-red-700">
          {formatCurrency(product.price)}
        </p>
      </div>
    </div>
  );
}

export default HomeProduct;
