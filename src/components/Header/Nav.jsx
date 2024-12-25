import { VscColorMode } from "react-icons/vsc";
import { useTheme } from "../../hooks/useTheme";
import { Link } from "react-router";

const Nav = () => {
  const toggleTheme = useTheme();

  return (
    <nav className="flex gap-6 list-none">
      {["about", "works", "contact"].map((item) => (
        <li key={item} className="flex items-center">
          <Link
            to={`/${item}`}
            className="ease-out duration-300  hover:scale-105 after:w-0 after:h-px after:block after:bg-zinc-900 dark:after:bg-white after:ease-out after:duration-300 hover:after:w-full"
          >
            {item}
          </Link>
        </li>
      ))}
      <li
        className="flex items-center text-3xl ease-out duration-300 hover:scale-110"
        onClick={toggleTheme}
      >
        <VscColorMode aria-label="toggle theme" />
      </li>
    </nav>
  );
};

export { Nav };
