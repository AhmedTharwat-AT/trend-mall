import useObserverState from "../hooks/useObserverState";
import { MEMBERS } from "../services/constants";
import { FaInstagram, FaTwitter, FaFacebookF } from "react-icons/fa";

function TeamSection() {
  const { ref, isVisible } = useObserverState({ rootMargin: "-100px" });
  return (
    <section className="pb-28">
      <div
        ref={ref}
        className="relative z-10 flex flex-col items-center justify-center gap-10 bg-gray-950 px-4 pt-20 text-center text-gray-300 after:absolute after:bottom-0 after:z-[-1] after:h-32 after:w-full after:bg-white after:content-[''] sm:px-8 lg:after:h-60"
      >
        <div>
          <h1 className="text-3xl font-semibold uppercase tracking-wider sm:text-4xl">
            meet our team of experts
          </h1>
          <p className="text-base capitalize italic sm:text-lg">
            We provide fashionable and functional Design Brands
          </p>
        </div>
        <img
          className={`${
            isVisible
              ? "visible animate-[slideTop_0.8s_0.5s_ease-out_both]"
              : "invisible"
          } min-h-[190px] w-full max-w-5xl rounded-lg object-cover object-top shadow-lg grayscale-[60%] lg:h-96`}
          src="http://wahabali.com/work/empor/images/video.jpg"
        />
      </div>
      <div className="container mt-20">
        <div className="grid grid-cols-1 gap-8 sm:px-0  md:grid-cols-2 lg:grid-cols-3 xl:px-10">
          {MEMBERS.map((member, i) => (
            <TeamMember num={i} member={member} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamMember({ member, num }) {
  const { name, job, img } = member;
  const { isVisible, ref } = useObserverState();
  return (
    <div
      ref={ref}
      className={`${
        isVisible ? "visible animate-slideRight" : "invisible"
      } group flex w-full min-w-[330px] flex-col items-center gap-4  ${
        num == 2 ? "md:col-span-2 lg:col-span-1" : ""
      }`}
    >
      <div className=" relative w-fit">
        <img
          className="relative z-[4] mx-auto aspect-square w-56 rounded-full  object-cover grayscale-[50%] transition-all group-hover:scale-105 group-hover:shadow-lg group-hover:grayscale-0"
          src={img}
        />
        <FaFacebookF className="absolute left-1/2 top-16 z-[2] cursor-pointer rounded-full border border-gray-200 bg-gray-200 p-2 text-5xl text-[#316FF6] shadow-md  transition-all hover:shadow-lg group-hover:-left-11 group-hover:top-2  " />
        <FaInstagram className="absolute left-1/2 top-16 z-[2] cursor-pointer rounded-full border border-gray-200 bg-gray-200 p-2 text-5xl text-[#d62976] shadow-md transition-all delay-100 hover:shadow-lg group-hover:-left-16 group-hover:top-1/2  group-hover:-translate-y-1/2" />
        <FaTwitter className="absolute left-1/2 top-16 z-[2] cursor-pointer rounded-full border border-gray-200 bg-gray-200 p-2 text-5xl text-[#1DA1F2] shadow-md transition-all delay-200  hover:shadow-lg group-hover:-left-11 group-hover:top-[167px] " />
      </div>
      <div className="text-center">
        <h1 className="font-semibold tracking-wider text-gray-900">{name}</h1>
        <h2 className="text-gray-400">{job}</h2>
        <p className="mt-3 w-96 text-sm text-gray-600">
          Sed ut perspiciatis unde omnis iste natus error sitaccusantium
          doloremque laudan
        </p>
      </div>
    </div>
  );
}

export default TeamSection;
