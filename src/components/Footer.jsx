import { useRef } from "react";
import { FaGithub, FaLinkedin, FaPhone } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Footer() {
  const ref = useRef();
  function handleMessage() {
    if (!ref.current.value) return;
    window.open(
      `https://mail.google.com/mail/?view=cm&to=ahmedsarwat3000@gmail.com&from=${ref.current.value}","_blank`,
    );
  }
  return (
    <footer className="body-font bg-gray-950 text-gray-100 ">
      <div className="container  mx-auto px-5 py-24">
        <div className="order-first flex flex-wrap gap-y-4 text-left">
          <div className="group mb-12 w-full px-4 sm:w-1/3 md:w-1/2 lg:w-[22%]">
            <h2 className="title-font mb-3 text-2xl font-semibold tracking-widest text-gray-100">
              TREND <span className="font-medium">MALL</span>
            </h2>
            <p className="mb-3 text-sm tracking-wider">
              Shop the Best Selection of Clothing and Accessories at Trend Mall
            </p>
            <NavLink
              to="/shop"
              className="text-sm tracking-wider text-gray-300 transition-all hover:opacity-80 "
            >
              SHOP NOW
            </NavLink>
            <div className="h-[2px] w-20 bg-white transition-all group-hover:w-6 group-hover:bg-[var(--color-brand-500)]"></div>
          </div>
          <div className="w-full px-4 sm:w-1/3 sm:pl-10 md:w-1/2 lg:w-[20%]">
            <h2 className="title-font mb-3 text-sm font-medium tracking-widest text-gray-100">
              NAVIGATE
            </h2>
            <nav className="mb-10 list-none space-y-1 capitalize">
              <li>
                <NavLink
                  to="/home"
                  className="cursor-pointer text-sm  text-gray-300 hover:text-gray-400"
                >
                  home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className="cursor-pointer text-sm  text-gray-300 hover:text-gray-400"
                >
                  shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="cursor-pointer text-sm  text-gray-300 hover:text-gray-400"
                >
                  about
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="cursor-pointer text-sm  text-gray-300 hover:text-gray-400"
                >
                  contact us
                </NavLink>
              </li>
            </nav>
          </div>
          <div className="w-full px-4 sm:w-1/3 md:w-1/2 lg:w-[24%]">
            <h2 className="title-font mb-3 text-sm font-medium uppercase tracking-widest text-gray-100">
              get in touch
            </h2>
            <div className="mb-10 list-none">
              <p className="text-sm text-gray-300 ">
                you can reach for me with any of the following methods 🤙{" "}
              </p>
              <div className="mt-4 flex items-center justify-start gap-3 text-xl sm:ml-auto ">
                <a
                  className="hover:text-[var(--color-brand-500)]"
                  href="https://www.linkedin.com/in/ahmed-tharwat-at/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  className="hover:text-[var(--color-brand-500)]"
                  href="https://github.com/AhmedTharwat-AT/AhmedTharwat-AT"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
                <span className="flex items-center gap-2 text-base hover:text-[var(--color-brand-500)]">
                  <FaPhone /> <span className="text-sm">+201092977348</span>
                </span>
              </div>
            </div>
          </div>
          <div className="w-full px-4 sm:w-2/3 md:w-1/2 lg:w-[34%] ">
            <h2 className="title-font mb-3 text-sm font-medium uppercase tracking-widest text-gray-100">
              SEND ME EMAIL
            </h2>
            <p className="text-sm text-gray-300">
              send me a message through gmail 💌
            </p>
            <div className="flex flex-1 flex-nowrap items-end justify-start gap-4 md:flex-nowrap">
              <div className="relative mr-2 w-full sm:mr-4 lg:mr-0 xl:mr-4">
                <input
                  type="email"
                  id="footer-field"
                  ref={ref}
                  name="footer-field"
                  placeholder="Your email"
                  className="peer mt-5 w-full border-b-2 bg-transparent px-1  py-1 text-base leading-8  text-gray-50/70 placeholder-transparent outline-none transition-colors duration-200 ease-in-out "
                />
                <label
                  htmlFor="footer-field"
                  className="absolute left-0 top-0 ml-1 text-sm leading-7  text-gray-50/70 transition-all duration-300 peer-placeholder-shown:top-6 peer-focus:top-0"
                >
                  Your email
                </label>
              </div>
              <button
                onClick={handleMessage}
                className="flex flex-shrink-0 rounded border-0 bg-[var(--color-brand-500)] px-6 py-2 tracking-wider text-white hover:bg-[var(--color-brand-600)]  lg:mt-2 xl:mt-0"
              >
                SEND
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 px-5 py-6 text-center">
        <p className="mt-4 text-sm text-gray-100 sm:ml-6 sm:mt-0">
          Copyright © 2023 &mdash; 2024 All rights reserved &mdash; Ahmed
          Tharwat
        </p>
      </div>
    </footer>
  );
}

export default Footer;
