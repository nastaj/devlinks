import { Link } from "react-router-dom";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";

function Login() {
  return (
    <div className="p-8">
      <Logo type="large" />
      <h1 className="mb-2 text-2xl font-bold">Login</h1>
      <p className="mb-10 text-grey">
        Add your details below to get back into the app
      </p>
      <LoginForm />

      <div className="mt-6 text-center">
        <p className="text-grey">Don&apos;t have an account?</p>
        <Link className="text-brand-purple" to="/signup">
          Create account
        </Link>
      </div>
    </div>
  );
}

export default Login;
