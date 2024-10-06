import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
function Card({ width, start, para, hover }) {
  const [isHover, setHover] = useState(false);

  function mouseEnter() {
    setHover(true);
  }

  function mouseLeave() {
    setHover(false);
  }

  const HoverStyle = {
    backgroundColor: isHover ? "rgb(124 58 237)" : "",
  };
  return (
    <div
      className={`w-1/2  bg-zinc-800  p-5 rounded-xl ${width} min-h-[30rem] flex items-center flex-col justify-between `}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
      style={HoverStyle}
    >
      <div className="upper w-full">
        <div className="w-full flex justify-between items-center">
          <h3>Get In Touch</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-10">Some heading</h1>
      </div>
      <div className="lower w-full   ">
        {start && (
          <>
            <h1 className="text-8xl font-medium capitalize tracking-tight leading-none  ">
              start a project
            </h1>
            <button className="px-6 py-2 border-[1px] mt-3 rounded-full border-zinc-50">
              Contact-us
            </button>
          </>
        )}
        {para && (
          <>
            <p className="text-sm text-zinc-500 font-medium">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default Card;
