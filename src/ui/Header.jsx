import Nav from "./Nav";
import Logo from "./Logo";
import Tab from "./Tab";
import useUser from "../features/authentication/useUser";

function Header() {
  const { user } = useUser();

  return (
    <header className="flex items-center justify-between bg-white p-4">
      <Logo />
      <Nav />
      <Tab type="secondary" to={user.id} userId={user.id} />
    </header>
  );
}

export default Header;
