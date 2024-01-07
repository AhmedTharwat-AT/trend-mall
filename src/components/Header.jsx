import SliderContainer from "./SliderContainer";
import HeaderSlide from "./HeaderSlide";
import ContactLinks from "./ContactLinks";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

function Header() {
  return (
    <header className="relative animate-slideTop text-gray-600">
      <SliderContainer
        options={{ nextArrow: <NextArrow />, prevArrow: <PrevArrow /> }}
      >
        <HeaderSlide className="bg-[url('https://preview.colorlib.com/theme/malefashion/img/hero/hero-1.jpg.webp')]" />
        <HeaderSlide className="bg-[url('https://preview.colorlib.com/theme/malefashion/img/hero/hero-2.jpg.webp')]" />
      </SliderContainer>
      <div className="absolute  bottom-5 z-10 w-full">
        <ContactLinks className="container mx-auto mt-4 flex items-center justify-start gap-3 text-lg text-gray-500 sm:ml-auto sm:px-6 " />
      </div>
    </header>
  );
}

function NextArrow({ onClick }) {
  return (
    <div
      className="absolute left-40 top-12 z-10 cursor-pointer text-3xl transition-all hover:opacity-75 sm:left-[calc(50%_+_100px)] "
      onClick={onClick}
    >
      <FaArrowRightLong />
    </div>
  );
}

function PrevArrow({ onClick }) {
  return (
    <div
      className="absolute left-4 top-12 z-10 cursor-pointer  text-3xl transition-all hover:opacity-75 sm:left-[calc(50%_-_100px)] "
      onClick={onClick}
    >
      <FaArrowLeftLong />
    </div>
  );
}

export default Header;
