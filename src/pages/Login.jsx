import { Link } from "react-router-dom";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";

function Login() {
  return (
    <div className="md:flex md:h-screen md:flex-col md:items-center md:justify-center md:bg-grey-light">
      <Logo type="large" classname="pt-8 ml-8 md:p-0 md:m-0" />
      <div className="p-8 md:w-3/5 md:rounded-xl md:bg-white md:p-10">
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
    </div>
  );
}

export default Login;
