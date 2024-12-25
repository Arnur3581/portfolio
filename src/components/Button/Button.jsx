const Button = ({ children, ...setings }) => {
  return (
    <button
      {...setings}
      className="w-fit px-6 py-3 mt-10 rounded-full bg-zinc-800 shadow-lg shadow-zinc-400 text-zinc-200 ease-out duration-300 dark:bg-zinc-200 dark:text-zinc-800 dark:shadow-zinc-950 hover:scale-110"
    >
      {children}
    </button>
  );
};

export { Button };
