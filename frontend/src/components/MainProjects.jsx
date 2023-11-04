import { Link } from "react-router-dom";
import logo from "../assets/WNA-logo.png";
import logoLight from "../assets/WNA-logo-secondary.png";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function MainProjects() {
  return (
    <div className="w-full mt-14">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-200">
        Things I'm currently building:
      </h2>
      <p className="mt-5">
        Ever since reading The 4-Hour Work Week in 2017, I’ve been fascinated
        with building a business. Thus, have built many - a couple made money,
        most did not. You can find a full list{" "}
        <Link
          to="/projects"
          className="font-semibold hover:text-sky-500 hover:cursor-pointer dark:hover:text-sky-400"
        >
          here
        </Link>
        .
      </p>
      <div className="columns-1 md:columns-2 gap-4 mt-5">
        <a
          href="https://watchnowai.com"
          target="_blank"
          className="border border-slate-200 dark:border-slate-700 bg-slate-50 hover:bg-slate-50/40 dark:bg-slate-800 dark:hover:bg-slate-800/70 rounded p-1 text-sm inline-flex justify-between items-center leading-4 dark:text-slate-300 no-underline shadow"
        >
          <div className="flex justify-start items-center px-3 py-3">
            <div className=" w-12 h-12 md:w-14 md:h-14 overflow-hidden">
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
            </div>
            <div className="ml-3 flex flex-col space-y-1 mr-4">
              <p className="font-semibold dark:text-slate-200 text-slate-900">
                WatchNow AI
              </p>
              <p>AI-powered movie recs</p>
            </div>
          </div>
          <div className="mr-2">
            <HiArrowNarrowRight className="-rotate-45 h-5 w-5" />
          </div>
        </a>
      </div>
    </div>
  );
}
