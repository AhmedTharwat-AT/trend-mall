import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail } from "../utils/helpers";
import { toast } from "react-hot-toast";
import { useState } from "react";
import SmallSpinner from "./SmallSpinner";

function SignupForm() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  function onSuccess(data) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const alreadyExist = users.findIndex((el) => el.email == data.email);
    if (alreadyExist >= 0) {
      toast.error("Email already exists !");
      setError("email", { type: "custom", message: "Email already exists" });
      return;
    }
    const user = {
      id: crypto.randomUUID(),
      email: data.email,
      password: data.password,
      firstName: data.firstname,
      lastName: data.lastname,
      cart: {},
      orders: [],
      wishlist: [],
    };

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      toast.success("Account created successfully !");
      navigate("/login");
      window.scrollTo(0, 0);
    }, 1500);
  }

  return (
    <div className="mx-auto flex flex-col items-center justify-center rounded-lg  border border-gray-300 bg-gray-100  px-2 py-6 sm:h-full sm:border-none sm:px-6 sm:py-0 lg:py-0">
      <div className="w-full rounded-lg sm:max-w-md md:mt-0 xl:p-0">
        <div className="space-y-4 p-3 sm:p-8 ">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-800  md:text-2xl">
            Create new account
          </h1>
          <form onSubmit={handleSubmit(onSuccess)} className="space-y-2">
            <div className="flex gap-10 max-[350px]:flex-col max-[350px]:gap-2">
              <div className="flex flex-col">
                <label className="mb-2 block text-sm font-medium text-gray-900 ">
                  First name
                </label>
                <input
                  type="text"
                  disabled={isLoading}
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-gray-800 focus:outline-[var(--color-brand-500)] disabled:bg-gray-300 "
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
              <div className="flex flex-col">
                <label className="mb-2 block text-sm font-medium text-gray-900 ">
                  Last name
                </label>
                <input
                  type="text"
                  disabled={isLoading}
                  className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-gray-800 focus:outline-[var(--color-brand-500)] disabled:bg-gray-300 "
                  {...register("lastname", {
                    required: "This field is required",
                    maxLength: {
                      value: 8,
                      message: "Name less than 8 chars ",
                    },
                  })}
                />
                <p className="p-1 text-sm tracking-wide text-red-600 sm:text-xs">
                  {errors.lastname ? errors.lastname.message : ""}
                </p>
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 "
              >
                Your email
              </label>
              <input
                type="email"
                disabled={isLoading}
                className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-gray-800 focus:outline-[var(--color-brand-500)] disabled:bg-gray-300 "
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
                disabled={isLoading}
                type="password"
                placeholder="••••••••"
                className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-gray-800 focus:outline-[var(--color-brand-500)] disabled:bg-gray-300 "
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
                disabled={isLoading}
                type="password"
                placeholder="••••••••"
                className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2 text-gray-800 focus:outline-[var(--color-brand-500)] disabled:bg-gray-300 "
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
            <div className="flex flex-col   py-2">
              <div className="flex items-center ">
                <input
                  disabled={isLoading}
                  aria-describedby="terms"
                  type="checkbox"
                  className="focus:ring-3 h-4 w-4 rounded border border-gray-300 bg-gray-50 accent-[var(--color-brand-500)] hover:accent-[var(--color-brand-500)] disabled:bg-gray-300"
                  {...register("terms", {
                    required: "This field is required",
                  })}
                />
                <label className="ml-3 block text-sm font-light text-gray-500 ">
                  I accept the{" "}
                  <a className="cursor-pointer font-medium hover:underline">
                    Terms and Conditions
                  </a>
                </label>
              </div>

              <p className="pl-7 pt-2 text-sm tracking-wide text-red-600 sm:text-xs">
                {errors.terms ? errors.terms.message : ""}
              </p>
            </div>
            <button
              disabled={isLoading}
              type="submit"
              className=" w-full rounded-lg bg-[var(--color-brand-500)] px-5 py-2 text-center text-sm font-medium text-white hover:bg-[var(--color-brand-600)] focus:outline-none focus:ring-4 disabled:bg-gray-600"
            >
              {isLoading ? <SmallSpinner /> : "Create an account"}
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
