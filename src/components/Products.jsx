import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  var data = [
    {
      title: "Arqitel",
      desc: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "Cula",
      desc: "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: false,
    },
    {
      title: "Layout Land",
      desc: "An interactive learning game that can educate and entertain you on the basics of web layouts in Webflow.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      desc: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
    {
      title: "Maniv",
      desc: "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
      case: false,
    },
    {
      title: "Singularity",
      desc: "A new site for Singularity that supports their growth and showcases their true identity as industry innovators.",
      live: true,
      case: false,
    },
    {
      title: "Like Magic",
      desc: "We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.",
      live: true,
      case: true,
    },
    {
      title: "Silvr",
      desc: "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
      live: true,
      case: false,
    },
    {
      title: "Rainfall",
      desc: "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      live: true,
      case: true,
    },
    {
      title: "Intenseye",
      desc: "A brand new website for Intenseye just before their $64M Series.",
      live: true,
      case: false,
    },
    {
      title: "Remind",
      desc: "Remind got a new website that is designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.",
      live: true,
      case: true,
    },
    {
      title: "Summon",
      desc: "We created a website for Summon that showcases their innovative technology through animated and captivating UI components and emerging technologies.",
      live: true,
      case: true,
    },
    {
      title: "Jungle",
      desc: "We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.",
      live: true,
      case: true,
    },
    {
      title: "Candid Health",
      desc: "A complete redesign of a health-startup website, followed by cutting edge development.",
      live: true,
      case: false,
    },
    {
      title: "Yahoo!",
      desc: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
    },
    {
      title: "YIR 2022",
      desc: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2021",
      desc: "We celebrated our first year with a Showcase Website that reflects on a year of growth, building an awesome team & culture, defining our brand, and more.",
      live: true,
      case: false,
    },
    {
      title: "Showcase",
      desc: "Our OMR22 Masterclass teaches how to create a showcase website, and we made a showcase website about showcase websites to promote the art of showcasing.",
      live: true,
      case: false,
    },
    {
      title: "Weglot",
      desc: "We made a fun and engaging showcase website for our friends from Weglot to promote their no-code translation solution in Germany.",
      live: true,
      case: false,
    },
    {
      title: "RocketChat",
      desc: "We built a beautiful, clean website in Webflow for RocketChat that is scalable, easy to maintain and built in a modular manner for future changes.",
      live: true,
      case: false,
    },
  ];

  const [pos, setpos] = useState();

  var vdata = [
    "./video/Arqitel project video 4_3.webm",
    "./video/Cula_promo_new_4_3.mp4",
    "./video/webflow-education-promo.mp4",
    "./video/TTR project video 4_3_H.264.webm",
    "./video/Maniv-Compressed.mp4",
    "./video/Singularity Promo 4_3 2024.webm",
    "./video/weglotlikemagic.webm",
    "./video/Silvr.webm",
    "./video/rainfall.webm",
    "./video/Intenseye_project_video_4_3.webm",
    "./video/remind.webm",
    "./video/summon.webm",
    "./video/jungle-4-3-.webm",
    "./video/Candid Health 4_3_H.264.webm",
    "./video/yahoo.webm",
    "./video/YIR website 2022 4_3_VP9.webm",
    "./video/yearinreview.webm",
    "./video/showcase_4_3.mp4",
    "./video/weglot.webm",
    "./video/rocketchat.webm",
  ];

  const mover = (val) => {
    setpos(val * 23);
  };
  return (
    <div className="mt-32 relative">
      {data.map((elem, index) => (
        <Product key={index} val={elem} mover={mover} count={index} />
      ))}
      <div className="absolute h-full w-full top-0 pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + "rem" }}
          className="window absolute w-[30rem] rounded-xl h-[23rem] left-[48%]  overflow-hidden  "
        >
          {vdata.map((item, index) => (
            <motion.div
              animate={{ y: -pos + "rem" }}
              className=" w-full h-full object-cover "
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            >
              <video
                muted
                autoPlay
                loop
                className="w-full h-full object-cover"
                src={item}
              ></video>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
