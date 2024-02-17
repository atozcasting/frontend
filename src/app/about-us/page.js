/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { raleway } from '../fonts'

export default function About() {
  const items = [
    { text: 'Actors', img: '/icons/actor.png' },
    { text: 'Dancers', img: '/icons/dancer.webp' },
    { text: 'Singers', img: '/icons/singer.png' },
    { text: 'Models', img: '/icons/model.png' },
    { text: 'Musician', img: '/icons/musician.png' },
    { text: 'Voice Artist', img: '/icons/voiceart.png' },
  ]
  return (
    <div className="xs:pt-[80px] md:p-0">
      <div className='max-w-[1000px] mx-auto p-3'>
        <h3 className={`${raleway.className} text-4xl mb-4 pb-2 border-b-2 border-gray-300`}>About A2Zcasting</h3>
        <p className='xs: text-md sm:text-xl'>A2Zcasting is a pioneering mobile app/brand in India, envisioned to be the definitive mobile-first platform for Media and Entertainment Industry. We are a talent-hiring & engagement platform in the country - combined with being the first specialized talent-service marketplace for the industry.<br></br>This includes a vast market of...</p>

        <div className='grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 my-4'>
          {
            items.map((i, idx) => {
              return <div key={idx} className='flex flex-col items-center justify-center rounded-full border-2 p-4'>
                <img src={i.img} alt='' width={60} />
                <p className={`py-3 ${raleway.className} font-medium`}>{i.text}</p>
              </div>
            })
          }

        </div>
        <p className='xs: text-md sm:text-xl py-3'>A2Zcasting is a pioneering mobile app/brand in India, envisioned to be the definitive mobile-first platform for Media and Entertainment Industry. We are a talent-hiring & engagement platform in the country - combined with being the first specialized talent-service marketplace for the industry.<br></br>This includes a vast market of...</p>
        <h3 className={`${raleway.className} font-bold text-3xl my-4 pb-2 border-b-2 border-gray-300 `}>Heading 2</h3>
        <p className='xs: text-md sm:text-xl py-3'>A2Zcasting is a pioneering mobile app/brand in India, envisioned to be the definitive mobile-first platform for Media and Entertainment Industry. We are a talent-hiring & engagement platform in the country - combined with being the first specialized talent-service marketplace for the industry.<br></br>This includes a vast market of...</p>
      </div>
    </div>
  )
}
