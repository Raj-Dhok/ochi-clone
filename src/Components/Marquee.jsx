import React from 'react';
import { motion } from 'framer-motion';

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".001" className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#014C43]">
      <div className="text border-t-2 border-b-2 border-zinc-500 flex whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[20vw] font-['Founders Grotesk'] uppercase font-bold -mb-20 -mt-28 tracking-tighter pr-10"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[20vw] font-['Founders Grotesk'] uppercase font-bold -mb-20 -mt-28 tracking-tighter pr-10"
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
