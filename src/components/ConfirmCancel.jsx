import Button from "./Button";
import { CiWarning } from "react-icons/ci";

function ConfirmCancel({ onCloseModal, onCancel }) {
  return (
    <div className="flex flex-col items-center">
      <CiWarning className="mb-2 text-9xl text-yellow-600" />
      <h1 className="text-center">
        Are you sure you want to cancel your order
      </h1>
      <div className="mt-4 flex justify-end gap-3">
        <Button onClick={onCloseModal} variant="secondary">
          Back
        </Button>
        <Button
          onClick={() => {
            onCancel();
            onCloseModal();
          }}
          variant="warning"
        >
          cancel order
        </Button>
      </div>
    </div>
  );
}

export default ConfirmCancel;
