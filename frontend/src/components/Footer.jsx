import { AiOutlineTwitter, AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="mx-auto flex flex-col items-center border-t border-slate-200 dark:border-slate-700 pb-8 absolute bottom-0 w-full">
      <div className="pt-8 pb-4 md:pt-12 md:pb-6 flex justify-center space-x-6">
        <a
          href="https://twitter.com/joewebber_"
          className="hover:text-sky-500 hover:cursor-pointer dark:hover:text-sky-400"
          target="_blank"
        >
          <AiOutlineTwitter className="h-6 w-6" />
        </a>
        <a
          href="https://github.com/j-webber"
          className="hover:text-sky-500 hover:cursor-pointer dark:hover:text-sky-400"
          target="_blank"
        >
          <AiFillGithub className="h-6 w-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/joewebber"
          className="hover:text-sky-500 hover:cursor-pointer dark:hover:text-sky-400"
          target="_blank"
        >
          <AiFillLinkedin className="h-6 w-6" />
        </a>
      </div>
      <div className="flex flex-col items-center text-sm">
        <p>&copy;{`${year} `}Joe Webber.</p>
        <a
          href="https://github.com/j-webber/joewebber.me"
          target="_blank"
          className="cursor-pointer hover:text-sky-500 hover:cursor-pointer dark:hover:text-sky-400"
        >
          This website is open source.
        </a>
      </div>
    </div>
  );
}
