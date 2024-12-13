import { div } from 'framer-motion/client'
import React from 'react'

const About = () => {
  return (
      
    <div className='w-full p-14 bg-[#CCEB68] rounded-tl-3xl rounded-tr-3xl text-black'> 
    <h1 className='font-["Neue Montreal"] text-[4vw] leading-[3.5vw] tracking-tight'>
        Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, exa­plain com­plex ideas, and hire great peo­ple.
    </h1>
    <div className='w-full border-t-[1px] mt-24 border-[#788a3d]'>
      <p className='font-["Neue Montreal"] text-[1.1vw] py-3'>What you can expect:</p>
      <div className='pl-[53%] text-[1.1vw] flex -mt-[2.5vw]'>
      <p>
      We create tailored presentations to help<br/> you persuade your colleagues, clients, or<br/>investors. Whether it’s live or digital,<br/>delivered for one or a hundred people.
      <br/>
      <br/>
      We believe the mix of strategy and<br/>design (with a bit of coffee) is what<br/>makes your message clear, convincing,<br/>and captivating.</p>
      
      <div className='flex flex-col font-["Neue Montreal"] font-[1,1vw] pt-[5.5vw] pl-[20vh]'>
        <h4 className='pb-5'>S:</h4>
        <a href="">Instagram</a>
        <a href="">BeHhance</a>
        <a href="">Facebook</a>
        <a href="">Linkedin</a>
      </div>

      </div>
      <div className='flex gap-5 w-full border-t-[1px] mt-24 border-[#788a3d] pt-4'>
      <div className='w-1/2'>
      <h1 className='text-5xl'>Our approach:</h1>
      <button className='flex gap-10 items-center px-6 py-4 bg-zinc-900 text-white uppercase rounded-full mt-6'>Read More
      <div className='w-2 h-2 bg-white rounded-full'></div>
      </button>
      </div>
      <div className='w-1/2 h-[70vh]  '><img className='rounded-2xl' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" /></div>
      </div>
    </div>
</div>

  )
}

export default About