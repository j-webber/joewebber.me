import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function RecentArticles() {
  return (
    <div className="w-full mt-14">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-200">
        Things I recently wrote:
      </h2>
      <div className="w-full flex flex-col mt-5">
        <Link
          to={"/"}
          className="border border-slate-200 dark:border-slate-700 bg-slate-50 hover:bg-slate-50/40 dark:bg-slate-800 dark:hover:bg-slate-800/70 rounded p-1 text-sm inline-flex justify-between items-center leading-4 dark:text-slate-300 no-underline shadow"
        >
          <div className="flex justify-start items-center px-3 py-3">
            <div className="flex flex-col space-y-1 mr-4">
              <p className="font-semibold dark:text-slate-200 text-slate-900">
                Lorem ipsum dolor
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                vitae corrupti eius ratione animi eveniet tempora id possimus
                atque, ipsa, pariatur facere architecto veritatis quidem quo
                amet? Rem, impedit praesentium!
              </p>
            </div>
          </div>
          <div className="mr-2">
            <HiArrowNarrowRight className="-rotate-45 h-5 w-5" />
          </div>
        </Link>
      </div>
    </div>
  );
}
