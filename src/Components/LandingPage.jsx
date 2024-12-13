import { motion } from 'framer-motion';
import React from 'react';
import { GoArrowUpRight } from "react-icons/go";

const LandingPage = () => {
  return (
    <div data-scroll data-scroll-speed="-0.3" className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textStructure px-20 mt-40'>
        {["we create", "eye opening", "presentation"].map((item, index) => {
          return (
            <div className='masker' key={index}>
              <div className='w-fit flex items-end overflow-hidden'>
                {index === 1 && (
                  <motion.div initial={{width:0}} animate={{width:'7vw'}} transition={{ease: [0.76, 0, 0.24, 1], duration:1.2}} className='mr-[0.7vw] w-[7vw] h-[4.7vw] rounded-md -top[-1.2vw] relative overflow-hidden flex items-center'><img src="https://ochi.design/wp-content/uploads/2022/04/Favicon.png" alt="" /></motion.div>
                )}
                <h1 className='uppercase text-8xl font-["Founders Grotesk"] leading-[5.5vw] tracking-tighter font-semibold'>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className='border-t-2 border-zinc-800 mt-32 flex justify-between items-center py-5 px-20'>
        {["For public and private companies", "From the first pitch to IPO"].map((item, index) => {
          return (
            <p className='text-md tracking-tight leading-none' key={index}>
              {item}
            </p>
          );
        })}
        <div className='start flex items-center gap-2'>
          <div className='border-[1px] border-zinc-600 px-3 py-1 tracking-wide rounded-full uppercase'>
            Start The Project
          </div>
          <div className='w-8 h-8 flex items-center justify-center border-[2px] border-zinc-600 rounded-full'>
            <GoArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
