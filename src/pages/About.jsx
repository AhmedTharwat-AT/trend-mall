import AboutHead from "../components/AboutHead";
import AboutTestimonal from "../components/AboutTestimonal";
import BgSeperator from "../components/BgSeperator";
import Newsletter from "../components/Newsletter";
import RouteHeading from "../components/PageHeading";

function About() {
  return (
    <>
      <RouteHeading path={["home"]} current="about us" />
      <BgSeperator src="./src/assets/carousel/img-1.jpg" alt="trend mall" />
      <AboutHead />
      <AboutTestimonal />
      <Newsletter />
    </>
  );
}

export default About;
