const ProjectCard = (props) => {
  return (
    <>
      <div className="lg:w-1/2 lg:h-full lg:pb-0 pb-3 group transition-all relative rounded-none hover:rounded-4xl overflow-hidden cursor-pointer ">
        <img className="h-full w-full object-cover" src={props.img1} alt="" />
        <div className=" lg:opacity-0 group-hover:opacity-100 transition-all absolute top-0 left-0 h-full w-full bg-black/20 flex items-center justify-center">
          <h1 className="uppercase font-[font1] lg:text-6xl text-xl px-8 lg:pt-2 pt-0.5 lg:border-4 border-1 rounded-full">
            vioe le projet
          </h1>
        </div>
      </div>
      <div className="lg:w-1/2 lg:h-full lg:pb-0 pb-3 group transition-all relative rounded-none hover:rounded-4xl overflow-hidden cursor-pointer ">
        <img className="h-full w-full object-cover" src={props.img2} alt="" />
        <div className=" lg:opacity-0 group-hover:opacity-100 transition-all absolute top-0 left-0 h-full w-full bg-black/20 flex items-center justify-center">
          <h1 className="uppercase font-[font1] lg:text-6xl text-xl  px-8 lg:pt-2 pt-0.5 lg:border-4 border-1 rounded-full">
            vioe le projet
          </h1>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
