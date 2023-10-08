import { Link } from "react-router-dom";
import Logo from "../ui/Logo";
import SignUpForm from "../features/authentication/SignUpForm";

function SignUp() {
  return (
    <div className="p-8">
      <Logo type="large" />
      <h1 className="mb-2 text-2xl font-bold">Create account</h1>
      <p className="mb-10 text-grey">
        Let&apos;s get you started sharing links!
      </p>
      <SignUpForm />

      <div className="mt-6 text-center">
        <p className="text-grey">Already have an account?</p>
        <Link className="text-brand-purple" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
