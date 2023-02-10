import Image from 'next/image';
import React from 'react'
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin, FaInstagram, FaSpotify } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
        <div className="contact relative">
            <Image height={700} width={1500} src="/aw.jpg" alt="ankoor" />
            <h1 className="absolute top-20 left-10 lg:top-44 lg:left-28 text-3xl lg:text-7xl text-white font-bold">contact</h1>
        </div>

        <h1 className="details text-gray-600 pt-28 lg:pt-20 lg:mx-40  text-3xl lg:text-5xl font-bold text-center lg:text-left">Contact me</h1>
        <h1 className="details text-gray-600 pt-2 lg:pt-1 lg:mx-40 text-xl  text-center lg:text-left">Suggestions? Or feedback? Hit me up!</h1>
        <h1 className="details text-gray-600 pt-8 lg:pt-10 lg:pb-8 lg:mx-40 text-xl font-bold text-left mx-8 ">EMAIL</h1>
        <h1 className="details text-gray-600 pt-3 lg:pt-1 lg:mx-40 text-xl  text-left mx-8">Personal: warikoo at gmail dot com</h1>
        <h1 className="details text-gray-600 pt-2 lg:pt-1 lg:mx-40 pb-10 text-xl  text-left mx-8">Business: warikoo at ankurwarikoo dot com</h1>
        
        <div className="socials flex flex-row mx-8 lg:mx-40 pb-20 lg:pb-20 space-x-2">
        <div className=" h-8 w-8 rounded-full bg-gray-600 hover:bg-gray-500 cursor-pointer relative ">
            <FaFacebook className='absolute text-xl top-[6px] left-[6px]  text-white  '/>
        </div>

        <div className=" h-8 w-8 rounded-full bg-gray-600 hover:bg-gray-500 cursor-pointer relative ">
            <FaTwitter className='absolute text-xl top-[6px] left-[6px]  text-white  '/>
        </div>

        <div className=" h-8 w-8 rounded-full bg-gray-600 hover:bg-gray-500 cursor-pointer relative ">
            <FaYoutube className='absolute text-xl top-[6px] left-[6px]  text-white  '/>
        </div>

        <div className=" h-8 w-8 rounded-full bg-gray-600 hover:bg-gray-500 cursor-pointer relative ">
            <FaLinkedin className='absolute text-xl top-[6px] left-[6px]  text-white  '/>
        </div>

        <div className="h-8 w-8 rounded-full bg-gray-600 hover:bg-gray-500 cursor-pointer relative ">
            <FaInstagram className='absolute text-xl top-[6px] left-[6px]  text-white  '/>
        </div>

        <div className=" h-8 w-8 rounded-full bg-gray-600 hover:bg-gray-500 cursor-pointer relative ">
            <FaSpotify className='absolute text-xl top-[6px] left-[6px]  text-white  '/>
        </div>
        </div>

    
    </>
  )
}

export default Contact
