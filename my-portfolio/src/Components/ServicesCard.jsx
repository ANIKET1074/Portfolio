import React from "react";
import "../Pages/Service/Service.css";
const ServicesCard = ({ image, name }) => {
  return (
    <>
      <div className="service w-[10rem] h-[10rem] border border-[#5219d1] rounded-[0.5rem] justify-center flex flex-col gap-3 items-center">
        <img src={image} alt="" className="w-[2.5rem]" />

        <h2 className="text-[0.85rem] text-center">{name}</h2>
      </div>
    </>
  );
};

export default ServicesCard;
