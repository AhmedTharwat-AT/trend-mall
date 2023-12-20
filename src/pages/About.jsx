import AboutSection from "../components/AboutSection";
import BgSeperator from "../components/BgSeperator";
import RouteHeading from "../components/PageHeading";

function About() {
  return (
    <>
      <RouteHeading head="home" sup="about us" />
      <BgSeperator src="./src/assets/carousel/img-1.jpg" alt="trend mall" />
      <AboutSection>section one</AboutSection>
    </>
  );
}

export default About;
