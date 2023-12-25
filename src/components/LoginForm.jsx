import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../features/user/userSlice";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSuccess(data) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((el) => el.email == data.email);
    if (!user) {
      toast.error("Incorrect email or password ");
      return;
    }
    dispatch(loginUser(user));
    localStorage.setItem("user", user.id);
    navigate("/home");
  }

  return (
    <div className="mx-auto flex grow flex-col items-center justify-center px-6 py-8  lg:py-0">
      <div className="w-full rounded-xl border bg-gray-100 shadow   sm:max-w-md md:mt-0 xl:p-0">
        <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-800  md:text-2xl">
            Sign in to your account
          </h1>
          <form onSubmit={handleSubmit(onSuccess)} className="space-y-4 ">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 "
              >
                Your email
              </label>
              <input
                type="email"
                className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-800 focus:outline-[var(--color-brand-500)] "
                placeholder="email@example.com"
                {...register("email", { required: "This field is required !" })}
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
                  required: "This field is required !",
                })}
              />
              <p className="p-1 text-sm tracking-wide text-red-600 sm:text-xs">
                {errors.password ? errors.password.message : ""}
              </p>
            </div>
            <div className="flex items-center justify-end">
              <a
                href="#"
                className="text-sm font-medium text-[var(--color-brand-500)] hover:underline"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className=" w-full rounded-lg bg-[var(--color-brand-500)] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[var(--color-brand-600)] focus:outline-none focus:ring-4"
            >
              Sign in
            </button>
            <p className="text-sm font-light text-gray-600 ">
              Don’t have an account yet?{" "}
              <Link
                to="/signup"
                className="font-medium hover:text-[var(--color-brand-500)] hover:underline"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
