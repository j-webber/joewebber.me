import { Link } from "react-router-dom";
import links from "../data/navLinkData.js";
import { useAuthContext } from "../contexts/authContext";

export default function NavLinks() {
  const { data: user } = useAuthContext();
  const navLinks = links.map((link, i) => {
    if (link.protected && !user) {
      return;
    } else {
      return (
        <Link
          key={i}
          to={link.url}
          className={`font-semibold text-sm  ${
            location.pathname === link.url
              ? "text-sky-500 dark:text-sky-400"
              : "hover:text-sky-500 dark:hover:text-sky-400"
          }`}
        >
          {link.title}
        </Link>
      );
    }
  });

  return <>{navLinks}</>;
}
