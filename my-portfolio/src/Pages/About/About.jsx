import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="About min-h-[90vh] md:mt-[8rem] gap-5" id="about">
        <h1 className="text-5xl font-bold text-center">About me</h1>
        <div className="content flex mt-[2rem]">
          <div className="left flex-col flex-[50%]">
            <div className="ctxt md:px-[7rem] mt-6 min-h-[35%]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Cupiditate, voluptatum quam perferendis sapiente cumque eos
              commodi corrupti esse consectetur saepe accusantium ea quas quos
              aut tenetur? Quaerat architecto, sapiente quae modi nobis ad, odio
              facere minima numquam provident harum incidunt. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Ut id, ad officia est
              perferendis dolore dignissimos quam. Molestias enim id eius
              perspiciatis odit voluptatem illum doloribus repudiandae ipsa,
              tempora commodi voluptatum error aperiam, corporis itaque
              accusamus eos recusandae earum temporibus velit dolore cupiditate
              sequi? Cumque odit nemo, iure quasi recusandae in doloremque
              dolorem est mollitia quo perspiciatis amet debitis rem quia
              nesciunt, deleniti, cum tempora dignissimos. Temporibus, quam
              consequuntur. Ex ab corrupti qui dolores sed totam et ea
              perspiciatis repellendus suscipit, praesentium deserunt recusandae
              possimus culpa accusantium voluptatibus asperiores enim molestias
              exercitationem eos dolor a. Quis, commodi? Et, esse quia?.
            </div>
          </div>
          <div className="right flex flex-[50%] items-center justify-center mt-[2rem] aboutimage">
            <img
              src="./images/photo_2020-12-05_18-43-24.jpg"
              alt=""
              className="w-[30rem] h-[28rem] rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
