import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { validateEmail } from "../utils/helpers";

function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSuccess(data) {
    console.log(data);
  }

  console.log(errors);

  return (
    <div className="mx-auto  flex flex-col items-center justify-center px-6 py-8 md:h-[calc(100vh-5rem)] lg:py-0">
      <div className="w-full rounded-lg bg-gray-200 shadow   sm:max-w-md md:mt-0 xl:p-0">
        <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-800  md:text-2xl">
            Create and account
          </h1>
          <form
            onSubmit={handleSubmit(onSuccess)}
            className="space-y-4 md:space-y-5"
          >
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 "
              >
                Your email
              </label>
              <input
                className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-800 focus:outline-[var(--color-brand-500)] "
                placeholder="email@example.com"
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
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-gray-900 "
              >
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-800 focus:outline-[var(--color-brand-500)] "
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
                className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-800 focus:outline-[var(--color-brand-500)] "
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
            <div className="flex items-center">
              <input
                aria-describedby="terms"
                type="checkbox"
                className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 accent-[var(--color-brand-500)] hover:accent-[var(--color-brand-500)] "
                {...register("terms", {
                  required: "This field is required",
                })}
              />
              <label className="ml-3 block text-sm font-light text-gray-500 ">
                I accept the{" "}
                <a className=" font-medium hover:underline" href="#">
                  Terms and Conditions
                </a>
              </label>
              <p className="pl-1 text-sm tracking-wide text-red-600 sm:text-xs">
                {errors.terms ? errors.terms.message : ""}
              </p>
            </div>
            <button
              type="submit"
              className=" w-full rounded-lg bg-[var(--color-brand-500)] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[var(--color-brand-600)] focus:outline-none focus:ring-4"
            >
              Create an account
            </button>
            <p className="text-sm font-light text-gray-600 ">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-medium hover:text-[var(--color-brand-500)] hover:underline"
              >
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupForm;
