import { Particles } from "../../components/Particles/particles";
import { Header } from "../../components/Header/Header";
import { Main } from "./Main/Main";
import { Hard } from "./Hard/Hard";

const About = () => {
  return (
    <>
      <Particles />
      <Header />
      <div className="centering mb-10">
        <div className="flex flex-wrap mt-20 gap-20">
          <Main />
          <Hard />
        </div>
      </div>
    </>
  );
};

export { About };
