import Nav from "./Nav";
import Logo from "./Logo";
import Tab from "./Tab";

function Header() {
  return (
    <header className="flex items-center justify-between bg-white p-4">
      <Logo />
      <Nav />
      <Tab type="secondary" to="preview" />
    </header>
  );
}

export default Header;
