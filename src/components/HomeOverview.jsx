function HomeOverview({ children }) {
  return (
    <div className=" overflow-hidden bg-[linear-gradient(to_right_,#000000aa,#07656c3d),url('/assets/grid-1.png')] bg-cover bg-fixed  bg-center bg-no-repeat grayscale-[0.2] ">
      <div className="relative flex h-full w-full flex-col justify-center gap-20 pb-24 pt-14 text-center backdrop-blur-[2px] sm:pt-20 ">
        <p className="text-5xl font-bold uppercase text-gray-300  md:text-6xl lg:text-7xl ">
          products overview
        </p>
        <div>{children}</div>
      </div>
    </div>
  );
}

export default HomeOverview;
