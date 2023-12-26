import Button from "./Button";

function ConfirmCancel({ onCloseModal, onCancel }) {
  return (
    <div>
      {" "}
      <h1 className="">Are you sure you want to cancel your order</h1>
      <div className="mt-4 flex justify-end gap-3">
        <Button onClick={onCloseModal} variant="secondary">
          Back
        </Button>
        <Button
          onClick={() => {
            console.log("cl");
            onCancel();
            onCloseModal();
          }}
          variant="danger"
        >
          cancel order
        </Button>
      </div>
    </div>
  );
}

export default ConfirmCancel;
