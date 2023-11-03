import { FaCcAmex } from "react-icons/fa";
import { BiCameraMovie } from "react-icons/bi";
import logo from "../assets/WNA-logo.png";
import logoLight from "../assets/WNA-logo-secondary.png";

export default function AboutMe() {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-semibold slate-900 dark:slate-200">
        Hey there, I'm Joe Webber.
      </h1>
      <p className="mt-8">
        I am a recovering sales addict now hooked on web development.
      </p>
      <p className="mt-5">
        I'm currently a sales rep at{" "}
        <span>
          <a
            href="https://egencia.com"
            target="_blank"
            className="border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 rounded p-1 text-sm inline-flex items-center leading-4 dark:text-slate-300 no-underline"
          >
            <FaCcAmex className="text-[#016FD0] inline-block mr-1" /> Egencia
          </a>
        </span>
        . I help simplify the way mid-market companies book and manage employee
        travel.
      </p>
      <p className="mt-5">
        Outside of work, I build 🔨 projects like{" "}
        <span>
          <a
            href="https://watchnowai.com"
            target="_blank"
            className="border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 rounded p-1 text-sm inline-flex items-center leading-4 dark:text-slate-300 no-underline"
          >
            <span className="w-4 h-4 overflow-hidden mr-1">
              <img
                className="max-w-full h-auto block dark:hidden"
                src={logo}
                alt="watchnow ai logo"
              />
              <img
                className="max-w-full h-auto hidden dark:block"
                src={logoLight}
                alt="watchnow ai logo"
              />
            </span>{" "}
            WatchNow AI
          </a>
        </span>
        , run 🏃‍♂️ way too many miles, and spend time with my beautiful wife and
        daughter 👨‍👩‍👧.
      </p>
    </div>
  );
}
