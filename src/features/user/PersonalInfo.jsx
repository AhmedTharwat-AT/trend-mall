import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { validateEmail } from "../../utils/helpers";
import { loginUser } from "./userSlice";
import { toast } from "react-hot-toast";

function PersonalInfo() {
  const [editForm, setEditForm] = useState(false);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm({
    defaultValues: {
      firstname: user.firstName,
      lastname: user.lastName,
      email: user.email,
    },
  });

  function onSave(data) {
    if (data.confirm != user.password) {
      setError("confirm", {
        type: "custom",
        message: "Passwords dont match !",
      });
      return;
    }

    const userID = user.id;
    const users = JSON.parse(localStorage.getItem("users"));
    const userIndex = users.findIndex((el) => el.id == userID);
    users[userIndex].email = data.email;
    users[userIndex].firstName = data.firstname;
    users[userIndex].lastName = data.lastname;
    localStorage.setItem("users", JSON.stringify(users));
    dispatch(loginUser(users[userIndex]));
    setEditForm(false);
    toast.success("Updated successfully !");
  }

  return (
    <div className="flex flex-col gap-8">
      <form className="flex flex-col space-y-2">
        <div className="flex gap-8">
          <div className="w-1/2">
            <p className="mb-1 text-sm tracking-wide text-gray-900">
              Firstname
            </p>
            <input
              disabled={!editForm}
              className="w-full rounded border border-gray-300 bg-white p-2 text-sm focus:outline-[var(--color-brand-500)] disabled:bg-gray-300 disabled:opacity-70"
              {...register("firstname", {
                required: "This field is required",
                maxLength: {
                  value: 8,
                  message: "Name must not exceed 8 chars ",
                },
              })}
            />
            <p className="p-1 text-sm tracking-wide text-red-600 sm:text-xs">
              {errors.firstname ? errors.firstname.message : ""}
            </p>
          </div>
          <div className="w-1/2">
            <p className="mb-1 text-sm tracking-wide text-gray-900">Lastname</p>
            <input
              disabled={!editForm}
              className="w-full rounded border border-gray-300 bg-white p-2 text-sm focus:outline-[var(--color-brand-500)] disabled:bg-gray-300 disabled:opacity-70"
              {...register("lastname", {
                required: "This field is required",
                maxLength: {
                  value: 8,
                  message: "Name must not exceed 8 chars ",
                },
              })}
            />
            <p className="p-1 text-sm tracking-wide text-red-600 sm:text-xs">
              {errors.lastname ? errors.lastname.message : ""}
            </p>
          </div>
        </div>
        <div>
          <p className="mb-1 text-sm tracking-wide text-gray-900">Email</p>
          <input
            disabled={!editForm}
            className="w-full rounded border border-gray-300 bg-white p-2 text-sm focus:outline-[var(--color-brand-500)] disabled:bg-gray-300 disabled:opacity-70"
            {...register("email", {
              required: "This field is required",
              validate: (value) =>
                validateEmail(value) || "Enter correct email field",
            })}
          />
          <p className="p-1 text-sm tracking-wide text-red-600 sm:text-xs">
            {errors.email ? errors.email.message : ""}
          </p>
        </div>
        <div>
          <p className="mb-1 text-sm tracking-wide text-gray-900">Password</p>
          <input
            disabled
            type="password"
            defaultValue={user.password}
            className="w-full rounded border border-gray-300 bg-white p-2 text-sm tracking-widest focus:outline-[var(--color-brand-500)] disabled:bg-gray-300 disabled:opacity-70"
          />
        </div>
        {editForm && (
          <>
            <div>
              <p className="mb-1 text-sm tracking-wide text-gray-900">
                Confirm password
              </p>
              <input
                disabled={!editForm}
                type="password"
                className="w-full border border-gray-300 bg-white p-2 text-sm tracking-widest focus:outline-[var(--color-brand-500)] disabled:opacity-70"
                {...register("confirm", {
                  required: "This field is required",
                })}
              />
              <p className="p-1 text-sm tracking-wide text-red-600 sm:text-xs">
                {errors.confirm ? errors.confirm.message : ""}
              </p>
            </div>
            <div className="ml-auto flex gap-5 pt-4">
              <button
                onClick={() => setEditForm(false)}
                className="ml-auto rounded border border-gray-600 bg-gray-100 px-4 py-2 font-medium tracking-wider text-gray-600 hover:bg-gray-800 hover:text-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit(onSave)}
                className="ml-auto rounded bg-[var(--color-brand-500)] px-4 py-2 font-medium tracking-wider text-white hover:bg-[var(--color-brand-600)]"
              >
                Save
              </button>
            </div>
          </>
        )}
      </form>
      {!editForm && (
        <button
          onClick={() => setEditForm(true)}
          className="ml-auto rounded bg-[var(--color-brand-500)] px-4 py-2 font-medium tracking-wider text-white hover:bg-[var(--color-brand-600)]"
        >
          Edit
        </button>
      )}
    </div>
  );
}

export default PersonalInfo;
