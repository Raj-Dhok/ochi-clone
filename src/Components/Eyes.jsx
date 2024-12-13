import React, { useEffect, useState } from 'react'

function Eyes () {
    const [rotate, setRotate] = useState(0)
    useEffect(()=>{
        window.addEventListener("mousemove",(e)=>{
            let mouseX=  e.clientX;
            let mouseY = e.clientY;
            console.log(mouseX,mouseY);
            let deltaX= mouseX-window.innerWidth/2;
            let deltaY= mouseY-window.innerHeight/2;

            var angel = Math.atan2(deltaY,deltaX)*(180/Math.PI);
            setRotate(angel-180);
        })
    })
  return (
    <div className='eyes w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-section data-scroll-speed="-0.7" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className='flex absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] gap-10'>
        <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
        <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
        <div style={{transform:`translate(-50% , -50%) rotate(${rotate}deg)`}}
        className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-7'>
        <div  className='w-7 h-7 rounded-full bg-zinc-100'>

        </div>
        </div>
            
            </div>
        </div>
        <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
        <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
        <div style={{transform:`translate(-50% , -50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-7'>
        <div   className='w-7 h-7 rounded-full bg-zinc-100'>
        </div>
        </div>
            
            </div>
            
            </div>
        </div>
        </div>
    </div>
  )
}

export default Eyes