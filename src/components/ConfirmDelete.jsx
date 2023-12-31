import Button from "./Button";
import { RiDeleteBin5Line } from "react-icons/ri";

function ConfirmDelete({ onCloseModal, onCancel }) {
  return (
    <div className="flex flex-col items-center">
      <RiDeleteBin5Line className="mb-2 text-7xl text-red-700 sm:text-8xl" />
      <h1 className="text-center leading-5">
        Are you sure you want to delete your order
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
          variant="danger"
        >
          delete order
        </Button>
      </div>
    </div>
  );
}

export default ConfirmDelete;
