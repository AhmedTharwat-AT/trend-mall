import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";

function NewPassForm() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const localData = JSON.parse(localStorage.getItem("temp")) ?? null;
  const emailQuery = searchParams.get("email");
  const authQuery = searchParams.get("auth");

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.findIndex((el) => el.email == emailQuery);
    if (
      !localData ||
      !emailQuery ||
      !authQuery ||
      emailQuery != localData.email ||
      authQuery != localData.auth ||
      !users ||
      user < 0
    ) {
      navigate("/home");
      localStorage.removeItem("temp");
      return;
    }
  }, [navigate, searchParams, localData, authQuery, emailQuery]);

  function onSuccess(data) {
    const users = JSON.parse(localStorage.getItem("users"));
    const userIndex = users.findIndex((el) => el.email == emailQuery);
    users[userIndex].password = data.password;

    toast.success("Password update successfully !");
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.removeItem("temp");
    navigate("/login");
    window.scrollTo(0, 0);
  }

  return (
    <div className="mx-auto flex grow flex-col items-center justify-center px-6 py-8  lg:py-0">
      <div className="w-full rounded-xl border bg-gray-100 shadow sm:max-w-md md:mt-0 xl:p-0">
        <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-800  md:text-2xl">
            Enter your new password
          </h1>
          <form onSubmit={handleSubmit(onSuccess)} className="space-y-4 ">
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-900 "
              >
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-gray-800 focus:outline-[var(--color-brand-500)] "
                {...register("password", {
                  required: "This field is required",
                  minLength: {
                    value: 5,
                    message: "Password must be between (5-8) chars ",
                  },
                  maxLength: {
                    value: 8,
                    message: "Password must be between (5-8) chars ",
                  },
                })}
              />
              <p className="p-1 text-sm tracking-wide text-red-600 sm:text-xs">
                {errors.password ? errors.password.message : ""}
              </p>
            </div>
            <div>
              <label
                htmlFor="confirm"
                className="mb-2 block text-sm font-medium text-gray-900 "
              >
                Confirm password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-gray-800 focus:outline-[var(--color-brand-500)] "
                {...register("confirm", {
                  required: "This field is required",
                  validate: (value, formValues) =>
                    value === formValues.password || "Passwords doesnt match !",
                })}
              />
              <p className="p-1 text-sm tracking-wide text-red-600 sm:text-xs">
                {errors.confirm ? errors.confirm.message : ""}
              </p>
            </div>

            <button
              type="submit"
              className=" w-full rounded-lg bg-[var(--color-brand-500)] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[var(--color-brand-600)] focus:outline-none focus:ring-4"
            >
              Reset
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewPassForm;
