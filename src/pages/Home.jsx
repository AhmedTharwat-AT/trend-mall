import HeadingSeprator from "../components/HeadingSeprator";
import HomeProducts from "../features/products/HomeProducts";
import OverviewProducts from "../features/products/OverviewProducts";

function Home() {
  return (
    <>
      <HomeProducts />
      <HeadingSeprator text="Products overview" />
      <OverviewProducts />
    </>
  );
}

export default Home;
