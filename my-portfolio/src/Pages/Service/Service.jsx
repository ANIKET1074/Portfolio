import React from "react";
import "./Service.css";
import { services } from "../../Data/Service";
import ServicesCard from "../../Components/ServicesCard";
const Service = () => {
  const service = services.data;
  return (
    <>
      <div className="services min-h-fi mt-[5rem]" id="service">
        <h2 className="font-bold text-5xl text-center">Services</h2>
        <div className="serv flex gap-[3.25rem] flex-wrap justify-center mt-[3rem] w-[70%] m-auto border-2 rounded-[1rem] border-[#5219d1] p-[2rem] shadow-2xl">
          {service.map((dt, index) => {
            return <ServicesCard key={index} image={dt.image} name={dt.name} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Service;
