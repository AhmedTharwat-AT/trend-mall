import AboutHead from "../components/AboutHead";
import AboutTestimonal from "../components/AboutTestimonal";
import BgSeperator from "../components/BgSeperator";
import RouteHeading from "../components/PageHeading";

function About() {
  return (
    <>
      <RouteHeading head="home" sup="about us" />
      <BgSeperator src="./src/assets/carousel/img-1.jpg" alt="trend mall" />
      <AboutHead />
      <AboutTestimonal />
    </>
  );
}

export default About;
