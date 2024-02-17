"use client";
import { raleway, roboto } from '@/app/fonts';
import Link from 'next/link';
import React from 'react'
export default function Carousel() {
    return (
        <div className=" md:pt-0 bg-cover bg-center carous md:mx-auto md:my-[20px] md:max-w-[95%] md:rounded" >
            <div className='flex items-center h-full md:px-20 '>
                <div className='flex-col px-4 '>

                    <h3 className={`${raleway.className} text-white text-3xl`}>Get cast in your next role today.</h3>
                    <p className={`${roboto.className} text-white text-md mt-4`}>
                        Backstage has the most jobs, the best tools, and expert advice to help you get cast.
                    </p>
                    <Link href="/" className='bg-white p-3 rounded mt-4 block w-32 text-primary text-center hover:bg-gray-100 transition-all delay-50'>Join Now</Link>
                </div>
            </div>
        </div>
    )

}
