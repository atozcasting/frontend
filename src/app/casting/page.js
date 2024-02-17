import Link from 'next/link'
import React from 'react'
import { raleway } from '../fonts'

export default function Casting() {
  return (
    <div className='max-w-[1000px] mx-auto xs:pt-[80px] md:p-2'>
      {/* <div className='grid grid-cols-7 gap-4 mt-4'> */}
      <div className='flex flex-row gap-4 justify-start items-center mt-4 flex-no-wrap overflow-x-auto'>
        <div className='flex flex-col items-center justify-center border-2 py-2 rounded-md cursor-pointer hover:border-primary hover:bg-red-50 group  px-4 xs:ml-2 sm:ml-0'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-6 h-6 group-hover:text-primary">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
          <p className='my-2'>Saved</p>
        </div>
        <div className='flex flex-col  items-center justify-center border-2 py-2 rounded-md cursor-pointer hover:border-primary hover:bg-red-50 group px-5 '>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-6 h-6 group-hover:text-primary">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
          </svg>
          <p className='my-2 text-center whitespace-pre'>All Jobs</p>
        </div>
        <div className='flex flex-col items-center justify-center border-2 py-2 rounded-md cursor-pointer hover:border-primary hover:bg-red-50 group  px-4'>
          <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="masks-theater" className=" svg-inline--fa fa-masks-theater icon icon-center w-6 h-6 group-hover:text-primary" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
            <path fill="currentColor" d="M151 206c19.37-3.375 35.87-17.88 45.25-39.63c3.5-8.125-.25-17.5-8.498-21c-8-3.5-17.5 .25-21 8.375C163.9 160.6 157.1 172.5 145.5 174.5C133.8 176.6 123.5 167.8 118.4 162.3C112.3 155.8 102.1 155.5 95.77 161.5c-6.5 6.125-6.75 16.25-.75 22.62C100.3 189.6 121.4 211.4 151 206zM339.2 226.9c5.125-5.375 15.5-14.5 27.25-12.25c11.62 2.125 18.25 13.88 21.25 20.75c3.5 8.25 12.1 11.88 20.1 8.375c8.125-3.375 11.88-12.88 8.5-21c-9.5-22.12-25.62-36.25-45.25-39.63C352.5 179.8 332.5 187.4 316 205C310 211.4 310.3 221.5 316.8 227.5C323.1 233.6 333.3 233.4 339.2 226.9zM160.4 325c.7246-.9961 12.34-16.05 37.09-26.39c.0645-.3867 .0488-.7988 .1172-1.184l6.105-34.75c-44.55 12.24-67.07 40.78-68.19 42.2c-5.5 6.875-4.5 17 2.375 22.5C145.8 333.8 155.8 330.8 160.4 325zM513.9 208.1c-19.5-3.5-39.5 4.25-56.12 21.88c-5.998 6.375-5.75 16.5 .75 22.62c6.375 6 16.5 5.75 22.62-.75c5.123-5.5 15.37-14.38 27.12-12.25c11.75 2.125 18.37 13.88 21.25 20.75c3.625 8.25 13.12 11.88 21.12 8.375c8.125-3.375 11.88-12.88 8.375-21C549.6 226 533.2 211.5 513.9 208.1zM519.5 318.8c-26.25 16-62.1 21.25-100.9 14.62c-37.75-6.75-70.5-24.25-89.74-48.25c-9.125-11.38-27.25-5.5-28.5 8.75c-5.25 63 38.75 119 102.2 130.3c21.12 3.75 114.1 6.5 140.6-87.5C546.1 322.9 531.1 311.3 519.5 318.8zM408.2 392.6c-33.25-5.875-59.25-28.12-70.37-57c21.38 14.12 47.25 24.25 75.25 29.25c27.1 4.875 55.75 4.25 80.62-1.75C473.4 386.5 441.4 398.4 408.2 392.6zM64.27 301.3L32.64 121.4C30.02 106.5 36.52 92 48.77 85.13c25.05-13.88 125.1-68.37 264.1-48.69c17.56-2.695 35.27-4.166 52.97-4.932c-10.37-13.99-24.6-23.22-40.65-25.77C301.3 1.857 277.3-.0001 253.4-.0001c-76.74 0-152.4 19.32-220.1 57.07C9.021 70.45-3.854 98.5 1.021 126.6l31.75 180.2c14.25 80.75 136.4 142.4 204.5 142.4c3.957 0 7.617-.2402 11.26-.6855c-8.389-10.53-16.05-21.18-22.5-31.94C167.1 410.5 74.58 359.3 64.27 301.3zM606.8 121C521.8 73.78 440.2 64 386.5 64c-23.84 0-47.94 1.834-71.69 5.623C287.5 74.05 265.8 95.9 260.8 123.1L229 303.5c-6.877 38.63 11.31 86.9 49.8 132.2C289.7 448.4 346.7 512 402.8 512c70.47 0 189.9-61.05 204.4-142.1l31.75-179.5C643.8 162.3 630.8 134.4 606.8 121zM607.5 184.1l-31.75 179.5c-10.1 61.57-115.5 115.7-172.1 115.7c-38.1 0-86.87-50.23-99.5-65.06c-31.88-37.51-47.75-77.15-42.63-105.9l31.62-179.5c2.625-14.71 13.75-26.17 27.62-28.42c23.31-3.719 45.58-5.311 66.66-5.311c107.5 0 183.7 41.38 204.7 53.04C603.5 155.8 609.1 170.3 607.5 184.1z">
            </path>
          </svg>
          <p className='my-2'>Actors</p>
        </div>
        <div className='flex flex-col items-center justify-center border-2 py-2 rounded-md cursor-pointer hover:border-primary hover:bg-red-50 group  px-4'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" w-6 h-6 group-hover:text-primary">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
          </svg>
          <p className='my-2'>Voicover</p>
        </div>
        <div className='flex flex-col items-center justify-center border-2 py-2 rounded-md cursor-pointer hover:border-primary hover:bg-red-50 group  px-4'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" w-6 h-6 group-hover:text-primary">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
          </svg>


          <p className='my-2'>Crew</p>
        </div>
        <div className='flex flex-col items-center justify-center border-2 py-2 rounded-md cursor-pointer hover:border-primary hover:bg-red-50 group px-4'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" w-6 h-6 group-hover:text-primary">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
          </svg>

          <p className='my-2'>Models</p>
        </div>
        <div className='flex flex-col items-center justify-center border-2 py-2 rounded-md cursor-pointer hover:border-primary hover:bg-red-50 group p-2 mr-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className=" w-6 h-6 group-hover:text-primary">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
          </svg>
          <p className='my-2 text-center whitespace-pre'>Content Creators</p>
        </div>
      </div>


      <div className='my-6 flex justify-between items-center p-2'>
        <p>Showing 16133 jobs in <span className='font-bold'>All Locations</span></p>
        <select id="countries"
          className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-md focus:border-primary block px-4 py-1 placeholder-primary">
          <option defaultValue={''}>Sort By</option>
          <option value="US">Newest first</option>
          <option value="CA">Popular</option>
          <option value="CA">Expiry Soon</option>
        </select>
      </div>


      <div className='grid xs:grid-cols-1 xs:m-2 md:grid-cols-4 grid-cols-4'>
        <div className='col-span-3  border border-gray-300 xs:rounded-t-md md:rounded-t-none md:rounded-l-md p-3'>
          <div className='flex gap-2'>
            <span className='bg-black text-[10px] text-white px-3 py-[3px] rounded-full font-bold'>FEATURED</span>
            <span className='bg-black text-[10px] text-white px-3  py-[3px] rounded-full font-bold'>FEATURE FILM</span>
            <span className='bg-green-300 text-[10px] px-3 py-[3px] rounded-full font-bold'>PAID</span>
          </div>
          <div className='py-4'>
            <Link href={''} className={`${raleway.className} text-3xl hover:text-primary`}>Defining Demoiselles Season 1, Episode 10 Season 1, Episode 10 {`Don't`}</Link>
          </div>
          <div className='mb-4'>
            <p className={`font-medium`}>Cleveland, OH</p>
            <p className={`font-medium pt-3`}>Description :</p>
            <p className='text-sm'>Male Primary Lead Actor Required Across India For Upcoming Big Banner Hindi Feature Film Project Male Primary Lead Actor Required Across India For Upcoming Big Banner Hindi Feature Film Project</p>
            <p className={`font-medium pt-3`}>Shoot location and Dates :</p>
            <p className='text-sm'>Shoots 17 Feb. in Brookings, SD.</p>
          </div>
          <div className='border-t-2 border-gray-300 flex py-4 justify-between items-center'>
            <div className='flex items-center bg-primary rounded-md px-2'>
              <Link href={''} className='text-white p-2 text-[14px]'>View Details and Apply </Link>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-4 h-4 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>

            </div>
            <div className='flex items-center gap-4'>
              <button className='flex items-center gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                <span className='text-[12px] text-primary font-medium'>Save</span>
              </button>
              <button className='flex items-center gap-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                </svg>
                <span className='text-[12px] text-primary font-medium'>Share</span>
              </button>
            </div>
          </div>
        </div>
        <div className='col-span-1  xs:rounded-b-md md:rounded-b-none md:rounded-r-md border-r border-t border-b bg-gray-50 p-3'>
          <div className='bg-gray-100 rounded-md px-3 py-4 m-2'>
            <div className='flex items-center gap-3  '> 
              <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="masks-theater" class=" svg-inline--fa fa-masks-theater icon icon-center w-4 h-4 text-gray-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path fill="currentColor" d="M151 206c19.37-3.375 35.87-17.88 45.25-39.63c3.5-8.125-.25-17.5-8.498-21c-8-3.5-17.5 .25-21 8.375C163.9 160.6 157.1 172.5 145.5 174.5C133.8 176.6 123.5 167.8 118.4 162.3C112.3 155.8 102.1 155.5 95.77 161.5c-6.5 6.125-6.75 16.25-.75 22.62C100.3 189.6 121.4 211.4 151 206zM339.2 226.9c5.125-5.375 15.5-14.5 27.25-12.25c11.62 2.125 18.25 13.88 21.25 20.75c3.5 8.25 12.1 11.88 20.1 8.375c8.125-3.375 11.88-12.88 8.5-21c-9.5-22.12-25.62-36.25-45.25-39.63C352.5 179.8 332.5 187.4 316 205C310 211.4 310.3 221.5 316.8 227.5C323.1 233.6 333.3 233.4 339.2 226.9zM160.4 325c.7246-.9961 12.34-16.05 37.09-26.39c.0645-.3867 .0488-.7988 .1172-1.184l6.105-34.75c-44.55 12.24-67.07 40.78-68.19 42.2c-5.5 6.875-4.5 17 2.375 22.5C145.8 333.8 155.8 330.8 160.4 325zM513.9 208.1c-19.5-3.5-39.5 4.25-56.12 21.88c-5.998 6.375-5.75 16.5 .75 22.62c6.375 6 16.5 5.75 22.62-.75c5.123-5.5 15.37-14.38 27.12-12.25c11.75 2.125 18.37 13.88 21.25 20.75c3.625 8.25 13.12 11.88 21.12 8.375c8.125-3.375 11.88-12.88 8.375-21C549.6 226 533.2 211.5 513.9 208.1zM519.5 318.8c-26.25 16-62.1 21.25-100.9 14.62c-37.75-6.75-70.5-24.25-89.74-48.25c-9.125-11.38-27.25-5.5-28.5 8.75c-5.25 63 38.75 119 102.2 130.3c21.12 3.75 114.1 6.5 140.6-87.5C546.1 322.9 531.1 311.3 519.5 318.8zM408.2 392.6c-33.25-5.875-59.25-28.12-70.37-57c21.38 14.12 47.25 24.25 75.25 29.25c27.1 4.875 55.75 4.25 80.62-1.75C473.4 386.5 441.4 398.4 408.2 392.6zM64.27 301.3L32.64 121.4C30.02 106.5 36.52 92 48.77 85.13c25.05-13.88 125.1-68.37 264.1-48.69c17.56-2.695 35.27-4.166 52.97-4.932c-10.37-13.99-24.6-23.22-40.65-25.77C301.3 1.857 277.3-.0001 253.4-.0001c-76.74 0-152.4 19.32-220.1 57.07C9.021 70.45-3.854 98.5 1.021 126.6l31.75 180.2c14.25 80.75 136.4 142.4 204.5 142.4c3.957 0 7.617-.2402 11.26-.6855c-8.389-10.53-16.05-21.18-22.5-31.94C167.1 410.5 74.58 359.3 64.27 301.3zM606.8 121C521.8 73.78 440.2 64 386.5 64c-23.84 0-47.94 1.834-71.69 5.623C287.5 74.05 265.8 95.9 260.8 123.1L229 303.5c-6.877 38.63 11.31 86.9 49.8 132.2C289.7 448.4 346.7 512 402.8 512c70.47 0 189.9-61.05 204.4-142.1l31.75-179.5C643.8 162.3 630.8 134.4 606.8 121zM607.5 184.1l-31.75 179.5c-10.1 61.57-115.5 115.7-172.1 115.7c-38.1 0-86.87-50.23-99.5-65.06c-31.88-37.51-47.75-77.15-42.63-105.9l31.62-179.5c2.625-14.71 13.75-26.17 27.62-28.42c23.31-3.719 45.58-5.311 66.66-5.311c107.5 0 183.7 41.38 204.7 53.04C603.5 155.8 609.1 170.3 607.5 184.1z"></path>
            </svg>
              <h4 className='font-bold'>Mack</h4>
            </div>
            <p className='mb-3'>Voiceover, Male, 18-30</p>
            <Link href={''} className='bg-primary text-white px-4 rounded-md py-2 text-[12px]'>Apply</Link>
          </div>
          <div className='bg-gray-100 rounded-md px-3 py-4 m-2'>
            <div className='flex items-center gap-3  '> 
              <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="masks-theater" class=" svg-inline--fa fa-masks-theater icon icon-center w-4 h-4 text-gray-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path fill="currentColor" d="M151 206c19.37-3.375 35.87-17.88 45.25-39.63c3.5-8.125-.25-17.5-8.498-21c-8-3.5-17.5 .25-21 8.375C163.9 160.6 157.1 172.5 145.5 174.5C133.8 176.6 123.5 167.8 118.4 162.3C112.3 155.8 102.1 155.5 95.77 161.5c-6.5 6.125-6.75 16.25-.75 22.62C100.3 189.6 121.4 211.4 151 206zM339.2 226.9c5.125-5.375 15.5-14.5 27.25-12.25c11.62 2.125 18.25 13.88 21.25 20.75c3.5 8.25 12.1 11.88 20.1 8.375c8.125-3.375 11.88-12.88 8.5-21c-9.5-22.12-25.62-36.25-45.25-39.63C352.5 179.8 332.5 187.4 316 205C310 211.4 310.3 221.5 316.8 227.5C323.1 233.6 333.3 233.4 339.2 226.9zM160.4 325c.7246-.9961 12.34-16.05 37.09-26.39c.0645-.3867 .0488-.7988 .1172-1.184l6.105-34.75c-44.55 12.24-67.07 40.78-68.19 42.2c-5.5 6.875-4.5 17 2.375 22.5C145.8 333.8 155.8 330.8 160.4 325zM513.9 208.1c-19.5-3.5-39.5 4.25-56.12 21.88c-5.998 6.375-5.75 16.5 .75 22.62c6.375 6 16.5 5.75 22.62-.75c5.123-5.5 15.37-14.38 27.12-12.25c11.75 2.125 18.37 13.88 21.25 20.75c3.625 8.25 13.12 11.88 21.12 8.375c8.125-3.375 11.88-12.88 8.375-21C549.6 226 533.2 211.5 513.9 208.1zM519.5 318.8c-26.25 16-62.1 21.25-100.9 14.62c-37.75-6.75-70.5-24.25-89.74-48.25c-9.125-11.38-27.25-5.5-28.5 8.75c-5.25 63 38.75 119 102.2 130.3c21.12 3.75 114.1 6.5 140.6-87.5C546.1 322.9 531.1 311.3 519.5 318.8zM408.2 392.6c-33.25-5.875-59.25-28.12-70.37-57c21.38 14.12 47.25 24.25 75.25 29.25c27.1 4.875 55.75 4.25 80.62-1.75C473.4 386.5 441.4 398.4 408.2 392.6zM64.27 301.3L32.64 121.4C30.02 106.5 36.52 92 48.77 85.13c25.05-13.88 125.1-68.37 264.1-48.69c17.56-2.695 35.27-4.166 52.97-4.932c-10.37-13.99-24.6-23.22-40.65-25.77C301.3 1.857 277.3-.0001 253.4-.0001c-76.74 0-152.4 19.32-220.1 57.07C9.021 70.45-3.854 98.5 1.021 126.6l31.75 180.2c14.25 80.75 136.4 142.4 204.5 142.4c3.957 0 7.617-.2402 11.26-.6855c-8.389-10.53-16.05-21.18-22.5-31.94C167.1 410.5 74.58 359.3 64.27 301.3zM606.8 121C521.8 73.78 440.2 64 386.5 64c-23.84 0-47.94 1.834-71.69 5.623C287.5 74.05 265.8 95.9 260.8 123.1L229 303.5c-6.877 38.63 11.31 86.9 49.8 132.2C289.7 448.4 346.7 512 402.8 512c70.47 0 189.9-61.05 204.4-142.1l31.75-179.5C643.8 162.3 630.8 134.4 606.8 121zM607.5 184.1l-31.75 179.5c-10.1 61.57-115.5 115.7-172.1 115.7c-38.1 0-86.87-50.23-99.5-65.06c-31.88-37.51-47.75-77.15-42.63-105.9l31.62-179.5c2.625-14.71 13.75-26.17 27.62-28.42c23.31-3.719 45.58-5.311 66.66-5.311c107.5 0 183.7 41.38 204.7 53.04C603.5 155.8 609.1 170.3 607.5 184.1z"></path>
            </svg>
              <h4 className='font-bold'>Mack</h4>
            </div>
            <p className='mb-3'>Voiceover, Male, 18-30</p>
            <Link href={''} className='bg-primary text-white px-4 rounded-md py-2 text-[12px]'>Apply</Link>
          </div>
          <div className='bg-gray-100 rounded-md px-3 py-4 m-2'>
            <div className='flex items-center gap-3  '> 
              <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="masks-theater" class=" svg-inline--fa fa-masks-theater icon icon-center w-4 h-4 text-gray-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path fill="currentColor" d="M151 206c19.37-3.375 35.87-17.88 45.25-39.63c3.5-8.125-.25-17.5-8.498-21c-8-3.5-17.5 .25-21 8.375C163.9 160.6 157.1 172.5 145.5 174.5C133.8 176.6 123.5 167.8 118.4 162.3C112.3 155.8 102.1 155.5 95.77 161.5c-6.5 6.125-6.75 16.25-.75 22.62C100.3 189.6 121.4 211.4 151 206zM339.2 226.9c5.125-5.375 15.5-14.5 27.25-12.25c11.62 2.125 18.25 13.88 21.25 20.75c3.5 8.25 12.1 11.88 20.1 8.375c8.125-3.375 11.88-12.88 8.5-21c-9.5-22.12-25.62-36.25-45.25-39.63C352.5 179.8 332.5 187.4 316 205C310 211.4 310.3 221.5 316.8 227.5C323.1 233.6 333.3 233.4 339.2 226.9zM160.4 325c.7246-.9961 12.34-16.05 37.09-26.39c.0645-.3867 .0488-.7988 .1172-1.184l6.105-34.75c-44.55 12.24-67.07 40.78-68.19 42.2c-5.5 6.875-4.5 17 2.375 22.5C145.8 333.8 155.8 330.8 160.4 325zM513.9 208.1c-19.5-3.5-39.5 4.25-56.12 21.88c-5.998 6.375-5.75 16.5 .75 22.62c6.375 6 16.5 5.75 22.62-.75c5.123-5.5 15.37-14.38 27.12-12.25c11.75 2.125 18.37 13.88 21.25 20.75c3.625 8.25 13.12 11.88 21.12 8.375c8.125-3.375 11.88-12.88 8.375-21C549.6 226 533.2 211.5 513.9 208.1zM519.5 318.8c-26.25 16-62.1 21.25-100.9 14.62c-37.75-6.75-70.5-24.25-89.74-48.25c-9.125-11.38-27.25-5.5-28.5 8.75c-5.25 63 38.75 119 102.2 130.3c21.12 3.75 114.1 6.5 140.6-87.5C546.1 322.9 531.1 311.3 519.5 318.8zM408.2 392.6c-33.25-5.875-59.25-28.12-70.37-57c21.38 14.12 47.25 24.25 75.25 29.25c27.1 4.875 55.75 4.25 80.62-1.75C473.4 386.5 441.4 398.4 408.2 392.6zM64.27 301.3L32.64 121.4C30.02 106.5 36.52 92 48.77 85.13c25.05-13.88 125.1-68.37 264.1-48.69c17.56-2.695 35.27-4.166 52.97-4.932c-10.37-13.99-24.6-23.22-40.65-25.77C301.3 1.857 277.3-.0001 253.4-.0001c-76.74 0-152.4 19.32-220.1 57.07C9.021 70.45-3.854 98.5 1.021 126.6l31.75 180.2c14.25 80.75 136.4 142.4 204.5 142.4c3.957 0 7.617-.2402 11.26-.6855c-8.389-10.53-16.05-21.18-22.5-31.94C167.1 410.5 74.58 359.3 64.27 301.3zM606.8 121C521.8 73.78 440.2 64 386.5 64c-23.84 0-47.94 1.834-71.69 5.623C287.5 74.05 265.8 95.9 260.8 123.1L229 303.5c-6.877 38.63 11.31 86.9 49.8 132.2C289.7 448.4 346.7 512 402.8 512c70.47 0 189.9-61.05 204.4-142.1l31.75-179.5C643.8 162.3 630.8 134.4 606.8 121zM607.5 184.1l-31.75 179.5c-10.1 61.57-115.5 115.7-172.1 115.7c-38.1 0-86.87-50.23-99.5-65.06c-31.88-37.51-47.75-77.15-42.63-105.9l31.62-179.5c2.625-14.71 13.75-26.17 27.62-28.42c23.31-3.719 45.58-5.311 66.66-5.311c107.5 0 183.7 41.38 204.7 53.04C603.5 155.8 609.1 170.3 607.5 184.1z"></path>
            </svg>
              <h4 className='font-bold'>Mack</h4>
            </div>
            <p className='mb-3'>Voiceover, Male, 18-30</p>
            <Link href={''} className='bg-primary text-white px-4 rounded-md py-2 text-[12px]'>Apply</Link>
          </div>
        </div>
      </div>
    </div>

  )
}
