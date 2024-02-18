"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const navLinks = [
    { text: 'Actor', url: '/talent/actor/all' },
    { text: 'Model', url: '/talent/model/all' },
    { text: 'Singer', url: '/talent/singer/all' },
    { text: 'Photographer', url: '/talent/photographer/all' },
    { text: 'Musician', url: '/talent/musician/all' },
    { text: 'Graphics & Motion Artist', url: '/talent/graphic-designer/all' },
    { text: 'Writer', url: '/talent/writer/all' },
    { text: 'Painter', url: '/talent/painter/all' },
    { text: 'Dancer', url: '/talent/dancer/all' },
    { text: 'Anchor', url: '/talent/anchor/all' },
    { text: 'Voice-over Artist', url: '/talent/voice-over-artist/all' },
    { text: 'Stylist', url: '/talent/stylist/all' },
    { text: 'Filmmaker', url: '/talent/filmmaker/all' },
    { text: 'Advertising Professional', url: '/talent/advertising-professional/all' },
    { text: 'Stand-up Comedian', url: '/talent/stand-up-comedian/all' }
  ];
  const more = [
    { text: 'About', url: '/about-us' },
    { text: 'Advertise with us', url: '/talent/model/all' },
    { text: 'Get in touch', url: '/talent/singer/all' },
    { text: 'How it works', url: '/talent/photographer/all' },
    { text: 'Submit your audition', url: '/talent/musician/all' },
  ];
  const mobile_items = [
    { text: 'Projects', url: '/casting' },
    { text: 'Hire Artist', url: '/page1' },
    { text: 'Services', url: '/page1' },
    { text: 'More', url: '/page1' },
  ]
  return (
    <>
      <nav className='xs:hidden sm:hidden md:flex justify-between items-center p-3 shadow-md'>

        <Link href="/">
          {/* <Image src='https://s.talentrack.in/images/application/modules/desktop/new-logo-tt.png' alt='' width={'180'} height={'43'} /> */}
          <Image src='/casting.png' alt='' width={'180'} height={'43'} />
        </Link>


        <div className=''>
          <div className="flex justify-center gap-5 items-center">
            <div className="nav-item">
              <Link href="/casting" className="nav-links hover:text-primary transition duration-300 ease-in-out">Projects</Link>
            </div>
            <div className="nav-item relative group" >
              <a href="#" className="nav-links hover:text-primary transition duration-300 ease-in-out">Hire Artists<span className="arrow_bot"></span></a>
              <div className="hidden group-hover:flex absolute top-full left-0 mt-0 w-[50vw] bg-transparent ">
                <ul className="mt-5 p-3 whitespace-pre grid grid-cols-2 shadow-lg rounded-lg bg-gray-100">
                  {
                    navLinks.map(item => (
                      <li key={item.url} className='block w-full'><a href={item.url} className="block rounded-md p-3 nav-links hover:bg-gray-300 w-full">{item.text}</a></li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className="nav-item">
              <a href="/all-job-in-india" className="nav-links hover:text-primary transition duration-300 ease-in-out">Services</a>
            </div>
            <div className="nav-item relative group" >
              <a href="#" className="nav-links hover:text-primary transition duration-300 ease-in-out">More<span className="arrow_bot"></span></a>
              <div className="hidden group-hover:flex absolute top-full left-[-200px] mt-0 w-[50vw] bg-transparent ">
                <ul className="mt-5 p-3 whitespace-pre grid grid-cols-2 shadow-lg rounded-lg bg-gray-100">
                  {
                    more.map(item => (
                      <li key={item.url} className='block w-full'><a href={item.url} className="block rounded-md p-3 nav-links hover:bg-gray-300 w-full">{item.text}</a></li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='flex gap-3 items-center justify-between'>
          <a href='' className='py-2  px-6 border border-primary rounded-[30px] hover:bg-primary hover:text-white transition duration-300 ease-in-out'>Login</a>
          <a href='' className='py-2  px-6 hover:bg-red-800   rounded-[30px] bg-primary text-white transition duration-300 ease-in-out'>Signup</a>
        </div>
      </nav>
      <nav className="xs:fixed w-full z-50 bg-white md:hidden py-4 px-2 border border-b-gray-400">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <div >
            <Link href="/">
              {/* <Image src='https://s.talentrack.in/images/application/modules/desktop/new-logo-tt.png' alt='' width={'180'} height={'43'} /> */}
              <Image src='/casting.png' alt='' width={'180'} height={'43'} />
            </Link>
          </div>

          {/* Hamburger Menu Icon */}

          <button onClick={toggleMenu} className="block lg:hidden text-primary focus:outline-none">
            {
              isOpen ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
            }

          </button>
        </div>
      </nav>
      {/* {isOpen && ( */}
        <div className={"fixed w-full bg-opacity-75 z-50 top-[77px] transition-all duration-200 ease-in-out " + (isOpen ? "visible opacity-100":"invisible  opacity-0")}>
          <div className="flex justify-end h-full items-center ">
            <div className="bg-white w-full h-full shadow-lg transition-all">
              {/* Menu Items */}
              <ul className="py-4">
                {
                  mobile_items.map(item => {
                    return <li key={item.text}><Link href={item.url} onClick={toggleMenu} className="block px-4 py-2 text-gray-800 hover:bg-gray-200">{item.text}</Link></li>
                  })
                }
              </ul>
              <div className='flex justify-evenly p-3 items-center'>
                <a href="#" className="w-full m-1 text-center block px-4 py-2 text-white bg-primary rounded-md">Login</a>
                <a href="#" className="w-full m-1 text-center block px-4 py-2 text-gray-800 hover:bg-gray-200  border border-primary rounded-md">Signup</a>
              </div>
            </div>
          </div>
        </div>
      {/* )} */}

      {isOpen && <div className='overlay' onClick={() => setIsOpen(!isOpen)}></div>}
    </>
  )
}
