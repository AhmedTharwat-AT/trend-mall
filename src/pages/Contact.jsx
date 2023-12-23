import ContactContent from "../components/ContactContent";
import PageHeading from "../components/PageHeading";

function Contact() {
  return (
    <>
      <PageHeading path={["home"]} current="contact" />
      <ContactContent />
    </>
  );
}

export default Contact;
