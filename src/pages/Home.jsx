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
        <SimpleSlider controles={false} />
      </HomeOverview>
      <HomeSales />
      <HomeTrends />
      <Newsletter />
    </>
  );
}

export default Home;
