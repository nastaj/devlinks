import useUser from "../features/authentication/useUser";
import useLogout from "../features/authentication/useLogout";
import Nav from "./Nav";
import Logo from "./Logo";
import Tab from "./Tab";
import Logout from "./Logout";

function Header() {
  const { user } = useUser();

  return (
    <header className="flex items-center justify-between bg-white p-4 md:mb-4 md:rounded-xl">
      <Logo classname="md:h-9 md:w-36" />
      <Nav />
      <div className="flex items-center gap-12">
        <Logout />
        <Tab type="secondary" to={user.id} userId={user.id} />
      </div>
    </header>
  );
}

export default Header;
