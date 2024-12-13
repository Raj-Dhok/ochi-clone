import { motion, useAnimation } from "framer-motion";
import React from "react";

const Featured = () => {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-10">
      <div className="w-full px-20 border-b-[2px] border-zinc-700 pb-20">
        <h1 className='text-6xl font-["Neue Montreal"] tracking-tight'>
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards flex gap-10 mt-3">
          
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer w-1/2 h-[75vh] relative"
          >
            <div className="flex items-center gap-3 text-left text-sm mt-4 uppercase mb-1">
              <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
              Cardboard Spaceship
            </div>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <h1 className='absolute flex overflow-hidden text-[#cdea68] text-8xl font-["Founders Grotesk"] left-full font-semibold leading-none tracking-tight z-[9] -translate-x-1/2 top-1/2 -translate-y-1/2 uppercase'>
                {"Cardboard Spaceship".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.02 }}
                    className="inline-block"
                    key={index}
                  >
                    {item === " " ? "\u00A0" : item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
                alt=""
              />
            </div>
          </motion.div>

          
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer w-1/2 h-[75vh] relative"
          >
            <div className="flex items-center gap-3 text-left text-sm mt-4 uppercase mb-1">
              <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
              AH2 & Matt Horn
            </div>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <h1 className='absolute flex overflow-hidden text-[#cdea68] text-8xl font-["Founders Grotesk"] right-full font-semibold leading-none tracking-tight z-[9] translate-x-1/2 top-1/2 -translate-y-1/2 uppercase'>
                {"AH2 & Matt Horn".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.02 }}
                    className="inline-block"
                    key={index}
                  >
                    {item === " " ? "\u00A0" : item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
