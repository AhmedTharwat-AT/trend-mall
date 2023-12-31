import { useQuery } from "react-query";
import { getMenProducts } from "../services/apiProducts";
import Slider from "react-slick";

import Product from "../features/products/Product";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

export default function SimpleSlider({
  controles = true,
  parentStyles = {},
  showArrows = true,
}) {
  const { data: products, isLoading } = useQuery(
    ["menProducts"],
    getMenProducts,
  );

  if (isLoading) return null;

  var settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 700,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 3,
    swipeToSlide: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    nextArrow: controles ? <SampleNextArrow /> : null,
    prevArrow: controles ? <SamplePrevArrow /> : null,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: showArrows,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,

          arrows: showArrows,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: showArrows,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto">
      <Slider className={parentStyles} {...settings}>
        {products.slice(0, 10).map((pro) => (
          <Product product={pro} key={pro.id} />
        ))}
      </Slider>
    </div>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowDropright
      className={`${className} -top-12 right-2 h-10 w-10 bg-transparent text-gray-700 hover:text-gray-500`}
      style={{
        ...style,
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <IoIosArrowDropleft
      className={`absolute -top-16 right-20 h-10 w-10 -translate-y-1 cursor-pointer bg-transparent text-gray-700 hover:text-gray-500`}
      style={{
        ...style,
      }}
      onClick={onClick}
    />
  );
}
