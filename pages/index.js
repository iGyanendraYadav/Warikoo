import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaBookReader,
  FaPenNib,
  FaMoneyCheckAlt,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaSpotify,
  FaLinkedinIn,
  FaFacebook,
  FaBusinessTime,
} from "react-icons/fa";
import { GiSandsOfTime } from "react-icons/gi";
import { BsFillPlayBtnFill } from "react-icons/bs";
import { MdOutlineSmartDisplay } from "react-icons/md";
//import styles from '../styles/globals.css'

export default function Home() {
  return (
    <div>
      <div className="image relative w-full">
        <Image src="/ankoor.webp" height={800} width={1500} alt="image" />
        {/* <Image src="/dark3.jpg" height={800} width={1500} alt="image" /> */}
      
        <h1 className="text-3xl lg:text-5xl text-white absolute  font-bold  bottom-32 left-2 lg:bottom-[500px] lg:left-32">
        {/* <h1 className="text-3xl lg:text-5xl text-white absolute  font-bold  bottom-32 left-2 lg:bottom-96 lg:left-32"> */}
          awareness is
        </h1>
        <h1 className="text-5xl lg:text-8xl text-white absolute font-bold bottom-[88px] left-2 lg:bottom-[420px] lg:left-32">
        {/* <h1 className="text-5xl lg:text-8xl text-white absolute font-bold bottom-[88px] left-2 lg:bottom-[300px] lg:left-32"> */}
          everything
        </h1>
        <h1 className="w-[80%] lg:w-1/2 text-sm lg:text-2xl text-white absolute  bottom-10 left-2 lg:bottom-[350px] lg:left-32">
        {/* <h1 className="w-[80%] lg:w-1/2 text-sm lg:text-2xl text-white absolute  bottom-10 left-2 lg:bottom-56 lg:left-32"> */}
          Make sure all the choices you make in life come from a point of
          awareness and not ignorance.
        </h1>
      </div>
      <h1 className="text-lg text-center text-gray-500 bg-gray-300 font-bold pt-10">
        AS FEATURED ON
      </h1>
      <div className="featuredOn bg-gray-300  grid grid-cols-2 lg:grid-cols-6 gap-4  py-4 pl-10 lg:pl-14">

          <Image src="/fortune.webp" width={100} height={70} alt="fortune" className="h-8 lg:h-10" />
          <Image src="/bbc.webp" width={100} height={70} alt="bbc" className="h-8 lg:h-10" />


          <Image width={100} height={70} src="/moneycontrol.webp" alt="mc" className="h-6 w-36 lg:h-8" />
          <Image width={100} height={70} src="/tet.webp" alt="tet" className="h-6 w-36 lg:h-8" />



          <Image width={100} height={70} src="/mint.webp" alt="mt" className="h-6 lg:h-8 " />
          <Image width={100} height={70} src="/ndtv.webp" alt="ndtv" className="h-6 lg:h-8" />

      </div>

      <div className="details flex flex-col justify-center items-center pt-24">
        <h1 className="name text-7xl text-center lg:text-6xl font-semibold">
          ankur warikoo
        </h1>
        <div className="para py-5 w-[80%] text-center text-3xl container">
          warikoo is an Internet Entrepreneur based out of India and is one of
          India’s top content creators. He is also a bestselling author and
          conducts courses online as an educator. His aim through his content is
          to make sure all the choices you make in life come from a point of
          awareness and not ignorance.​
        </div>
        <div className="sign">
          <Image width={200} height={150} src="/warikoo2.webp" alt="sign" />
        </div>
      </div>

      <div className="items flex flex-col lg:flex-row justify-center items-center ">
        <div className="one flex flex-col w-[70%] lg:w-[20%] justify-center items-center text-gray-800 ">
          <FaBusinessTime className="text-4xl h-[5vh] lg:h-[9vh]" />
          <h1 className="text-2xl font-bold h-[5vh] lg:h-[7vh]">
            Entrepreneur
          </h1>
          <p className="text-xl text-center h-[5vh] lg:h-[22vh]">
            warikoo has been an entrepreneur since 2008, was the founding CEO of
            Groupon India and cofounded nearbuy.com He is currently working on
            an education startup.
          </p>
        </div>
        <div className="one flex flex-col w-[70%] lg:w-[20%] justify-center items-center text-gray-800 pt-48 lg:pt-0">
          <FaBookReader className="text-4xl h-[5vh] lg:h-[9vh]" />
          <h1 className="text-2xl font-bold h-[5vh] lg:h-[7vh]">
            Content Creator
          </h1>
          <p className="text-xl text-center h-[5vh]  lg:h-[22vh]">
            warikoo has been creating content since 2005 and has over 7Mn+
            followers across all popular social media platforms.
          </p>
        </div>

        <div className="one flex flex-col w-[70%] lg:w-[20%] justify-center items-center text-gray-800 pt-32 lg:pt-0">
          <FaPenNib className="text-4xl h-[5vh] lg:h-[9vh]" />
          <h1 className="text-2xl font-bold h-[5vh] lg:h-[7vh]">Author</h1>
          <p className="text-xl text-center h-[5vh] lg:h-[22vh]">
            His first book DO EPIC SHIT went on to hit #1 in India. He is
            already working on his second book.
          </p>
        </div>

        <div className="one flex flex-col w-[70%] lg:w-[20%] justify-center items-center text-gray-800 pt-24 lg:pt-0">
          <FaMoneyCheckAlt className="text-4xl h-[5vh] lg:h-[9vh]" />
          <h1 className="text-2xl font-bold h-[5vh] lg:h-[7vh]">Investor</h1>
          <p className="text-xl text-center h-[5vh] lg:h-[22vh]">
            warikoo is an active angel investor in 30+ companies and loves to
            spend time with first-time entrepreneurs mentoring them.
          </p>
        </div>
      </div>

      <div className="social bg-[#1451f8] text-white mt-44 lg:mt-32">
        <h1 className="text-4xl text-center lg:text-5xl font-semibold pt-14 lg:pt-12">
          Find Warikoo on
        </h1>
        <p className="text-xl text-center pt-5">
          ankur warikoo has a strong community of 7Mn+ followers across all
          popular social medias
        </p>

        {/* Social Handles :: Needs Improvement but it's OK. WE will check it again.*/}

        <div className="items flex flex-col lg:flex-row justify-center items-center text-white pt-20 lg:pt-20 lg:-space-x-20 pb-10 lg:pb-10 ">
          <div className="one flex flex-col w-[70%] lg:w-[20%] justify-center items-center  ">
            <FaYoutube className="text-5xl h-[5vh] lg:h-[9vh]" />
            <h1 className="text-2xl font-bold h-[5vh] lg:h-[7vh]">YouTube</h1>
          </div>
          <div className="one flex flex-col w-[70%] lg:w-[20%] justify-center items-center  pt-10 lg:pt-0">
            <FaInstagram className="text-5xl h-[5vh] lg:h-[9vh]" />
            <h1 className="text-2xl font-bold h-[5vh] lg:h-[7vh]">Instagram</h1>
          </div>

          <div className="one flex flex-col w-[70%] lg:w-[20%] justify-center items-center  pt-10 lg:pt-0">
            <FaTwitter className="text-5xl h-[5vh] lg:h-[9vh]" />
            <h1 className="text-2xl font-bold h-[5vh] lg:h-[7vh]">Twitter</h1>
          </div>

          <div className="one flex flex-col w-[70%] lg:w-[20%] justify-center items-center  pt-10 lg:pt-0">
            <FaSpotify className="text-5xl h-[5vh] lg:h-[9vh]" />
            <h1 className="text-2xl font-bold h-[5vh] lg:h-[7vh]">Spotify</h1>
          </div>

          <div className="one flex flex-col w-[70%] lg:w-[20%] justify-center items-center pt-10 lg:pt-0">
            <FaLinkedinIn className="text-5xl h-[5vh] lg:h-[9vh]" />
            <h1 className="text-2xl font-bold h-[5vh] lg:h-[7vh]">LinkedIn</h1>
          </div>

          <div className="one flex flex-col w-[70%] lg:w-[20%] justify-center items-center  pt-10 lg:pt-0">
            <FaFacebook className="text-5xl h-[5vh] lg:h-[9vh]" />
            <h1 className="text-2xl font-bold h-[5vh] lg:h-[7vh]">Facebook</h1>
          </div>
        </div>
      </div>

      <div className="courses flex flex-col justify-between items-center pt-10 lg:pt-20 pb-10 lg:pb-10 ">
        <h1 className="text-4xl lg:text-5xl text-center text-gray-800 font-bold">
          Courses
        </h1>
        <p className="desc w-[90%] lg:w-[60%] text-xl text-center text-gray-800 pt-5 lg:pt-7">
          Super practical courses, with a no-nonsense approach, that are
          designed to help you take life decisions from a point of awareness.
          And not ignorance.
        </p>
      </div>

      {/* Videos Waala Section  */}
      <div className="videos flex flex-col lg:flex-row justify-evenly items-center lg:mx-16 ">
        <div className="Pehla flex flex-col w-[90%] lg:w-[20%]  bg-cyan-100 p-2 my-4 lg:my-2 rounded-lg">
          <div>
            <Image
              src="/video1.webp"
              alt="video1"
              height={100}
              width={520}
              className="rounded-lg removeafter transition ease-in-out duration-75 scale-[0.99] hover:scale-105 "
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-700 py-8">
            Complete Guide To Starting Up
          </h1>

          <div className="rowwala flex flex-row items-center">
            <GiSandsOfTime className="text-2xl text-left  text-blue-700" />
            <span className="text-lg mx-0 font-semibold text-gray-700">
              16 hours
            </span>
          </div>

          <div className="rowwala flex flex-row items-center">
            <BsFillPlayBtnFill className="text-2xl text-left   text-blue-700" />
            <span className="text-lg mx-1 font-semibold text-gray-700">
              8 chapters
            </span>
          </div>
        </div>

        <div className="Doosara flex flex-col w-[90%] lg:w-[20%]  bg-cyan-100 p-2 my-4 lg:my-2  rounded-lg">
          <div>
            <Image
              src="/video2.webp"
              alt="video1"
              height={100}
              width={520}
              className="rounded-lg removeafter transition ease-in-out duration-75 scale-[0.99] hover:scale-105 "
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-700 py-8">
            Take Charge Of Your Time
          </h1>

          <div className="rowwala flex flex-row items-center">
            <GiSandsOfTime className="text-2xl text-left  text-blue-700" />
            <span className="text-lg mx-0 font-semibold text-gray-700">
              6+ hours
            </span>
          </div>

          <div className="rowwala flex flex-row items-center">
            <BsFillPlayBtnFill className="text-2xl text-left   text-blue-700" />
            <span className="text-lg mx-1 font-semibold text-gray-700">
              10 day exercise
            </span>
          </div>
        </div>

        <div className="Teesara flex flex-col w-[90%] lg:w-[20%]  bg-cyan-100 p-2 my-4 lg:my-2  rounded-lg">
          <div>
            <Image
              src="/video3.webp"
              alt="video1"
              height={100}
              width={520}
              className="rounded-lg removeafter transition ease-in-out duration-75 scale-[0.99] hover:scale-105 "
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-700 py-8">
            How to speak effectively?
          </h1>

          <div className="rowwala flex flex-row items-center">
            <GiSandsOfTime className="text-2xl text-left  text-blue-700" />
            <span className="text-lg mx-0 font-semibold text-gray-700">
              60 mins
            </span>
          </div>

          <div className="rowwala flex flex-row items-center">
            <BsFillPlayBtnFill className="text-2xl text-left   text-blue-700" />
            <span className="text-lg mx-1 font-semibold text-gray-700">
              5 chapters
            </span>
          </div>
        </div>

        <div className="Chautha flex flex-col w-[90%] lg:w-[20%]  bg-cyan-100 p-2 my-4 lg:my-2  rounded-lg">
          <div>
            <Image
              src="/video4.webp"
              alt="video1"
              height={100}
              width={520}
              className="rounded-lg removeafter transition ease-in-out duration-75 scale-[0.99] hover:scale-105 "
            />
          </div>
          <h1 className="text-3xl font-bold text-gray-700 py-8">
            How to YouTube ?{" "}
          </h1>

          <div className="rowwala flex flex-row items-center">
            <GiSandsOfTime className="text-2xl text-left  text-blue-700" />
            <span className="text-lg mx-0 font-semibold text-gray-700">
              8 weeks
            </span>
          </div>

          <div className="rowwala flex flex-row items-center">
            <BsFillPlayBtnFill className="text-2xl text-left   text-blue-700" />
            <span className="text-lg mx-1 font-semibold text-gray-700">
              Cohort based
            </span>
          </div>
        </div>
      </div>

      {/* DO EPIC SHIT */}
      <div className="book flex lg:flex-row flex-col justify-evenly ">
        <div className="leftwala lg:w-[40%] items-center justify-center mt-20 lg:mt-20 mb-10 lg:mb-16">
          <Image
            src="/epic.webp"
            alt="DO EPIC SHIT"
            width={550}
            height={800}
            className="aisehi lg:mx-10"
          />
        </div>
        <div className="rightwala flex flex-col w-[90%] justify-start items-start mx-7 lg:mx-0 lg:w-[40%] mt-5 lg:mt-28 mb-16 lg:mb-16">
          <h1 className="text-2xl lg:text-5xl font-bold text-gray-800 ">
            DO EPIC SHIT
          </h1>
          <p className="mt-5 lg:mt-5 w-[94%] lg:w-auto text-xl">
            This is a book to be read, and re-read, a book whose lines you will
            underline and think about again and again, a book you will give your
            family and your friends and strangers.
          </p>
          <Image
            src="/warikoo2.webp"
            width={100}
            height={100}
            alt="sign2"
            className="w-[25%] h-[25%] mt-5 lg:mt-5"
          />
          <h1 className="text-lg font-bold text-gray-800 mt-5 lg:mt-5">
            ankur warikoo
          </h1>
          <button
            className="my-10 bg-yellow-400 font-normal text-2xl h-16 lg:h-24 w-60 lg:w-72  rounded-lg text-white hover:bg-black hover:text-yellow-400"
            type="submit"
          >
            &gt;GET YOUR COPY
          </button>
        </div>
      </div>

      <div className="carousel bg-[#1451f8] flex flex-col text-white py-5">
        <h1 className="text-4xl text-center lg:text-5xl font-semibold pt-14 lg:pt-12">
          Read my blog
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-12 lg:mx-24 my-5">
          <div className="bg-transparent hover:shadow-white hover:shadow-lg transition duration-300 ease-in  border-2 border-amber-300 text-white justify-center items-center p-5 rounded-lg cursor-pointer">
            <h1 className="text-xl lg:text-2xl font-bold">Study The Market</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              reiciendis labore nobis, nemo molestias corporis ipsam tenetur aut
              temporibus officia voluptatibus totam quisquam rerum.
            </p>
          </div>

          <div className="bg-transparent hover:shadow-lime-200 hover:shadow-lg transition duration-300 ease-in  border-2 border-amber-300 text-white justify-center items-center p-5 rounded-lg cursor-pointer">
            <h1 className="text-xl lg:text-2xl font-bold">Create The Market</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              reiciendis labore nobis, nemo molestias corporis ipsam tenetur aut
              temporibus officia voluptatibus totam quisquam rerum.
            </p>
          </div>

          <div className="bg-transparent hover:shadow-red-300 hover:shadow-lg transition duration-300 ease-in  border-2 border-amber-300 text-white justify-center items-center p-5 rounded-lg cursor-pointer">
            <h1 className="text-xl lg:text-2xl font-bold">Make Income from Market</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              reiciendis labore nobis, nemo molestias corporis ipsam tenetur aut
              temporibus officia voluptatibus totam quisquam rerum.
            </p>
          </div>

          <div className="bg-transparent hover:shadow-cyan-300 hover:shadow-lg transition duration-300 ease-in  border-2 border-amber-300 text-white justify-center items-center p-5 rounded-lg cursor-pointer">
            <h1 className="text-xl lg:text-2xl font-bold">Manage Your Time</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              reiciendis labore nobis, nemo molestias corporis ipsam tenetur aut
              temporibus officia voluptatibus totam quisquam rerum.
            </p>
          </div>
        </div>
      </div>

      {/* company wala section  */}
      <div className="company flex flex-col justify-center items-center mt-20 lg:mt-16 ">
        <h1 className="name text-5xl text-center lg:text-6xl font-semibold w-auto lg:w-[60%]">
          connect with me for a speaking engagement?
        </h1>
        <Image
          src="/company.webp"
          alt="companies"
          height={400}
          width={400}
          className="w-[85%] lg:w-[60%] mt-10 lg:mt-12"
        />
        <p className="text-xl text-center font-bold w-[85%] lg:w-[60%] mt-7 lg:mt-12">
          Fill the form below to connect with me for a speaking engagement at
          your company, school, college or at an event.
        </p>
        <p className="text-xl text-center pt-5 w-[85%] lg:w-[60%]">
          <i>
            I am usually booked out 4-6 weeks in advance, so please provide me
            with that flexibility.
          </i>
        </p>
        <div className="flex flex-col lg:flex-row pt-14 lg:pt-14 pb-12 lg:pb-12 items-center lg:space-x-10">
          <button className="rounded-full bg-blue-500 text-white font-bold hover:bg-blue-600 h-12 px-10">
            FILL THE FORM
          </button>
          <button className="rounded-full my-5 lg:my-0 bg-gray-200 hover:bg-gray-300 text-black font-bold h-12 px-14 ">
            EMAIL ME
          </button>
        </div>
      </div>
    </div>
  );
}
