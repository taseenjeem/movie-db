import Image from "next/image";
import Link from "next/link";
import ThemeSwitch from "./ThemeSwitch";
import LanguageSwitch from "./LanguageSwitch";
import NotificationBell from "./NotificationBell";

const Navbar = () => {
  return (
    <>
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <Link href="/">
          <Image src="/assets/logo.svg" width={139} height={26} alt="" />
        </Link>
        <ul className="flex items-center space-x-5">
          <li>
            <NotificationBell />
          </li>
          <li>
            <ThemeSwitch />
          </li>
          <li>
            <LanguageSwitch />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
