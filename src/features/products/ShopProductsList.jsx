import Product from "./Product";
import PaginationInfo from "../../components/PaginationInfo";
import Pagination from "../../components/Pagination";
import useFilteredProducts from "./useFilteredProducts";
import Spinner from "../../components/Spinner";
import SortFilter from "../../components/SortFilter";

function ShopProductsList() {
  const { products, isLoading } = useFilteredProducts();
  console.log("shop");

  if (!isLoading && !products.length)
    return (
      <div className="flex w-full flex-col px-5 lg:min-h-[848px]  lg:w-3/4">
        <p className="col-span-3">There are no products</p>
      </div>
    );

  return (
    <div className="flex w-full flex-col  px-5 lg:min-h-[848px]  lg:w-3/4">
      <div className="flex flex-wrap items-center justify-between gap-5 pb-10 ">
        <PaginationInfo />
        <SortFilter />
      </div>

      {isLoading ? (
        <Spinner />
      ) : (
        <div className="relative grid grid-cols-1 gap-5  sm:grid-cols-2 lg:grid-cols-3   lg:gap-x-20 ">
          {products.map((pro) => (
            <Product
              responsive="w-full xl:w-60 lg:w-52 md:w-[330px] sm:w-60"
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
