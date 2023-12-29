import { IoPeople } from "react-icons/io5";
import { GoTrophy } from "react-icons/go";
import { BsStars } from "react-icons/bs";

function AboutHead() {
  return (
    <section className="bg-gray-200 pb-36 pt-20 ">
      <div className="container mx-auto px-7">
        <div className="-mx-3 flex flex-wrap gap-6 space-y-6 md:space-y-0">
          <TopSection
            icon={<IoPeople className="text-blue-600" />}
            head="who we are"
            details="We are passionate about fashion and dedicated to providing you
                with a seamless shopping experience. we offer a wide range of
                trendy and stylish apparel for men and women."
          />
          <TopSection
            icon={<GoTrophy className="text-orange-400" />}
            head="What We Do"
            details="At Trend Mall, we strive to be your go-to destination for all
            your fashion needs. We meticulously handpick the latest trends
            and fashion-forward pieces to ensure that you have access to the
            hottest styles."
          />
          <TopSection
            icon={<BsStars className="text-yellow-500" />}
            head="Why Choose Us"
            details=" We prioritize quality. We source our clothing from trusted
            suppliers and designers, ensuring that each item meets our high
            standards. From premium fabrics to impeccable craftsmanship."
          />
        </div>
      </div>
    </section>
  );
}

function TopSection({ icon, head, details }) {
  return (
    <div className="group flex animate-slideRight flex-col items-center rounded-xl border bg-white p-5 text-center shadow !transition-all !duration-300 hover:!scale-[1.01] hover:shadow-md md:w-[calc((1/3*100%)-16px)] md:items-start md:text-start">
      <div className="text-6xl text-gray-700 opacity-90 md:text-5xl">
        {icon}
      </div>
      <div className="mt-5 flex flex-grow flex-col items-center gap-y-4 md:items-start">
        <div>
          <h2 className="mb-3 text-lg font-medium capitalize text-gray-900">
            {head}
          </h2>
          <p className="text-sm leading-relaxed tracking-wide">{details}</p>
        </div>
        <h2 className="relative mt-auto cursor-pointer text-sm tracking-widest">
          READ MORE{" "}
          <span className="absolute -bottom-1 left-0 h-[2px] w-5 bg-[var(--color-brand-500)]  transition-all duration-300 group-hover:w-20 group-hover:bg-black"></span>
        </h2>
      </div>
    </div>
  );
}

export default AboutHead;
