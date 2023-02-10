import Image from 'next/image'
import React from 'react'

const Investing = () => {
  return (
    <>
        <div className="contact relative">
            <Image height={700} width={1500} src="/aw.jpg" alt="ankoor" />
            <h1 className="absolute top-20 left-10 lg:top-44 lg:left-28 text-3xl lg:text-7xl text-white font-bold">investing</h1>
        </div>

        <div className="container py-16 w-[92%] lg:w-[78%] flex flex-col text-gray-800 ">
          <p className="text-xl text-left pl-12 lg:pl-[295px]">I have been investing as an angel since 2015 and have made 30+ investments. But I get more joy mentoring and coaching founders.</p>
          <p className="lg:py-5 py-5 text-xl text-left pl-12 lg:pl-[295px]">I am aware that there is a lot beyond capital that helps a startup succeed. Through a combination of investing and coaching, I wish to help entrepreneurs around 3 things</p>
          <p className="lg:py-1 text-xl text-left pl-12 lg:pl-[295px] font-bold">Get to product-market-fit</p>
          <p className="lg:py-1 text-xl text-left pl-12 lg:pl-[295px] font-bold">Attract and retain the best talent and</p>
          <p className="lg:py-1 text-xl text-left pl-12 lg:pl-[295px]  font-bold">Manage their own emotions as a founder</p>

          <p className="lg:py-1 py-1 text-xl text-left pl-12 lg:pl-[295px]">If you feel I can help, please write to me on <span className='text-blue-600 cursor-pointer'>warikoo@ankurwarikoo.com</span></p>
        </div>
    </>
  )
}

export default Investing
