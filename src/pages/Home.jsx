import Header from "../components/Header";
import HomeOverview from "../components/HomeOverview";
import HomeSales from "../components/HomeSales";
import HomeTrends from "../components/HomeTrends";
import Newsletter from "../components/Newsletter";
import SimpleSlider from "../components/SimpleSlider";
import HomeProducts from "../features/products/HomeProducts";

function Home() {
  return (
    <>
      <Header />
      <HomeProducts />
      <HomeOverview>
        <SimpleSlider
          parentStyles="[&_.slick-dots_button:before]:text-gray-100 [&_.slick-dots_button:before]:pt-5 [&_.slick-dots_.slick-active_button:before]:text-white text-start"
          showArrows={false}
          controles={false}
        />
      </HomeOverview>
      <HomeSales />
      <HomeTrends />
      <Newsletter />
    </>
  );
}

export default Home;
