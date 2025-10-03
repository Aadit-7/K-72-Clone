const ProjectCard = (props) => {
  return (
    <>
      <div className="w-1/2 h-full group transition-all relative rounded-none hover:rounded-4xl overflow-hidden cursor-pointer ">
        <img className="h-full w-full object-cover" src={props.img1} alt="" />
        <div className=" opacity-0 group-hover:opacity-100 transition-all absolute top-0 left-0 h-full w-full bg-black/20 flex items-center justify-center">
          <h1 className="uppercase font-[font1] text-6xl px-8 pt-2 border-4 rounded-full">
            vioe le projet
          </h1>
        </div>
      </div>
      <div className="w-1/2 h-full group transition-all relative rounded-none hover:rounded-4xl overflow-hidden cursor-pointer ">
        <img className="h-full w-full object-cover" src={props.img2} alt="" />
        <div className=" opacity-0 group-hover:opacity-100 transition-all absolute top-0 left-0 h-full w-full bg-black/20 flex items-center justify-center">
          <h1 className="uppercase font-[font1] text-6xl px-8 pt-2 border-4 rounded-full">
            vioe le projet
          </h1>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
