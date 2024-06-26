import { Link } from "react-router-dom";
import SignUpForm from "../features/authentication/SignUpForm";

import Logo from "../ui/Logo";

function SignUp() {
  return (
    <div className="md:flex md:h-screen md:flex-col md:items-center md:gap-8 md:bg-grey-light xl:pt-6">
      <Logo type="large" classname="pt-8 ml-8 md:p-0 md:m-0 md:basis-16" />
      <div className="p-8 md:w-3/5 md:rounded-xl md:bg-white md:p-10 xl:w-1/3">
        <h1 className="mb-2 text-2xl font-bold">Create account</h1>
        <p className="mb-10 text-grey">
          Let&apos;s get you started sharing your links!
        </p>
        <SignUpForm />
        <div className="mt-6 text-center">
          <p className="text-grey">Already have an account?</p>
          <Link className="text-brand-purple" to="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
