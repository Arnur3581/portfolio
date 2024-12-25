const Skill = ({ icon: Icon, skill }) => {
  return (
    <div className="text-2xl opacity-90">
      {Icon && <Icon className="inline mr-2" />}
      <span className="">{skill}</span>
    </div>
  );
};

export { Skill };
