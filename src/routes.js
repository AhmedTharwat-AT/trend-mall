import { lazy } from "react";

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Shop = lazy(() => import("./pages/Shop"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const Account = lazy(() => import("./pages/Account"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));

export { About, Contact, Shop, Login, Signup, Account, Cart, Checkout };
