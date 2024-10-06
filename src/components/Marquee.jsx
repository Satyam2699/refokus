import React from "react";

function Marquee({ imageUrls }) {
  return (
    <div className="overflow-x-hidden">
      <div className="flex w-full items-center justify-center gap-20 py-6 animate-marquee  ">
        {imageUrls.map((url, index) => (
          <img key={index} className="w-24" src={url} />
        ))}
        {imageUrls.map((url, index) => (
          <img src={url} key={index} />
        ))}
        {imageUrls.map((url, index) => (
          <img key={index} className="w-24" src={url} />
        ))}
        {imageUrls.map((url, index) => (
          <img src={url} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Marquee;
