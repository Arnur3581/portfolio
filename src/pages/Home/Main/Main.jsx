import { Link } from "react-router";
import { Button } from "../../../components/Button/Button";

const Main = () => {
  return (
    <section id="main">
      <div className="flex flex-col items-center justify-center h-[90vh] mx-auto">
        <h2 className="text-center text-5xl">I&apos;m Saulenbek Arnur</h2>
        <h2 className="animate-gradient text-center text-8xl bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-amber-400">
          Frontend Developer
        </h2>
        <Link to="/contact">
          <Button>Contact Me</Button>
        </Link>
      </div>
    </section>
  );
};

export { Main };
