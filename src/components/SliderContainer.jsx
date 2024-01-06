import Slider from "react-slick";

function SliderContainer({ children, options = {} }) {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    ...options,
  };

  return (
    <Slider
      className="[&_.slick-dots]:slider-dots h-[calc(100vh-64px)] min-h-[640px] sm:h-[calc(100vh-80px)] [&_.slick-list]:h-full [&_.slick-track]:h-full [&_.slick-track_div]:h-full"
      {...settings}
    >
      {children}
    </Slider>
  );
}

export default SliderContainer;
