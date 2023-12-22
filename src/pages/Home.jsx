import Header from "../components/Header";
import HeadingSeprator from "../components/HeadingSeprator";
import HomeSales from "../components/HomeSales";
import HomeTrends from "../components/HomeTrends";
import Newsletter from "../components/Newsletter";
import HomeProducts from "../features/products/HomeProducts";
import OverviewProducts from "../features/products/OverviewProducts";

function Home() {
  return (
    <>
      <Header />
      <HomeProducts />
      <HeadingSeprator text="Products overview" />
      <section className=" my-12 py-12">
        <OverviewProducts />
      </section>
      <HomeSales />
      <HomeTrends />
      <Newsletter />
    </>
  );
}

export default Home;
