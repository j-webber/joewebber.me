import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { HiLightBulb, HiOutlineLightBulb } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
import logo from "../assets/headshot.png";

export default function Header() {
  const location = useLocation();

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

  return (
    <nav className="w-screen md:mt-10 mt-2 md:mb-2 sticky top-0 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md py-6">
      <div className="max-w-2xl mx-auto flex justify-center md:justify-between">
        <div className="hidden md:block w-9 h-19 rounded-full cursor-pointer overflow-hidden border-2 border-slate-900 dark:border-slate-400 hover:shadow-md shadow-md hover:shadow-sky-500">
          <img
            src={logo}
            className="max-w-full h-auto block"
            alt="Handson picture of Joe"
          />
        </div>
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
            to="/"
            className={`font-semibold text-sm  ${
              location.pathname === "/projects"
                ? "text-sky-500 dark:text-sky-400"
                : "hover:text-sky-500 dark:hover:text-sky-400"
            }`}
          >
            Projects
          </Link>
          <Link
            to="/"
            className={`font-semibold text-sm  ${
              location.pathname === "/articles"
                ? "text-sky-500 dark:text-sky-400"
                : "hover:text-sky-500 dark:hover:text-sky-400"
            }`}
          >
            Articles
          </Link>
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
            <BsGithub className="w-4 h-4 hover:text-sky-500 hover:cursor-pointer dark:hover:text-sky-400" />
          </a>
        </div>
      </div>
    </nav>
  );
}
