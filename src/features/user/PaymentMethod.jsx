import EmptyList from "../../components/EmptyList";

function PaymentMethod() {
  return (
    <div className="h-full w-full min-w-[300px] text-gray-700">
      <EmptyList message="no available payment methods" />
    </div>
  );
}

export default PaymentMethod;
