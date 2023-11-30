import { Link } from "react-router-dom";
import wnaLogo from "../assets/WNA-Logo.png";
import wnaLogoLight from "../assets/WNA-logo-secondary.png";
import asLogo from "../assets/adsweep-logo.png";
import asLogoLight from "../assets/adsweep-logo-light.png";
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
      <div className="flex flex-col space-y-4 md:flex-row md:justify-start md:space-x-4 md:space-y-0 mt-4">
        <a
          href="https://watchnowai.com"
          target="_blank"
          className="border border-slate-200 dark:border-slate-700 bg-slate-50 hover:bg-slate-50/40 dark:bg-slate-800 dark:hover:bg-slate-800/70 rounded p-1 text-sm inline-flex justify-between items-center leading-4 dark:text-slate-300 no-underline shadow"
        >
          <div className="flex justify-start items-center px-3 py-3">
            <div className=" w-12 h-12 md:w-14 md:h-14 overflow-hidden">
              <img
                className="max-w-full h-auto block dark:hidden"
                src={wnaLogo}
                alt="watchnow ai logo"
              />
              <img
                className="max-w-full h-auto hidden dark:block"
                src={wnaLogoLight}
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
        <a
          href="https://joewebber.gumroad.com/l/ofagu"
          target="_blank"
          className="border border-slate-200 dark:border-slate-700 bg-slate-50 hover:bg-slate-50/40 dark:bg-slate-800 dark:hover:bg-slate-800/70 rounded p-1 text-sm inline-flex justify-between items-center leading-4 dark:text-slate-300 no-underline shadow"
        >
          <div className="flex justify-start items-center px-3 py-3">
            <div className=" w-12 h-12 md:w-14 md:h-14 overflow-hidden">
              <img
                className="max-w-full h-auto block dark:hidden"
                src={asLogoLight}
                alt="AdSweep logo"
              />
              <img
                className="max-w-full h-auto hidden dark:block"
                src={asLogo}
                alt="AdSweep Logo"
              />
            </div>
            <div className="ml-3 flex flex-col space-y-1 mr-4">
              <p className="font-semibold dark:text-slate-200 text-slate-900">
                AdSweep
              </p>
              <p>Surf X with zero ads</p>
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
