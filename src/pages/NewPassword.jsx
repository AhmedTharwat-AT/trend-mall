import NewPassForm from "../components/NewPassForm";

function NewPassword() {
  return (
    <section className="flex animate-[slideLeft_0.8s_ease-in-out] items-center justify-center py-28 sm:h-[calc(100vh-200px)] sm:min-h-[700px] sm:py-0">
      <NewPassForm />
    </section>
  );
}

export default NewPassword;
