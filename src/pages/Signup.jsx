import SignupForm from "../components/SignupForm";

function Signup() {
  return (
    <section className="flex h-[calc(100vh-200px)] min-h-[700px] items-center justify-center  lg:px-16">
      <div className="flex h-[600px] animate-slideRight items-center overflow-hidden lg:max-w-[1170px]  ">
        <div className="h-full w-full  border-r-0 lg:w-1/2 lg:rounded-bl-3xl lg:rounded-tl-3xl lg:border">
          <SignupForm />
        </div>
        <div className="hidden h-full w-1/2 overflow-hidden grayscale lg:block lg:rounded-br-3xl lg:rounded-tr-3xl">
          <img
            className="h-full object-cover "
            src="./src/assets/carousel/img-1.jpg"
          />
          <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-2 px-6 text-7xl font-semibold tracking-tight text-black mix-blend-screen xl:text-8xl">
            WELCOME
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Signup;
