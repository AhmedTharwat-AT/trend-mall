import { useParams } from "react-router-dom";

function ProductDetails() {
  const params = useParams();
  console.log(params.productID);
  return <div>details</div>;
}

export default ProductDetails;
