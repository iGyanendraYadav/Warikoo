import Image from 'next/image';
import React from 'react'
import { BiRadioCircleMarked } from 'react-icons/bi';
import { BsStarFill } from 'react-icons/bs';

const DoEpicShitbook = () => {
  return (
    <>

      {/* DO EPIC SHIT */}
<div className="book flex lg:flex-row flex-col bg-gray-900 justify-evenly pt-16 lg:pt-16 lg:pb-10 lg:px-28 ">
  <div className="leftwala flex flex-col w-[90%] justify-start items-start mx-7 lg:mx-0 lg:w-auto mt-5 lg:mt-20 mb-16 lg:mb-16">
      <p className="text-lg font-bold text-gray-400">A National Bestseller</p>
      <h1 className="text-6xl lg:text-8xl font-extrabold lg:font-bold text-white ">DO<br/>EPIC<br/>SHIT</h1>
      <p className="mt-8 lg:mt-8 w-[94%] lg:w-auto text-base lg:text-xl text-white"><b>150,000+</b> copies sold and counting!!</p>
      <p className="mt-2 lg:mt-2 w-[94%] lg:w-auto text-base lg:text-xl text-white">Get yours here:</p>
      <Image width={100} height={100} src="/amazon.webp" alt="BuyAtAmazon" className='w-[32%] h-[32%] lg:w-[20%] lg:h-[20%] mx-10 lg:mx-0 mt-5 lg:mt-8'/>


      <div className="links flex flex-row flex-wrap text-lg font-bold mt-5 lg:mt-8 space-x-3 text-yellow-400">
        <span className='cursor-pointer'>Hardcover</span><span className='text-gray-400'>|</span><span className='cursor-pointer'>Paperback</span><span className='text-gray-400'>|</span><span className='cursor-pointer'>Kindle</span><span className='text-gray-400'>|</span><span className='cursor-pointer'>Hindi</span><span className='text-gray-400'>|</span><span className='cursor-pointer'>Tamil</span><span className='text-gray-400'>|</span><span className='cursor-pointer'>Marathi</span>
      </div>

      <span className='text-lg font-bold space-x-3 text-yellow-400 cursor-pointer mt-4 lg:mt-3'>Order bulk copies here</span>

      <div className="links flex flex-row  text-lg font-bold space-x-3 text-yellow-400">
        <span className='cursor-pointer'>Order in the US </span><span className='text-gray-400'>|</span><span className='cursor-pointer'> Order in the UK</span>
      </div>
  </div>

  <div className="rightwala lg:w-[40%] items-center justify-center mt-4 lg:mt-48 mb-10 lg:mb-16">
      <Image width={350} height={600} src="/epic.webp" alt="DO EPIC SHIT" className=' w-[85%] lg:w-auto lg:scale-[1.7] mx-8 lg:-mx-10' />
  </div>
</div>

      {/* What's inside? */}
<div className="book flex lg:flex-row flex-col bg-white justify-evenly lg:px-28 pt-20 pb-0 lg:pb-0 lg:pt-0 ">
<div className="leftpart lg:w-[40%] items-center justify-center mt-4 lg:mt-32 mb-10 lg:mb-16">
      <Image height={250} width={400} src="/e1.webp" alt="ank1" className=' rounded-2xl shadow-md shadow-slate-500 w-[85%] lg:w-auto mx-8 lg:-mx-10' />
      <Image height={300} width={400}  src="/e2.webp" alt="ank2" className='hidden lg:block lg:w-[65%] lg:mx-36 rotate-6 hover:rotate-12 rounded-2xl shadow-md shadow-slate-500 ' />
  </div>
  <div className="rightpart flex flex-col w-[90%] justify-start items-start mx-7 lg:mx-0 lg:w-auto mt-5 lg:mt-20 mb-16 lg:mb-16">
      <h1 className="text-4xl lg:text-5xl text-black">What's inside?</h1>
      <p className="text-xl py-4 text-gray-500">300 pages. One page a day. Your daily read for a year :)</p>
      

      <div className="chapters flex flex-row space-x-2">
        <div className="icons"><BiRadioCircleMarked className='text-3xl text-amber-900'/></div>
        <div className="chapterNum flex flex-col w-[85%]">
              <h1 className="text-xl font-bold text-black">Chapter 1: Success (and failure)</h1>
              <p className="text-lg">success definitions, and using failures as an advantage</p>
        </div>
      </div>

      <div className="chapters flex flex-row space-x-2">
        <div className="icons"><BiRadioCircleMarked className='text-3xl text-amber-900'/></div>
        <div className="chapterNum flex flex-col w-[85%]">
              <h1 className="text-xl font-bold text-black">Chapter 2: Habits</h1>
              <p className="text-lg">small habits for big things and multiple opportunities </p>
        </div>
      </div>

      <div className="chapters flex flex-row space-x-2">
        <div className="icons"><BiRadioCircleMarked className='text-3xl text-amber-900'/></div>
        <div className="chapterNum flex flex-col w-[85%]">
              <h1 className="text-xl font-bold text-black">Chapter 3: Awareness</h1>
              <p className="text-lg">better choices from a point of awareness</p>
        </div>
      </div>

      <div className="chapters flex flex-row space-x-2">
        <div className="icons"><BiRadioCircleMarked className='text-3xl text-amber-900'/></div>
        <div className="chapterNum flex flex-col w-[85%]">
              <h1 className="text-xl font-bold text-black">Chapter 4: Entrepreneurship</h1>
              <p className="text-lg">decades of entrepreneurship, reflections and learnings </p>
        </div>
      </div>

      <div className="chapters flex flex-row space-x-2">
        <div className="icons"><BiRadioCircleMarked className='text-3xl text-amber-900'/></div>
        <div className="chapterNum flex flex-col w-[85%]">
              <h1 className="text-xl font-bold text-black">Chapter 5: Money</h1>
              <p className="text-lg">mistakes, investments, lies, and lessons</p>
        </div>
      </div>

      <div className="chapters flex flex-row space-x-2">
        <div className="icons"><BiRadioCircleMarked className='text-3xl text-amber-900'/></div>
        <div className="chapterNum flex flex-col w-[85%]">
              <h1 className="text-xl font-bold text-black">Chapter 6: Relationships</h1>
              <p className="text-lg">with others and yourself</p>
        </div>
      </div>
</div>
</div>


      {/* What are the readers saying? */}
  <h1 className="text-4xl font-bold text-center text-white bg-gray-900 pt-20 lg:pt-20 lg:pb-10"> What are the readers saying?</h1>
  <div className="reviews flex flex-col pt-10 lg:pt-0 lg:flex-row bg-gray-900 lg:px-32 px-10 space-y-12 lg:space-x-14 lg:space-y-10 ">
      <div className="firstOne flex flex-col  lg:w-[30%] lg:pt-10 text-center lg:text-left items-center lg:items-start">
            <h1 className="text-xl font-bold text-yellow-600 ">Omkar</h1>
            <p className="samiksha text-xl text-white py-4 lg:py-4">“DO EPIC SHIT” is the first book that I have completed reading in merely 24 hours.</p>
            <div className="stars flex flex-row text-yellow-600 text-base lg:space-x-1 ">
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            </div>
      </div>

      <div className="2ndOne flex flex-col lg:w-[30%] text-center lg:text-left items-center lg:items-start ">
            <h1 className="text-xl font-bold text-yellow-600">Anurag</h1>
            <p className="samiksha text-xl text-white py-4 lg:py-4">You can hear his voice in your head as a mentor/guide and the genuineness of his way of bringing things and situations alive is touching.</p>
            <div className="stars flex flex-row text-yellow-600 text-base lg:space-x-1">
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            </div>
      </div>

      <div className="3rdOne flex flex-col lg:w-[30%] text-center lg:text-left items-center lg:items-start">
            <h1 className="text-xl font-bold text-yellow-600">Ravi</h1>
            <p className="samiksha text-xl text-white py-4 lg:py-4">This book is a blessing</p>
            <div className="stars flex flex-row text-yellow-600 text-base lg:space-x-1">
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            </div>
      </div>
  </div>

  <div className="reviews2 flex flex-col lg:flex-row bg-gray-900 pt-8 lg:pt-0 px-10 space-y-12 pb-14 lg:pb-32 lg:px-32 lg:space-x-14 lg:space-y-10 items-center ">
      <div className="4thOne flex flex-col lg:w-[30%] lg:pt-32 text-center lg:text-left items-center lg:items-start">
            <h1 className="text-xl font-bold text-yellow-600">Sahendra</h1>
            <p className="samiksha text-xl text-white py-4 lg:py-4">Ankur takes us on a journey, where each of us shall relate to the episodes of events in some way or the other. Ever wished to decode DO EPIC SHIT? You would not wish to miss this READ – a possession for life.</p>
            <div className="stars flex flex-row text-yellow-600 text-base lg:space-x-1">
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            </div>
      </div>

      <div className="5thOne flex flex-col lg:w-[30%] text-center lg:text-left items-center lg:items-start">
            <h1 className="text-xl font-bold text-yellow-600">Srishti</h1>
            <p className="samiksha text-xl text-white py-4 lg:py-4">1.Seedhi baat no Bakwas
                                                                  2.Gagar me Sagar
                                                                  3.Gyan ke Bhandare ka Prasad
                                                                  Loot sako to loot lo
                                                                  4.Har ek page, pehle se bhi tej
</p>
            <div className="stars flex flex-row text-yellow-600 text-base lg:space-x-1">
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            </div>
      </div>

      <div className="6thOne flex flex-col lg:w-[30%] text-center lg:text-left items-center lg:items-start">
            <h1 className="text-xl font-bold text-yellow-600">Ambika</h1>
            <p className="samiksha text-xl text-white py-4 lg:py-4">The letter at the end of Do Epic Shit which warikoo has written to their children is priceless, very heartfelt. I am assuming that you have written them for me too.</p>
            <div className="stars flex flex-row text-yellow-600 text-base lg:space-x-1">
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            <BsStarFill/>
            </div>
      </div>
  </div>


  {/* Love pouring in from all over the world   */}
<h1 className="lg:text-5xl text-4xl w-[90%] lg:w-auto  font-bold text-center text-gray-800 bg-white pt-16 pb-10 lg:pt-16 lg:pb-10">Love pouring in from all over the world</h1>

<div className="picsReview flex flex-col lg:mt-10 lg:flex-row justify-center items-center lg:space-x-14">
      <Image height={400} width={400} src="/pic1.webp" alt="pic1" className='lg:w-[38%] lg:h-[38%] w-[90%] h-[90%]' />
      <Image height={400} width={400} src="/pic2.webp" alt="pic2" className='lg:w-[36.7%] lg:h-[36.7%] w-[90%] h-[90%] mt-8 lg:mt-0' />
</div>

<div className="picsReview2 flex flex-col mt-8 lg:mt-16 lg:flex-row justify-center items-center lg:space-x-14">
      <Image height={400} width={400} src="/pic3.webp" alt="pic3" className='lg:px-2 lg:w-[37%] lg:h-[37%] w-[90%] h-[90%]' />
      <Image height={400} width={400} src="/pic4.webp" alt="pic4" className='lg:w-[38%] lg:h-[39%] w-[90%] h-[90%] mt-8 lg:mt-0' />
</div>


      {/* Get yours here */}

      <h1 className="lg:text-3xl text-3xl font-bold text-gray-700 text-center pt-10 lg:pt-10">Get yours here</h1>
    <div className="leftwala flex flex-col w-[90%] justify-center items-center mx-7 lg:mx-0 lg:w-auto mt-5 lg:mt-0 mb-16 lg:mb-16">

      <Image height={100} width={100} src="/amazon.webp" alt="BuyAtAmazon" className='w-[32%] h-[32%] lg:w-[10%] lg:h-[10%] mx-10 lg:mx-0 mt-2 lg:mt-5'/>
      <div className="links flex flex-row flex-wrap w-[83%] lg:w-auto text-lg mt-5 lg:mt-5 space-x-3 text-blue-500">
        <span className='cursor-pointer'>Hardcover</span><span className='text-gray-400'>|</span><span className='cursor-pointer'>Paperback</span><span className='text-gray-400'>|</span><span className='cursor-pointer'>Kindle</span><span className='text-gray-400'>|</span><span className='cursor-pointer'>Hindi</span><span className='text-gray-400'>|</span><span className='cursor-pointer'>Tamil</span><span className='text-gray-400'>|</span><span className='cursor-pointer'>Marathi</span>
      </div>

      <span className='text-lg  space-x-3 text-blue-500 cursor-pointer mt-4 lg:mt-3'>Order bulk copies here</span>

      <div className="links flex flex-row  text-lg space-x-3 text-blue-500">
        <span className='cursor-pointer'>Order in the US </span><span className='text-gray-400'>|</span><span className='cursor-pointer'> Order in the UK</span>
      </div>
  </div>



        {/* Warikoo Circle */}

        <div className="book flex lg:flex-row flex-col justify-evenly ">
  <div className="leftwala lg:w-[40%] items-center justify-center mt-2 lg:mt-24 mb-10 lg:mb-16">
      <Image height={400} width={400} src="/wc.webp" alt="wc" className='wc lg:mx-10 mx-7 lg:w-auto w-[85%] rounded-full' />
  </div>
  <div className="rightwala flex flex-col w-[90%] justify-start items-start mx-7 lg:mx-0 lg:w-[40%] mt-5 lg:mt-10 mb-16 lg:mb-16">
      <h1 className="text-2xl lg:text-2xl font-bold text-gray-700 ">Note from warikoo</h1>
      <p className='mt-5 lg:mt-5 w-[94%] lg:w-auto text-xl'>One thing I will forever be grateful to my parents for is instilling the habit of reading in me. </p>
      <p className='mt-5 lg:mt-5 w-[94%] lg:w-auto text-xl'>Books are the gateways to heaven we keep closed, if we do not open up their pages.</p>
      <p className='mt-5 lg:mt-5 w-[94%] lg:w-auto text-xl'>I have a budget for EVERYTHING in life but not books. 

</p>
      <p className='mt-5 lg:mt-5 w-[94%] lg:w-auto text-xl'>Thus, when I wrote DO EPIC SHIT, I wanted first-time readers to get into a habit of reading books.</p>
      <p className='mt-5 lg:mt-5 w-[94%] lg:w-auto text-xl'>As you pick up one page of DO EPIC SHIT at a time, I truly hope you find yourself in these pages.</p>
      <p className='mt-5 lg:mt-5 w-[94%] lg:w-auto text-xl'>And never stop discovering this part of you, by building a lifelong relationship with reading!</p>
      <p className='mt-5 lg:mt-5 w-[94%] lg:w-auto text-xl'>Because the treasures that lie inside of you, need to be polished through someone else talking them out to you in person. Books do exactly that :)</p>
      <p className='mt-5 lg:mt-5 w-[94%] lg:w-auto text-xl'>Go, DO EPIC SHIT my friend!!</p>
      <div className="links flex flex-row flex-wrap w-[83%] lg:w-auto text-lg mt-5 lg:mt-5 space-x-3 text-blue-500">
        <span className='cursor-pointer'>Hardcover</span><span className='text-gray-400'>|</span><span className='cursor-pointer'>Paperback</span><span className='text-gray-400'>|</span><span className='cursor-pointer'>Kindle</span><span className='text-gray-400'>|</span><span className='cursor-pointer'>Hindi</span><span className='text-gray-400'>|</span><span className='cursor-pointer'>Tamil</span><span className='text-gray-400'>|</span><span className='cursor-pointer'>Marathi</span>
      </div>
  </div>
</div>






    
    
    </>
  )
}

export default DoEpicShitbook
