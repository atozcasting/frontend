
/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Testimonial() {
  return (
    <div className='bg-gray-900 mt-5 py-3'>
      <div className="max-w-[1000px] mx-auto p-8">
        <div className='grid xs:grid-cols-1 sm:grid-cols-2 gap-4'>
          <div className='flex items-center justify-center'>
            <img src='https://www.talentrack.in/uploads/testimonial_images/775aed02-5b01-4914-24a4-99d4e946412b.jpg' alt='' width={250} className='rounded-full' />
          </div>
          <div>
            <img src='https://www.talentrack.in/images/application/modules/desktop/home_page/quote_icon.png' width={40} alt='' />
            <p className='text-sm text-white mt-5'>Thanks to A to Z for giving wings to my dreams. We all have inner talent within ourselves, but A to Z Casting has given me the opportunity to showcase my talent.
              While taking auditions, {`it's`} hard to find apt male actors or female actors from the crowd. A to Z casting agency is the platform where you can find everything from a single source.
              As an actor, AtoZ is the best resource to find all acting jobs, and as there are multiple projects on the platform, so you {`don't`} have to wait to fulfill your dream.
            </p>

            {/* <p className='text-white text-xl font-bold mt-3'>Maanvi Gagroo, Actor</p> */}
          </div>
        </div>
      </div>
    </div>
  )
}
