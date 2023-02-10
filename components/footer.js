import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
         {/* Footer 1 & 2  */}
<div className="footer1 bg-gray-900  flex flex-col lg:flex-row py-12 lg:py-12 space-x-20 lg:space-x-0 lg:justify-evenly">
  <Image src="/logo_vector.webp" width={85} height={30} alt="logooo" className='mx-16 lg:mx-0' />
  <div className="links flex flex-col py-5">
    <ul className='list-disc marker:text-blue-700'>
      <li><Link href="/" className='text-white hover:text-gray-500'>Home</Link></li>
      <li className='text-white hover:text-gray-500'>My Story</li>
      <li className='text-white hover:text-gray-500'>Blog</li>
      <li><Link href="/contact" className='text-white hover:text-gray-500'>Contact</Link></li>
      </ul>
  </div>
  <div className="links2 flex flex-col py-5">
    <ul className='list-disc marker:text-blue-700'>
      <li className='text-white hover:text-gray-500'>Latest Videos</li>
      <li className='text-white hover:text-gray-500'>Courses</li>
      <li className='text-white hover:text-gray-500'>Newsletter</li>
      <li><Link href="/doepicshitbook" className='text-white hover:text-gray-500'>DO EPIC SHIT</Link></li>
      </ul>
  </div>
  <div className="links3 flex flex-col py-5">
    <ul className='list-disc marker:text-blue-700'>
      <li className='text-white hover:text-gray-500 '>Privacy Policy</li>
      <li className='text-white hover:text-gray-500 '>Return Policy</li>
      <li className='text-white hover:text-gray-500 '>Terms & Conditions</li>

      </ul>
  </div>
</div>

<div className="footer2 flex bg-black text-gray-600 justify-center">
<p className="text-sm font-bold text-center py-5 ">Copyright Webveda Private Limited | All Rights Reserved || Designed by <span className='hover:text-gray-700'>Gyan</span>.</p>
</div>
    </>
  )
}

export default Footer
