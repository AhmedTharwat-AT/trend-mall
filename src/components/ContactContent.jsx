import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { validateEmail } from "../utils/helpers";

import { toast } from "react-hot-toast";
import SmallSpinner from "./SmallSpinner";
import { useState } from "react";
import ContactLinks from "./ContactLinks";

function ContactContent() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: null,
      email: null,
      message: null,
    },
  });

  let serviceId, templateId, publicKey;
  if (import.meta.env.NETLIFY === "true" && process) {
    serviceId = process?.env.VITE_EMAILJS_SERVICE;
    templateId = process?.env.VITE_EMAILJS_TEMPLATE;
    publicKey = process?.env.VITE_EMAILJS_KEY;
  } else {
    serviceId = import.meta.env.VITE_EMAILJS_SERVICE;
    templateId = import.meta.env.VITE_EMAILJS_TEMPLATE;
    publicKey = import.meta.env.VITE_EMAILJS_KEY;
  }

  function onSubmit(data) {
    var templateParams = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    const toastId = toast.loading("Sending email...");
    setIsLoading(true);

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then(
        () => {
          toast.success("Email sent successfully !");
        },
        () => {
          toast.error("Error sending email !");
        },
      )
      .finally(() => {
        reset();
        toast.dismiss(toastId);
        setIsLoading(false);
      });
  }
  return (
    <section className="relative bg-white text-gray-600">
      <iframe
        width="100%"
        height="100%"
        className="inset-0 h-[450px] opacity-70"
        title="map"
        src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        style={{ filter: "grayscale(90%) " }}
      ></iframe>
      <div className="container mx-auto flex flex-wrap px-7 py-24  lg:flex-nowrap">
        <div className="mb-12 flex flex-col md:mb-0 md:w-1/2 md:pr-6">
          <div>
            <div className="mb-2 flex items-center justify-start gap-3">
              <span className="block h-[2px] w-14 bg-indigo-500"></span>
              <p className=" text-base font-medium capitalize tracking-widest text-indigo-600">
                information
              </p>
            </div>
            <h1 className=" text-5xl font-medium tracking-wide text-gray-600">
              Contact Me
            </h1>
            <p className="mt-4 text-sm leading-7 tracking-wide text-gray-500">
              Send me an email of what do you think about this project , and if
              you need a react.js developer for a project or for hiring.
            </p>
          </div>
          <div className="mb-8 mt-10 md:mb-0">
            <h2 className="mb-3 text-3xl font-medium tracking-wide text-gray-700">
              Egypt
            </h2>
            <div className="mt-4 text-base leading-6 tracking-wide text-gray-500">
              <p className="mb-1">Dakahlia , Mansoura - Postal 35931</p>
              <p>+201092977348</p>
            </div>
          </div>
          <div className=" md:mt-12">
            <ContactLinks className="mt-4 flex items-center justify-start gap-3 text-xl text-gray-500 sm:ml-auto " />
          </div>
        </div>
        <div className="flex w-full flex-col bg-white md:w-1/2 ">
          <div className="relative mb-3">
            <label htmlFor="name" className="text-sm leading-7 text-gray-600">
              Name
            </label>
            <input
              type="text"
              disabled={isLoading}
              id="name"
              className="w-full  border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out  focus:ring-1 focus:ring-indigo-500 disabled:bg-gray-300"
              {...register("name", { required: "This field is required" })}
            />
            <p className="p-1 text-sm tracking-wide text-red-600 sm:text-xs">
              {errors.name ? errors.name.message : ""}
            </p>
          </div>
          <div className="relative mb-3">
            <label htmlFor="email" className="text-sm leading-7 text-gray-600">
              Email
            </label>
            <input
              type="email"
              disabled={isLoading}
              id="email"
              className="w-full  border border-gray-300 bg-white px-3 py-1 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out  focus:ring-1 focus:ring-indigo-500 disabled:bg-gray-300"
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
          <div className="relative mb-3">
            <label
              htmlFor="message"
              className="text-sm leading-7 text-gray-600"
            >
              Message
            </label>
            <textarea
              disabled={isLoading}
              id="message"
              className="h-32 w-full resize-none border  border-gray-300 bg-white px-3 py-1 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:ring-1  focus:ring-indigo-500 disabled:bg-gray-300"
              {...register("message", { required: "This field is required" })}
            ></textarea>
            <p className="p-1 text-sm tracking-wide text-red-600 sm:text-xs">
              {errors.message ? errors.message.message : ""}
            </p>
          </div>
          <button
            disabled={isLoading}
            onClick={handleSubmit(onSubmit)}
            className="border-0 bg-indigo-500 px-6 py-2 text-base font-medium uppercase tracking-wider text-white hover:bg-indigo-600 focus:outline-none disabled:bg-gray-600"
          >
            {isLoading ? <SmallSpinner /> : "Send message"}
          </button>
        </div>
      </div>
    </section>
  );
}

export default ContactContent;
