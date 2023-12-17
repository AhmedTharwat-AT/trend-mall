import { Carousel, Typography, Button } from "@material-tailwind/react";

function Header() {
  return (
    <div>
      <Carousel
        transition={{ duration: 1.1 }}
        autoplayDelay={2900}
        autoplay
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
        loop
      >
        <div className="relative h-screen w-full">
          <img
            src="./src/assets/carousel/img-1.jpg"
            alt="image 1"
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/25">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h1"
                color="white"
                className="mx-auto mb-4 w-fit border-2 px-4 py-3 text-3xl uppercase md:text-5xl lg:text-7xl"
              >
                Welcome to <span className="text">Trend Mall</span>
              </Typography>
              <Typography
                variant="lead"
                className="mb-12 text-2xl text-[var(--color-brand-50)] opacity-90"
              >
                Where Trends Come to Life
              </Typography>
              <div className="flex justify-center ">
                <Button
                  size="lg"
                  className="bg-[var(--color-brand-700)] hover:bg-[var(--color-brand-500)] md:text-xl"
                >
                  Shop now
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-screen w-full">
          <img
            src="./src/assets/carousel/img-2.jpg"
            alt="image 2"
            className="h-full w-full object-cover object-right-top md:object-top"
          />
          <div className="absolute inset-0 grid h-full w-full items-center bg-black/25">
            <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Discover the Latest Fashion Trends
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Stay ahead of the fashion curve with our curated collection of
                trendy clothing. From chic dresses to stylish accessories, we
                have everything you need to elevate your wardrobe
              </Typography>
              <div className="flex gap-2">
                <Button size="lg" color="white">
                  Explore
                </Button>
                <Button size="lg" color="white" variant="text">
                  Gallery
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-screen w-full">
          <img
            src="./src/assets/carousel/img-3.png"
            alt="image 3"
            className="h-full w-full object-cover object-top"
          />
          <div className="absolute inset-0 grid h-full w-full items-end bg-black/25">
            <div className="w-3/4 pb-12 pl-12 md:w-2/4 md:pb-20 md:pl-20 lg:pb-32 lg:pl-32">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
              >
                Hear from Our Satisfied Customers
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80"
              >
                Don't just take our word for it. See what our customers have to
                say about their Trend Mall shopping experience and why they love
                our trendy clothing.
              </Typography>
              <div className="flex gap-2">
                <Button size="lg" color="white">
                  Read Reviews
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default Header;
