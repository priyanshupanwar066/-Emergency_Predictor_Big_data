import { useCallback } from "react";
import { loadFull } from "tsparticles";
import { Particles } from "react-tsparticles";

export default function ParticlesBG() {
  const init = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={init}
      options={{
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          color: { value: "#38bdf8" },
          links: { enable: true, color: "#38bdf8", distance: 120 },
          move: { enable: true, speed: 0.5 },
          number: { value: 40 },
          opacity: { value: 0.5 },
          size: { value: { min: 1, max: 3 } },
        },
      }}
    />
  );
}
