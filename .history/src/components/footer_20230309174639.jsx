import React from 'react'

const footer = () => {
  return (
    <div className='w-full bg-pink-100 h-20 hover:bg-pink-600'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-row justify-evenly w-full h-full'>
    <p className='text-xl font-bold inline border-b- border-pink-600'>
      Copyright© Esther Kamau
        </p>

        <p className='text-xl font-bold inline border-b-4 border-pink-600'>
            All Rights Reserved
        </p>
        <p className='text-xl font-bold inline border-b-4 border-pink-600'>
      <a href="tel:+254741530747">+254741530747</a>
        </p>

       </div>
    </div>
  )
}

export default footer