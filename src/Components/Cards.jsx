import React from 'react'

const Cards = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center px-20 gap-5">
      
      <div className="containercard relative w-[150vh] h-[60vh]">
        <div className="w-full h-full rounded-xl bg-[#004d42] flex justify-center items-center">
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='absolute border-[1px] border-[#ceeb67] px-3 py-1 rounded-full left-10 bottom-10 text-[#ceeb67]'>&copy;2019-2022</button>
        </div>
      </div>

      <div className="containercard relative w-1/3 h-[60vh]">
        <div className="w-full h-full rounded-xl bg-[#212121] flex justify-center items-center">
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
            <button className='absolute border-[1px] border-white px-3 py-1 rounded-full left-6 bottom-10'>RATING 5.0 ON CLUTCH</button>
        </div>
      </div>

      <div className="containercard relative w-1/3 h-[60vh]">
        <div className="w-full h-full rounded-xl bg-[#212121] flex justify-center items-center">
            <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
            <button className='absolute border-[1px] border-white px-3 py-1 rounded-full left-6 bottom-10'>BUISNESS BOOTCAMP ALUMINI</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
