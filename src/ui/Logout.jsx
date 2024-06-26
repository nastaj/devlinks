import useLogout from "../features/authentication/useLogout";

function Logout() {
  const { logout } = useLogout();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 512 512"
      className="cursor-pointer transition-all hover:scale-125 active:scale-100"
      onClick={logout}
    >
      <path
        d="M320 176v-40a40 40 0 00-40-40H88a40 40 0 00-40 40v240a40 40 0 0040 40h192a40 40 0 0040-40v-40M384 176l80 80-80 80M191 256h273"
        fill="none"
        stroke="#FF3939"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </svg>
  );
}

export default Logout;
