import React from "react";

const ProjectCard = (props) => {
  return (
    <>
      <div className="flex flex-col border shadow-2xl rounded-xl bg-[white] w-[26rem] h-[20rem] items-center">
        <img
          src={props.image}
          alt=""
          className="w-[100%] flex h-[70%] rounded-xl p-4 bg-[white]"
        />
        <div className="content flex-col gap-2">
          <h2 className="text-center bg-[white] flex-col font-semibold items-center text-[black]">
            {props.pname}
          </h2>
          <span className="text-center flex text-sm px-3 bg-[white] text-[black] mt-2">
            {props.skills}
          </span>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
