import SignupForm from "../components/SignupForm";

function Signup() {
  return (
    <section className="flex items-center justify-center py-16 lg:px-16  lg:py-20">
      <div className="container  flex h-full animate-slideRight items-center overflow-hidden ">
        <div className="mx-auto h-full w-fit border-r-0  lg:mx-0 lg:w-1/2 lg:rounded-bl-3xl lg:rounded-tl-3xl lg:border">
          <SignupForm />
        </div>
        <div className="hidden h-auto w-1/2 grow self-stretch overflow-hidden grayscale lg:block lg:rounded-br-3xl lg:rounded-tr-3xl">
          <img
            alt="signup-img"
            className="h-full object-cover "
            src="assets/carousel/img-1.jpg"
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
