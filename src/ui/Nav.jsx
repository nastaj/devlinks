import useLogout from "../features/authentication/useLogout";
import Button from "./Button";
import Tab from "./Tab";

function Nav() {
  const { logout } = useLogout();

  return (
    <nav className="flex items-center">
      <ul className="flex items-center gap-2">
        <li>
          <Tab to="editor" />
        </li>
        <li>
          <Tab to="profile" />
        </li>
        <li>
          <Button onClick={logout}>Logout</Button>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
