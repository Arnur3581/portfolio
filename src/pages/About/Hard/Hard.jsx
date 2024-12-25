import { DiJavascript, DiPython, DiReact, DiSass } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { Skill } from "./Skill";

const Hard = () => {
  const skills = [
    {
      skill: "JavaScript",
      icon: DiJavascript,
    },
    {
      skill: "React",
      icon: DiReact,
    },
    {
      skill: "Python",
      icon: DiPython,
    },
    {
      skill: "Tailwind",
      icon: SiTailwindcss,
    },
    {
      skill: "Sass",
      icon: DiSass,
    },
  ];

  return (
    <section className="lg:flex-1 w-full">
      <h2 className="marked-line text-5xl">hard skills</h2>
      <div className="flex flex-wrap mt-5 gap-x-10 gap-y-10">
        {skills.map(({ skill, icon }) => (
          <Skill key={skill} skill={skill} icon={icon} />
        ))}
      </div>
    </section>
  );
};

export { Hard };
