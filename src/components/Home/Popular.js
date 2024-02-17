"use client"
import { raleway } from '@/app/fonts'
import React, { useState, useMemo } from 'react'
export default function Popular() {
    const types = ['Acting', 'Voiceover', 'Modelling', 'Content Creator'];
    // const list = [
    //     {
    //         type: 'Acting',
    //         data: ['All Acting Jobs', 'Paid Jobs', 'Remote Acting Jobs', 'Kids Audition', 'Movie Audition']
    //     },
    //     {
    //         type: 'Voiceover',
    //         data: ['All Voiceover Jobs', 'Paid Jobs', 'Remote Jobs', 'Commercial', 'Corporate', 'Animation', 'Video Games', 'Audiobooks and Podcasts', 'E-Learning']
    //     },
    //     {
    //         type: 'Modelling',
    //         data: ['All Modeling Jobs', 'Paid Modeling Jobs', 'New York City Castings', 'LA Castings', 'Commercial Castings', 'UGC Jobs', 'Photography / Stills Jobs', 'Promo', 'Modeling']
    //     },
    //     {
    //         type: 'Content Creator',
    //         data: ['All Content Creator Jobs', 'Paid Jobs', 'UGC Jobs', 'Remote Jobs', 'New York City Jobs', 'LA Jobs']
    //     },

    // ];
    const obj = {
        'Acting': ['All Acting Jobs', 'Paid Jobs', 'Remote Acting Jobs', 'Kids Audition', 'Movie Audition'],
        'Voiceover': ['All Voiceover Jobs', 'Paid Jobs', 'Remote Jobs', 'Commercial', 'Corporate', 'Animation', 'Video Games', 'Audiobooks and Podcasts', 'E-Learning'],
        'Modelling': ['All Modeling Jobs', 'Paid Modeling Jobs', 'New York City Castings', 'LA Castings', 'Commercial Castings', 'UGC Jobs', 'Photography / Stills Jobs', 'Promo', 'Modeling'],
        'Content Creator': ['All Content Creator Jobs', 'Paid Jobs', 'UGC Jobs', 'Remote Jobs', 'New York City Jobs', 'LA Jobs'],
    };
    const [activePopular, setActivePopular] = useState('Acting');

    // const subItems = useMemo(() => {
    //     let listItem = list.find(item => item.type == activePopular)
    //     return listItem.data.map((item, i) => <a href='' key={i} className='bg-gray-200 m-2 rounded-[15%] px-6 py-2 hover:bg-primary hover:text-white transition-all duration-200 ease-in-out'>{item}</a>)
    // }, [activePopular])

    return (
        <div className="max-w-[1000px] mx-auto xs:pt-[80px] p-0">
            <h3 className={`${raleway.className} text-3xl font-bold mb-2 p-2 px-4`}>Popular Jobs</h3>

            <div className='flex xs:flex-col md:flex-row items-center'>
                <div className="lg:w-1/4 w-full p-4 flex xs:flex-row md:flex-col flex-wrap items-start ">
                    {
                        types.map((item, index) => {
                            return <button key={index} className={`${raleway.className} text-2xl tracking-wide font-bold text-stone-500 p-2 transition-all duration-100 ease-in-out ${item == activePopular && 'xs:border-b-2 md:border-l-2 md:border-b-0 border-primary'}`} onClick={() => setActivePopular(item)}>{item}</button>
                        })
                    }
                </div>
                <div className='lg:w-3/4 w-full flex flex-wrap xs:items-center md:justify-start'>
                    {/* {subItems} */}
                    {obj[activePopular] && Object.values(obj[activePopular]).map((item, i) => <a href='' key={i} className='bg-gray-200 m-2 rounded-full px-6 py-2 hover:bg-primary hover:text-white transition-all duration-200 ease-in-out'>{item}</a>)}
                </div>
            </div>
        </div>
    )
}
