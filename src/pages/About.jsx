import AboutHead from "../components/AboutHead";
import AboutTestimonal from "../components/AboutTestimonal";
import BgSeperator from "../components/BgSeperator";
import Newsletter from "../components/Newsletter";
import PageHeading from "../components/PageHeading";
import Statistics from "../components/Statistics";
import TeamSection from "../components/TeamSection";

function About() {
  return (
    <>
      <PageHeading path={["home"]} current="about us" />
      <BgSeperator src="./src/assets/carousel/img-1.jpg" alt="trend mall" />
      <AboutHead />
      <Statistics />
      <AboutTestimonal />
      <TeamSection />
      <Newsletter />
    </>
  );
}

export default About;
