import { Link } from "react-router-dom";

export default function NotFoundScreen() {
  return (
    <div className="flex flex-col items-start">
      <h1 className="text-2xl font-semibold slate-900 dark:slate-200">
        Uh oh...
      </h1>
      <p className="mt-8">That page does not exist. Try one of these:</p>
      <ul className="mt-5 flex flex-col items-start space-y-3 list-disc ml-10">
        <li>
          <Link
            to="/"
            className="underline hover:text-sky-500 hover:cursor-pointer dark:hover:text-sky-400"
            target="_self"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="underline hover:text-sky-500 hover:cursor-pointer dark:hover:text-sky-400"
            target="_self"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="underline hover:text-sky-500 hover:cursor-pointer dark:hover:text-sky-400"
            target="_self"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
