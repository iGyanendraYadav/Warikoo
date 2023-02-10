import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useState } from "react";
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Image from 'next/image';

const Navbar = () => {
  const router = useRouter();
let Pages = [
  {name: "Home", link: "/"},
  {name: "Do Epic Shit Book", link: "/doepicshitbook"},
  {name: "Speaking", link: "/speaking"},
  {name: "Investing", link: "/investing"},
  {name: "Contact", link: "/contact"},
  {name: "About", link: "/about"}
]

const [open, setOpen] = useState(false);
  return (
    <>
    
    <Head>
        <title>ankur warikoo | Official Website | Entrepreneur, Public Speaker, Founder of Nearbuy, YouTuber, Angel Investor</title>
        <meta name="description" content="ankur warikoo is an Entrepreneur, Public speaker, Angel investor, YouTuber and founder of Nearbuy." />
        <link rel="icon" href={"/fav.webp"}/>
        
      </Head>

      <div className="shadow-md w-full  fixed top-0 left-0 z-10">
        <div className="md:flex justify-between md:justify-between lg:justify-between 2xl:justify-center items-center bg-black py-2 md:py-2 px-7 md:px-5 lg:px-20 ">
          <div className="font-bold text-2xl cursor-pointer flex items-center text-white md:max-w-screen-md lg:max-w-screen-2xl">
           
              <span className="text-2xl md:text-2xl lg:text-3xl mr-1 pt-2 ">
              <Link href="/"><Image src="/logo_vector.webp" width={65} height={30} alt="logo" className='h-12' /></Link> 
              </span>
          
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl text-white absolute right-8 top-6 cursor-pointer md:hidden"
          >
            {open ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
          <ul
            className={`md:flex md:items-center justify-between md:pb-0 pb-2 absolute md:static text-white bg-black md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open
                ? "top-16 opacity-100"
                : "top-[-500px] opacity-0 md:opacity-100"
            } `}
          >
            {Pages.map((page, i) => {
              return (
                <li
                  key={i}
                  className="md:ml-8 text-xl md:my-0 my-5 cursor-pointer "
                >
                    
                  <Link href={page.link} className={`hover:text-gray-400 ${router.pathname === page.link} ? "text-blue-600" : "text-white"}`}>{page.name}</Link>
                </li>
              );
            })}


          </ul>
        </div>
      </div>







    </>
  )
}

export default Navbar
