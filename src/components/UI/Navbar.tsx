"use client";

import { navLinks } from "@/db/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PolymorphicButton from "./PolymorphicButton";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    const normalizedPath = pathname.replace(/\/$/, "");
    return path === "/"
      ? normalizedPath === ""
      : normalizedPath.startsWith(path);
  };

  return (
    <div className="navbar bg-base-100 fixed top-0 left-0 w-full z-50 md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {navLinks.map((link) => (
              <li key={link.path} className="px-1">
                <Link
                  href={link.path}
                  className={`
        transition-colors duration-300 
        font-bold
    ${isActive(link.path) ? "text-primary" : "text-base-content"}
      `}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link href="/">
          <span className="text-xl font-bold text-primary">Textiles</span>
          {/* <Image src={logo} alt="logo" width={220} height={220} /> */}
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map((link) => (
            <li key={link.path} className="px-1">
              <Link
                href={link.path}
                className={`
        transition-colors duration-300 
        font-bold
    ${isActive(link.path) ? "text-primary" : "text-base-content"}
      `}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end gap-2">
        <PolymorphicButton
          href="#"
          text="login"
          variant="gradient"
          color="primary"
          ariaLabel="login page"
        />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navbar;
