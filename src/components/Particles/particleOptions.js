const particleOptions = {
  fpsLimit: 120,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
    },
    modes: {
      repulse: {
        distance: 100,
      },
    },
  },
  particles: {
    color: {
      value: "#a1a1aa",
    },
    links: {
      enable: true,
      color: "#a1a1aa",
      distance: 150,
      opacity: 0.5,
      width: 1,
    },
    move: {
      enable: true,
      random: true,
      speed: 1,
    },
    number: {
      density: {
        enable: true,
      },
      value: 160,
    },
    opacity: {
      value: 1.0,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
  pauseOnBlur: true,
  detectRetina: true,
};

export { particleOptions };
