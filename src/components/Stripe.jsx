import React from "react";

function Stripe({ val }) {
  return (
    <div className="w-[16.8%] px-6 py-6  border-r-[1.2px] border-zinc-700 flex items-center justify-between">
      <img src={val.url} alt="" />
      <span className="font-semibold"> {val.number} </span>
    </div>
  );
}

export default Stripe;
