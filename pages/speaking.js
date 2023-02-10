import Image from 'next/image'
import React from 'react'

const Speaking = () => {
  return (
    <>
        
        <div className="contact relative ">
            <Image height={700} width={1500} src="/aw.jpg" alt="ankoor" />
            <h1 className="absolute top-20 left-10 lg:top-44 lg:left-28 text-3xl lg:text-7xl text-white font-bold">public<br/> speaking</h1>
        </div>

        <div  className='flex flex-col py-20 lg:py-24 justify-center items-center lg:w-[98%]'>
            <Image height={400} width={400} src="/ps.webp" alt="ank" className='w-[72%] lg:w-[650px] rounded-3xl shadow-lg border border-cyan-500' />
        </div>

        
        <div className="container w-[92%] lg:w-[78%] flex flex-col text-gray-800 ">
          <p className="text-xl text-left pl-12 lg:pl-[295px]">I was terrified of the stage as a young kid.</p>
          <p className="text-xl py-3 lg:py-3 text-left pl-12 lg:pl-[295px]">I recall my first stage appearance back in Class 6th or 7th, when I was to recite a poem as part of a recital competition.</p>
          <p className="text-xl py-3 lg:py-3 text-left pl-12 lg:pl-[295px]">I went up on stage, nervous, blurted my lines and felt relieved at the end of it. It didn’t strike me that there was no response from the audience, after I had delivered my recital.</p>
          <p className="text-xl py-3 lg:py-3 text-left pl-12 lg:pl-[295px]">I couldn’t care less, frankly. When I got back to my seat, my fellow student asked, “what was that?”</p>
          <p className="text-xl text-left pl-12 lg:pl-[295px]">“What was what?”, I asked.</p>
          <p className="text-xl text-left pl-12 lg:pl-[295px]">“No words came out of your mouth. It was moving, but there was no sound at all.”</p>
          <p className="text-xl py-3 lg:py-3 text-left pl-12 lg:pl-[295px]">Cut to this day, most audiences when they hear me often very kindly say</p>
          <p className="text-xl text-left pl-12 lg:pl-[295px]"></p>


          <div className="twowala py-8 lg:py-8 flex flex-row justify-start items-center text-left pl-12 lg:pl-[295px]">
            <div className="line bg-blue-500 h-[60px] lg:h-8 w-[8px] lg:w-[6px]"></div>
            <h1 className="text-xl px-4 lg:px-5 font-bold">“one of the best speakers we have heard from”.</h1>
          </div>



        </div>

{/* company wala section  */}
<div className="company flex flex-col justify-center items-center mt-16 lg:mt-10 ">
   
    <Image height={600} width={600} src="/company.webp" alt="companies" className='w-[85%] lg:w-[60%] mt-0 lg:mt-12' />
    <h1 className="name py-16 lg:py-12 text-5xl text-center lg:text-6xl font-semibold w-[80%] lg:w-[60%]">connect with me for a speaking engagement?</h1> 
    <p className="text-xl text-center font-bold w-[85%] lg:w-[60%] mt-7 lg:mt-12">Fill the form below to connect with me for a speaking engagement
at your company, school, college or at an event.</p>
    <p className="text-xl text-center pt-5 w-[85%] lg:w-[60%]"><i>I am usually booked out 4-6 weeks in advance, so please provide me with that flexibility.</i></p>
    <div className="flex flex-col lg:flex-row pt-14 lg:pt-14 pb-12 lg:pb-28 items-center lg:space-x-10">
      <button className='rounded-full bg-blue-500 text-white font-bold hover:bg-blue-600 h-12 px-10'>FILL THE FORM</button>
      <button className='rounded-full my-5 lg:my-0 bg-gray-200 hover:bg-gray-300 text-black font-bold h-12 px-14 '>EMAIL ME</button> 
    </div>  
</div>



    </>
  )
}

export default Speaking
