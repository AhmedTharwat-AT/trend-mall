import Header from "../components/Header";
import HeadingSeprator from "../components/HeadingSeprator";
import HomeSales from "../components/HomeSales";
import HomeProducts from "../features/products/HomeProducts";
import OverviewProducts from "../features/products/OverviewProducts";

function Home() {
  return (
    <>
      <Header />
      <HomeProducts />
      <HeadingSeprator text="Products overview" />
      <OverviewProducts />
      <HomeSales />
    </>
  );
}

export default Home;
