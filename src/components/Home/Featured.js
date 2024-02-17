"use client";
import { raleway } from '@/app/fonts'
import Link from 'next/link';
import React, { useMemo, useState } from 'react'

export default function Featured() {
    const types = ['Actors', 'Voiceover', 'Creative Freelancers + Crew', 'Models', 'Influencers', 'More'];
    const [featuredSelected, setFeatureSelected] = useState('Actors');
    var data = {
        'Actors': [
            {
                tags: ['ONLINE COMMERCIAL / VIDEO AD', 'PAID', 'NONUNION'],
                title: 'Debt Solutions Video',
                desc: 'Seeking talent for a 20-30 seconds video ad. Logline: Helping people with debt solutions...',
                roles: ['Lead 6-10', 'Lead 6-10']
            },
            {
                tags: ['ONLINE COMMERCIAL / VIDEO AD', 'PAID', 'NONUNION'],
                title: 'Debt Solutions Video',
                desc: 'Seeking talent for a 20-30 seconds video ad. Logline: Helping people with debt solutions...',
                roles: ['Lead 6-10', 'Lead 6-10']
            },
            {
                tags: ['ONLINE COMMERCIAL / VIDEO AD', 'PAID', 'NONUNION'],
                title: 'Debt Solutions Video',
                desc: 'Seeking talent for a 20-30 seconds video ad. Logline: Helping people with debt solutions...',
                roles: ['Lead 6-10', 'Lead 6-10']
            },

        ],
        'Voiceover': [
            {
                tags: ['ONLINE COMMERCIAL / VIDEO AD', 'PAID', 'NONUNION'],
                title: 'Deb1t Solutions Video',
                desc: 'Seeking talent for a 20-30 seconds video ad. Logline: Helping people with debt solutions...',
                roles: ['Lead 6-10', 'Lead 6-10']
            },
        ],

        'Creative Freelancers + Crew': [{
            tags: ['ONLINE COMMERCIAL / VIDEO AD', 'PAID', 'NONUNION'],
            title: 'Debt Solutions Video',
            desc: 'Seeking talent for a 20-30 seconds video ad. Logline: Helping people with debt solutions...',
            roles: ['Lead 6-10', 'Lead 6-10']
        }],
        'Influencers': [{
            tags: ['ONLINE COMMERCIAL / VIDEO AD', 'PAID', 'NONUNION'],
            title: 'Debt Solutions Video',
            desc: 'Seeking talent for a 20-30 seconds video ad. Logline: Helping people with debt solutions...',
            roles: ['Lead 6-10', 'Lead 6-10']
        }],
        'Models': [{
            tags: ['ONLINE COMMERCIAL / VIDEO AD', 'PAID', 'NONUNION'],
            title: 'Debt Solutions Video',
            desc: 'Seeking talent for a 20-30 seconds video ad. Logline: Helping people with debt solutions...',
            roles: ['Lead 6-10', 'Lead 6-10']
        }],
    }
    // const subItems = useMemo(() => {
    //     console.log(data[featuredSelected])
    //     return data[featuredSelected] && data[featuredSelected].map((item, idx) => {
    //         // <div className='card bg-gray-50 p-4 rounded border border-gray-300' key={idx}>
    //         //     <div className='flex flex-row flex-wrap mb-2'>
    //         //         {/* {item.tags.map((i,id)=><span key={id} className='bg-primary text-white rounded-full text-[10px] px-3 py-1 m-1'>{i}</span>)} */}
    //         //         <span className='bg-black text-white rounded-full text-[10px] px-3 py-1 m-1'>ONLINE COMMERCIAL / VIDEO AD</span>
    //         //         <span className='bg-primary text-white rounded-full text-[10px] px-3 py-1 m-1'>PAID</span>
    //         //         <span className='bg-black text-white rounded-full text-[10px] px-3 py-1 m-1'>NONUNION</span>
    //         //     </div>
    //         //     <h4 className={`text-xl mb-3 font-bold`}>{item.title}</h4>
    //         //     <p className='py-4'>A major multibrand high fashion retailer is filming a spelling bee themed video for SS24 campaign. Usage: Global, 1 year, online, Owned...<Link href={""} className='text-primary font-bold'>more</Link></p>
    //         //     <span className='uppercase font-bold text-sm mb-2'>ROLES HIRING FOR:</span>
    //         //     <div className='flex flex-row items-center'>
    //         //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-primary">
    //         //             <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
    //         //         </svg>
    //         //         <p className='px-3 text-[14px]'>Lead 6 - 10</p>
    //         //     </div>
    //         //     <div className='flex flex-row items-center '>
    //         //         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-primary">
    //         //             <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
    //         //         </svg>
    //         //         <p className='px-3 text-[14px]'>Lead 6 - 10</p>
    //         //     </div>
    //         //     <Link className='flex flex-row items-center py-3 text-primary font-bold hover:text-gray-600' href={''}>View and Apply <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
    //         //         <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
    //         //     </svg>
    //         //     </Link>
    //         // </div>
    //         <p>{item['desc']}</p>
    //     })
    // }, [featuredSelected])
    return (
        <div className="max-w-[1000px] mx-auto xs:pt-[80px] p-0">
            <h3 className={`${raleway.className} text-3xl font-bold p-2 px-4`}>Featured Jobs</h3>
            <div className='flex flex-row overflow-x-auto p-1 my-5'>
                {types.map((item, index) => {
                    return <button key={index} className={`${item == featuredSelected ? 'border-b-2 border-primary' : ''} mx-4 font-bold`} onClick={() => setFeatureSelected(item)}>{item}</button>
                })}
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-2'>
                {
                    data[featuredSelected] ? data[featuredSelected].map((item, idx) => {
                        return <div key={idx}><div className='card bg-gray-50 p-4 rounded border border-gray-300'>
                            <div className='flex flex-row flex-wrap mb-2'>
                                {
                                    item.tags && item.tags.map((i, idx) => {
                                        return <span key={idx} className='bg-black text-white rounded-full text-[10px] px-3 py-1 m-1'>{i}</span>
                                    })
                                }
                                {/*<span className='bg-primary text-white rounded-full text-[10px] px-3 py-1 m-1'>PAID</span>*/}
                            </div>
                            <h4 className={`text-xl mb-3 font-bold`}>{item.title}</h4>
                            <p className='py-4'>{item.desc}<Link href={""} className='text-primary font-bold'>more</Link></p>
                            <span className='uppercase font-bold text-sm mb-2'>ROLES HIRING FOR:</span>
                            {
                                item.roles && item.roles.map((i, dx) => {
                                    return <div key={dx}>
                                        <div className='flex flex-row items-center'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-primary">
                                                <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                                            </svg>
                                            <p className='px-3 text-[14px]'>{i}</p>
                                        </div>
                                    </div>
                                })
                            }
                            {/* <div className='flex flex-row items-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-primary">
                                    <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                                </svg>
                                <p className='px-3 text-[14px]'>Lead 6 - 10</p>
                            </div> */}

                            <Link className='flex flex-row items-center py-3 text-primary font-bold hover:text-gray-600' href={''}>View and Apply <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                            </Link>
                        </div>
                        </div>
                    }):<span className=' p-4 text-md font-bold'>No Entries Yet</span>
                }
                {/* <div className='card bg-gray-50 p-4 rounded border border-gray-300'>
                    <div className='flex flex-row flex-wrap mb-2'>
                        <span className='bg-black text-white rounded-full text-[10px] px-3 py-1 m-1'>ONLINE COMMERCIAL / VIDEO AD</span>
                        <span className='bg-primary text-white rounded-full text-[10px] px-3 py-1 m-1'>PAID</span>
                        <span className='bg-black text-white rounded-full text-[10px] px-3 py-1 m-1'>NONUNION</span>
                    </div>
                    <h4 className={`text-xl mb-3 font-bold`}>High Fashion Kidswear Campaign, SS24 - Spelling bee theme - NYC - 3/2</h4>
                    <p className='py-4'>A major multibrand high fashion retailer is filming a spelling bee themed video for SS24 campaign. Usage: Global, 1 year, online, Owned...<Link href={""} className='text-primary font-bold'>more</Link></p>
                    <span className='uppercase font-bold text-sm mb-2'>ROLES HIRING FOR:</span>
                    <div className='flex flex-row items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-primary">
                            <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                        </svg>
                        <p className='px-3 text-[14px]'>Lead 6 - 10</p>
                    </div>
                    <div className='flex flex-row items-center '>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3 h-3 text-primary">
                            <path fillRule="evenodd" d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z" clipRule="evenodd" />
                        </svg>
                        <p className='px-3 text-[14px]'>Lead 6 - 10</p>
                    </div>
                    <Link className='flex flex-row items-center py-3 text-primary font-bold hover:text-gray-600' href={''}>View and Apply <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                    </Link>
                </div> */}
            </div>
        </div>
    )
}
