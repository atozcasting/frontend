import { raleway, roboto } from '@/app/fonts'
import Link from 'next/link'
import React from 'react'

export default function Cta() {
  return (
    <div className='max-w-[1000px] mx-auto mt-5  '>
        <div className='flex xs:flex-col md:flex-row xs:justify-center md:justify-evenly items-center bg-yellow-400 p-6 m-4  rounded-md'>
            <p className={`${roboto.className} xs:text-md md:text-xl font-medium text-center text-wrap`}>Start finding actors, models, VO artists, creative freelancers + crew</p>
            <Link href={''} className='bg-black text-white p-3 px-4 rounded-md xs:mt-4 md:mt-0 hover:bg-gray-700 text-sm '>Post A job</Link>
        </div>
    </div>
  )
}
