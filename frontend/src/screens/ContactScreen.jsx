export default function ContactScreen() {
  return (
    <div className="flex flex-col items-start">
      <h1 className="text-2xl font-semibold slate-900 dark:slate-200">
        Contact:
      </h1>
      <ul className="mt-5 flex flex-col items-start space-y-3 list-disc ml-10">
        <li>email: joe [at] joewebber.me</li>
        <li>
          <a
            href="https://github.com/j-webber"
            className="underline hover:text-sky-500 hover:cursor-pointer dark:hover:text-sky-400"
            target="_blank"
          >
            Github: j-webber
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/joewebber"
            className="underline hover:text-sky-500 hover:cursor-pointer dark:hover:text-sky-400"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/joewebber_"
            className="underline hover:text-sky-500 hover:cursor-pointer dark:hover:text-sky-400"
            target="_blank"
          >
            Twitter: @joewebber_
          </a>
        </li>
      </ul>
    </div>
  );
}
