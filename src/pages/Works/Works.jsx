import { Header } from "../../components/Header/Header";
import { Particles } from "../../components/Particles/particles";
import Cantarella from "../../assets/images/cantarella.png";
import { Work } from "./Work/Work";

const Works = () => {
  const works = [
    {
      name: "Cantarella",
      text: "A simple and elegant landing page for a restaurant",
      image: Cantarella,
      link: "https://arnur3581.github.io/cantarella/",
    },
    {
      name: "Cantarella",
      text: "A simple and elegant landing page for a restaurant",
      image: Cantarella,
      link: "https://arnur3581.github.io/cantarella/",
    },
    {
      name: "Cantarella",
      text: "A simple and elegant landing page for a restaurant",
      image: Cantarella,
      link: "https://arnur3581.github.io/cantarella/",
    },
  ];

  return (
    <>
      <Particles />
      <Header />
      <div className="centering">
        <h2 className="marked-line mt-20 text-5xl text-center">
          completed works
        </h2>
        <div>
          {works.map(({ name, text, image, link }) => (
            <Work
              key={`${name}-${link}`}
              name={name}
              text={text}
              image={image}
              link={link}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export { Works };
