const Work = ({ image, name, text, link }) => {
  return (
    <div
      className="flex gap-10 mt-10 p-6 ease-out duration-300 hover:shadow-lg rounded-md cursor-pointer mb-5 hover:bg-zinc-500 hover:bg-opacity-20"
      onClick={() => window.open(link, "_blank")}
    >
      <img src={image} alt={name} className="w-52 h-32 rounded-md" />
      <div>
        <h3 className="text-2xl ">{name}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export { Work };
