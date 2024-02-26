import { FaQuoteRight } from "react-icons/fa";

function AboutTestimonal() {
  return (
    <section className=" w-full text-gray-600">
      <div className=" flex w-full flex-col gap-5 bg-[var(--color-head-100)]  lg:flex-row">
        <div className="mx-auto flex w-full flex-col items-center justify-center px-5 py-20 text-center lg:w-1/2">
          <FaQuoteRight className="mb-8 inline-block h-8 w-8 text-[var(--color-brand-500)] " />
          <p className="max-w-xl text-lg leading-relaxed">
            Going out after work? Take your butane curling iron with you to the
            office, heat it up, style your hair before you leave the office and
            you won’t have to make a trip back home.
          </p>
          <span className="mb-6 mt-8 inline-block h-1 w-10 rounded bg-indigo-500"></span>
          <div className="flex items-center justify-center gap-4">
            <img
              loading="lazy"
              alt="malefashon"
              className="h-14 w-14 rounded-full object-cover"
              src="https://preview.colorlib.com/theme/malefashion/img/blog/blog-2.jpg.webp"
            />
            <div>
              <h2 className="title-font text-sm font-medium tracking-wider text-gray-900">
                Augusta Schultz
              </h2>
              <p className="text-gray-500">Fashion Design</p>
            </div>
          </div>
        </div>
        <div className="h-96 w-full bg-about bg-cover bg-center lg:h-[550px] lg:w-1/2"></div>
      </div>
    </section>
  );
}

export default AboutTestimonal;
