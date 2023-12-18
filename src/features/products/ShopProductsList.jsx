import Product from "./Product";
import PaginationInfo from "../../components/PaginationInfo";
import Pagination from "../../components/Pagination";
import useFilteredProducts from "./useFilteredProducts";
import Spinner from "../../components/Spinner";

function ShopProductsList() {
  const { products, isLoading } = useFilteredProducts();

  if (!isLoading && !products.length)
    return (
      <div className="flex w-full flex-col  px-5 lg:min-h-[848px]  lg:w-3/4">
        <p className="col-span-3">There are no products</p>
      </div>
    );

  return (
    <div className="flex w-full flex-col  px-5 lg:min-h-[848px]  lg:w-3/4">
      <PaginationInfo />

      {isLoading ? (
        <Spinner />
      ) : (
        <div className="relative grid grid-cols-1 gap-5 sm:grid-cols-2   lg:grid-cols-3 ">
          {products.map((pro) => (
            <Product
              responsive="w-full lg:w-56 md:w-[350px] sm:w-60"
              product={pro}
              key={pro.id}
            />
          ))}
        </div>
      )}

      <Pagination />
    </div>
  );
}

export default ShopProductsList;
