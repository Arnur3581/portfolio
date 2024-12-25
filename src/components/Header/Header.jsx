import { Link } from "react-router";
import { Nav } from "./Nav";

const Header = () => {
  return (
    <header className="w-full sticky font-['Gravitas_One']">
      <div className="flex justify-between centering py-4">
        <h1 className="text-4xl">
          <Link to="/" className="block ease-out duration-300 hover:scale-110">
            Arni
          </Link>
        </h1>
        <Nav />
      </div>
    </header>
  );
};

export { Header };
