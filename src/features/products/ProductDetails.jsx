import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/apiProducts";
import ProductImages from "../../components/ProductImages";
import Spinner from "../../components/Spinner";
import { formatCurrency } from "../../utils/helpers";
import StarRating from "../../components/StarRating";
import ProductAdd from "../cart/ProductAdd";

function ProductDetails() {
  const { productID } = useParams();
  const { data: product, isLoading } = useQuery(["product", productID], () =>
    getProduct(productID),
  );

  const {
    brand,
    category,
    description,
    discountPercentage,
    price,
    rating,
    stock,
    title,
  } = product || {};

  const discount = price * (discountPercentage / 100);
  const originalPrice = price + discount;

  if (isLoading)
    return (
      <div className="h-screen">
        <Spinner />
      </div>
    );

  return (
    <div className="overflow-hidden text-gray-600">
      <div className="container mx-auto px-5 py-12">
        <div className="mx-auto flex flex-wrap  ">
          <ProductImages product={product} />
          <div className="relative mt-6 w-full animate-slideBottom  divide-y-2 lg:mt-0 lg:w-1/2 lg:py-6 lg:pl-10">
            <div>
              <p className=" text-sm uppercase tracking-tight  text-gray-500">
                {"shop / " + category + " / " + brand}
              </p>

              <h1 className=" mb-1 text-3xl font-medium capitalize text-gray-900">
                {title}
              </h1>

              <div className="mb-4 flex items-center ">
                <StarRating rating={rating} size="sm" />
                <h1 className="ml-1">
                  <span className="mr-1 font-medium">&mdash; 45</span>Reviews
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-5 py-3 ">
              <span className=" text-3xl font-semibold text-gray-900">
                {formatCurrency(price)}
              </span>
              <span className="text-2xl line-through ">
                {formatCurrency(originalPrice)}
              </span>
            </div>

            <p className=" py-2 leading-relaxed">{description}</p>

            <div className="divide-y-2 py-0">
              <div className="flex  gap-2 py-2">
                <h1 className="font-semibold capitalize tracking-wide text-gray-500 ">
                  availability :
                </h1>
                <span className=" capitalize">
                  {stock > 0 ? "in stock" : "out of stock"}
                </span>
              </div>
              <div className="flex  gap-2 py-2">
                <h1 className="font-semibold capitalize tracking-wide text-gray-500 ">
                  Product Code :
                </h1>
                <span className="">{"#019" + productID}</span>
              </div>
              <div className="flex  gap-2 py-2">
                <h2 className="font-semibold  capitalize tracking-wide text-gray-500 ">
                  brand :
                </h2>
                <span className="">{brand}</span>
              </div>
            </div>

            <ProductAdd product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
