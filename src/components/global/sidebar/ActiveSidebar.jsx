"use client";
import { supportedLocales } from "@/data/locales/locales";
import Link from "next/link";
import { usePathname } from "next/navigation";

const ActiveSidebar = ({ path, children }) => {
  const pathname = usePathname();
  let isActive = false;

  if (path === "/") {
    isActive = supportedLocales.some((locale) => {
      return pathname === `/${locale}`;
    });
  } else {
    isActive = supportedLocales.some((locale) => {
      return pathname === `/${locale}${path}`;
    });
  }

  return (
    <Link
      href={path}
      className={`${
        isActive
          ? "flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black"
          : "flex items-center space-x-2 px-5 py-3.5 rounded-lg hover:dark:bg-gray-800 hover:bg-gray-300 duration-200"
      }`}
    >
      {children}
    </Link>
  );
};

export default ActiveSidebar;
