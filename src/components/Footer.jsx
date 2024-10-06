import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-5 flex items-center justify-between">
        <div className="flex items-center gap-8 capitalize ">
          {[
            "privacy policy",
            "cookie policy",
            "impressum",
            "terms",
            "webflow agency ",
          ].map((item, index) => (
            <a key={index} className="text-zinc-500 text-sm">
              {item}
            </a>
          ))}
        </div>
        <img
          src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg"
          className="w-40"
          alt=""
        />
      </div>
    </div>
  );
}

export default Footer;
