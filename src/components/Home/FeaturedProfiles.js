/* eslint-disable @next/next/no-img-element */
import { raleway, roboto } from '@/app/fonts'
import Link from 'next/link'
import React from 'react'

export default function FeaturedProfiles() {
    return (
        <div className='max-w-[1000px] mx-auto xs:pt-[80px] p-0'>
            <div className='grid xs:grid-cols-1 md:grid-cols-2'>
                <div className='px-2'>
                    <div className='flex items-center justify-between border-b-2 border-gray-200'>
                        <h3 className={`${raleway.className} text-2xl font-bold p-0 m-1 my-3 `}>Managed Services</h3>
                    </div>
                    <img src='https://s.talentrack.in/images/application/modules/desktop/home_page/managed_service_banner.png' alt='' className='my-4' />
                    <p className='text-gray-500 my-1 text-[12px] font-bold mx-1'>CURATED, CROWDSOURCED CONTENT FOR BRANDS & MARKETERS</p>
                    <p className={`${roboto.className} text-3xl py-2`}>See how brands are using crowdsourcing to create content & engage with the target audience meaningfully.</p>
                    <div className='my-4'>
                        <Link href={''} className='text-primary font-bold text-sm flex items-center'>TALK TO US <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path></svg></Link>
                    </div>
                </div>
                <div className='px-2'>
                    <div className='flex items-center justify-between border-b-2 border-gray-200 mb-3'>
                        <h3 className={`${raleway.className} text-2xl font-bold p-0 m-1 my-3 `}>Platinum Artists</h3>
                        <Link href="" className='text-primary font-bold flex items-center'>View All <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd"></path></svg></Link>
                    </div>
                    <div className='grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-2 gap-4'>
                        <div className='relative cursor-pointer'>
                            <div className='absolute bottom-10 left-5 text-white z-50'>Aditya A</div>
                            <div className='absolute bottom-4 left-5 text-white z-50 text-[12px]'>Actor/Model | Mumbai</div>
                            <img src='https://s.talentrack.in/uploads/acc_img/114/816/optim_114816_5babfab6d5859.jpg' alt='' className=' rounded-[35px] xs:w-full' width={234} />
                            <div className='absolute  rounded-[35px] inset-0 bg-gradient-to-b from-transparent to-black opacity-40 z-40 transition-all duration-200 ease-in-out hover:opacity-25 hover:z-40'></div>
                        </div>
                        <div className='relative cursor-pointer'>
                            <div className='absolute bottom-10 left-5 text-white z-50'>Aditya A</div>
                            <div className='absolute bottom-4 left-5 text-white z-50 text-[12px]'>Actor/Model | Mumbai</div>
                            <img src='https://s.talentrack.in/uploads/acc_img/114/816/optim_114816_5babfab6d5859.jpg' alt='' className=' rounded-[35px] xs:w-full' width={234} />
                            <div className='absolute  rounded-[35px] inset-0 bg-gradient-to-b from-transparent to-black opacity-40 z-40 transition-all duration-200 ease-in-out hover:opacity-25 hover:z-40'></div>
                        </div>
                        <div className='relative cursor-pointer'>
                            <div className='absolute bottom-10 left-5 text-white z-50'>Aditya A</div>
                            <div className='absolute bottom-4 left-5 text-white z-50 text-[12px]'>Actor/Model | Mumbai</div>
                            <img src='https://s.talentrack.in/uploads/acc_img/114/816/optim_114816_5babfab6d5859.jpg' alt='' className=' rounded-[35px] xs:w-full' width={234} />
                            <div className='absolute  rounded-[35px] inset-0 bg-gradient-to-b from-transparent to-black opacity-40 z-40 transition-all duration-200 ease-in-out hover:opacity-25 hover:z-40'></div>
                        </div>
                        <div className='relative cursor-pointer'>
                            <div  className='absolute bottom-10 left-5 text-white z-50'>Aditya A</div>
                            <div className='absolute bottom-4 left-5 text-white z-50 text-[12px]'>Actor/Model | Mumbai</div>
                            <img src='https://s.talentrack.in/uploads/acc_img/114/816/optim_114816_5babfab6d5859.jpg' alt='' className=' rounded-[35px] xs:w-full' width={234} />
                            <div className='absolute  rounded-[35px] inset-0 bg-gradient-to-b from-transparent to-black opacity-40 z-40 transition-all duration-200 ease-in-out hover:opacity-25 hover:z-40'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
