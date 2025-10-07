import { Link, useLocation } from "react-router-dom";
import { HiLightBulb, HiLogout, HiOutlineLightBulb } from "react-icons/hi";
import { AiFillGithub } from "react-icons/ai";
import logo from "../assets/headshot.png";
import { useLogout } from "../hooks/useAuthMutations";
import { useAuth } from "../hooks/useAuth";
import { useAuthContext } from "../contexts/authContext";

export default function Header() {
  const location = useLocation();
  const logoutMutation = useLogout();
  const { data: user } = useAuthContext();

  const toggleDarkMode = () => {
    if (localStorage.getItem("theme")) {
      if (localStorage.getItem("theme") === "light") {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }

      // if NOT set via local storage previously
    } else {
      if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      }
    }
  };

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return (
    <nav className="w-screen md:mt-10 mt-2 md:mb-2 sticky top-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md py-6">
      <div className="max-w-2xl mx-auto flex justify-center md:justify-between">
        <Link to="/">
          <div className="hidden md:block w-9 h-9 rounded-full cursor-pointer overflow-hidden border-2 border-slate-900 dark:border-slate-400 hover:shadow-md shadow-md hover:shadow-sky-500">
            <img
              src={logo}
              className="max-w-full h-auto block"
              alt="Handson picture of Joe"
            />
          </div>
        </Link>
        <div className="flex justify-end items-center space-x-4">
          <Link
            to="/"
            className={`font-semibold text-sm  ${
              location.pathname === "/"
                ? "text-sky-500 dark:text-sky-400"
                : "hover:text-sky-500 dark:hover:text-sky-400"
            }`}
          >
            Home
          </Link>
          <Link
            to="/projects"
            className={`font-semibold text-sm  ${
              location.pathname === "/projects"
                ? "text-sky-500 dark:text-sky-400"
                : "hover:text-sky-500 dark:hover:text-sky-400"
            }`}
          >
            Projects
          </Link>
          {/* <Link
            to="/"
            className={`font-semibold text-sm  ${
              location.pathname === "/articles"
                ? "text-sky-500 dark:text-sky-400"
                : "hover:text-sky-500 dark:hover:text-sky-400"
            }`}
          >
            Articles
          </Link> */}
          <Link
            to="/contact"
            className={`font-semibold text-sm  ${
              location.pathname === "/contact"
                ? "text-sky-500 dark:text-sky-400"
                : "hover:text-sky-500 dark:hover:text-sky-400"
            }`}
          >
            Contact
          </Link>
          {user && (
            <Link
              to="/new"
              className={`font-semibold text-sm  ${
                location.pathname === "/new"
                  ? "text-sky-500 dark:text-sky-400"
                  : "hover:text-sky-500 dark:hover:text-sky-400"
              }`}
            >
              New
            </Link>
          )}
          <span>|</span>
          <HiOutlineLightBulb
            onClick={toggleDarkMode}
            className="w-5 h-5 hover:text-sky-500 hover:cursor-pointer dark:block hidden"
          />
          <HiLightBulb
            onClick={toggleDarkMode}
            className="w-5 h-5 text-sky-500 hover:text-slate-400 hover:cursor-pointer dark:hidden block"
          />
          <a href="https://github.com/j-webber/joewebber.me" target="_blank">
            <AiFillGithub className="w-5 h-5 hover:text-sky-500 hover:cursor-pointer dark:hover:text-sky-400" />
          </a>
          {user && (
            <HiLogout
              onClick={handleLogout}
              className="w-5 h-5 hover:cursor-pointer hover:text-sky-500 dark:hover:text-sky-400"
            ></HiLogout>
          )}
        </div>
      </div>
    </nav>
  );
}
