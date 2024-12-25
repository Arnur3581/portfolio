import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useMemo, useEffect } from "react";
import { loadAll } from "@tsparticles/all";
import { particleOptions } from "./particleOptions";

const ParticlesComponent = () => {
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadAll(engine);
    });
  }, []);
  const options = useMemo(() => particleOptions, []);

  return <Particles className="fixed -z-10" options={options} />;
};

export { ParticlesComponent as Particles };
