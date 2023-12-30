import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { CiCircleCheck } from "react-icons/ci";
import SmallSpinner from "../components/SmallSpinner";

function ResetForm() {
  const [msgSent, setMsgSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSuccess(data) {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((el) => el.email == data.email);
    if (!user) {
      toast.error("Email was not found ! ");
      return;
    }

    let apiKey;
    if (import.meta.env.NETLIFY === "true") {
      apiKey = process.env.VITE_BREVO_KEY;
    } else {
      apiKey = import.meta.env.VITE_BREVO_KEY;
    }

    setIsLoading(true);

    const random = crypto.randomUUID();

    const userInfo = {
      email: data.email,
      auth: random,
    };

    const url = window.location.origin;

    const options = {
      sender: {
        name: "TREND MALL",
        email: "ahmedsarwat3000@gmail.com",
      },
      to: [
        {
          email: data.email,
        },
      ],
      subject: "reset password",
      htmlContent: `<html><head></head><body><h4>Hello,${data.email}</h4>Click this link to reset your password</p><a target="_blank" href="${url}/new-password?email=${data.email}&auth=${random}">click here</a></body></html>`,
    };

    fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": apiKey,
        "content-type": "application/json",
      },
      body: JSON.stringify(options),
    })
      .then((res) => {
        if (res.ok) {
          localStorage.setItem("temp", JSON.stringify(userInfo));
          setMsgSent(true);
        } else {
          toast.error("Error happened sending email ! ");
          localStorage.removeItem("temp");
          navigate("/home");
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  if (msgSent)
    return (
      <div className="mx-auto flex grow flex-col items-center justify-center px-6   lg:py-0">
        <div className="w-full rounded-xl border bg-gray-100 pb-12 pt-8 shadow sm:max-w-md md:mt-0">
          <CiCircleCheck className="block w-full animate-slideBottom text-center text-9xl text-green-700" />
          <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-800  md:text-2xl">
            Email sent successfully!
          </h1>
          <p className="text-center text-xl  leading-tight tracking-tight text-gray-600  md:text-2xl">
            check your email
          </p>
        </div>
      </div>
    );

  return (
    <div className="mx-auto flex grow flex-col items-center justify-center px-6 py-8  lg:py-0">
      <div className="w-full rounded-xl border bg-gray-100 shadow sm:max-w-md md:mt-0 xl:p-0">
        <div className="space-y-4 p-6 sm:p-8 md:space-y-6">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-800  md:text-2xl">
            Reset your password
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

            <button
              disabled={isLoading}
              type="submit"
              className="w-full rounded-lg bg-[var(--color-brand-500)] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[var(--color-brand-600)] focus:outline-none focus:ring-4 disabled:bg-gray-600"
            >
              {isLoading ? <SmallSpinner /> : "Reset"}
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

export default ResetForm;
