import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact w-full " id="contact">
        <div className=" flex flex-wrap text-black rounded-xl mt-[3rem]">
          <div className="flex-1 flex items-center flex-col mt-[2rem] w-[100%] ">
            <h2 className="font-bold text-center text-4xl text-white">
              Contact
            </h2>
            <div className="left mb-[1rem] mt-[1rem] mx-[8rem] flex flex-col rounded-xl bg-white p-[1.5rem] md:w-[60%] contactPage">
              <form action="" className="flex flex-col gap-5 rounded-xl">
                <h2 className="text-center rounded-xl mt-[0.5rem] text-xl">
                  Send a Message
                </h2>
                <div className="flex flex-col gap-1 rounded-xl">
                  <span className="mx-[1rem]">Name</span>
                  <input
                    style={{ outline: "none", padding: "4px 6px" }}
                    type="text"
                    name="name"
                    id="name"
                    className="border-b-2 mx-[1rem] border-black"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1 rounded-xl">
                  <span className="mx-[1rem]">Email</span>
                  <input
                    style={{ outline: "none", padding: "4px 6px" }}
                    type="email"
                    name="email"
                    id="email"
                    className="border-b-2 mx-[1rem] border-black"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1 rounded-xl">
                  <span className="mx-[1rem]">Message</span>
                  <textarea
                    style={{ resize: "none" }}
                    name="tArea"
                    id=""
                    cols="30"
                    rows="5"
                    className="mx-[1rem] border-2 rounded-lg p-1 border-black"
                    placeholder="Type a message"
                  ></textarea>
                  <div className="submit flex flex-col gap-1 items-center justify-center">
                    <input
                      type="submit"
                      name="submit"
                      id="submit"
                      className="cursor-pointer rounded-full border-2 bg-[#521d91] text-white shadow-lg w-[6rem] mt-[1rem] p-2"
                      value="Submit"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="f-right flex-1 flex flex-col gap-[2.5rem] justify-center h-[320px] m-auto px-3">
            <div className="mail flex gap-4 w-[100%] items-center">
              <img
                src="./images/svg-icons/at.svg"
                alt=""
                className="border-2 border-white rounded-full w-[2.3rem] p-1"
              />
              <span className="text-white text-lg">
                aniketjadav2002@gmail.com
              </span>
            </div>
            <div className="mail flex gap-4 w-[100%] items-center">
              <img
                src="./images/svg-icons/phone.svg"
                alt=""
                className="border-2 border-white rounded-full w-[2.3rem] p-1"
              />
              <span className="text-white text-lg">+91 9106881074</span>
            </div>
            <div className="mail flex gap-4 w-[100%] items-center">
              <img
                src="./images/svg-icons/home.svg"
                alt=""
                className="border-2 border-white rounded-full w-[2.3rem] p-1"
              />
              <span className="text-white text-lg">
                201 Kalpataru Apartment Jalalpore road Navsari
              </span>
            </div>
            <div className="links flex gap-[2rem] justify-start items-center">
              <a
                href="https://github.com/ANIKET1074"
                className="github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./images/icons/github.svg"
                  alt=""
                  className="w-[2rem] hover:scale-110 duration-500 ease-in-out"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/aniket-jadav-9b77a7211/"
                className="linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./images/icons/linkedin.svg"
                  alt=""
                  className="w-[2rem] hover:scale-110 duration-500 ease-in-out"
                />
              </a>
              <a
                href="https://twitter.com/Aniket_Jadav_19"
                className="twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./images/icons/twitter.svg"
                  alt=""
                  className="w-[2rem] hover:scale-110 duration-500 ease-in-out"
                />
              </a>
              <a
                href="https://www.instagram.com/aniket_jadav_19"
                className="instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./images/icons/instagram.svg"
                  alt=""
                  className="w-[2rem] hover:scale-110 duration-500 ease-in-out"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
