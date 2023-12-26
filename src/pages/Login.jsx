import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <section className="flex h-[calc(100vh-200px)] min-h-[700px] animate-[slideLeft_0.8s_ease-in-out] items-center justify-center">
      <LoginForm />
    </section>
  );
}

export default Login;
