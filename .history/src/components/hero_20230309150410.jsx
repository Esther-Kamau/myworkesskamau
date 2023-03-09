import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Hero = () => {
  return (
    <div name='hero' className='w-full h-screen bg-[#000]'>

        {/*Container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#0357EE] font-weight:600'>Hi, my name is </p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Esther Kamau</h1>
            <h2 className='text-5xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Front-End Developer X UI/UX Designer</h2>
            <p className='text-[#8892b0] py-4 max-w[700px]'>I'm an aspiring Front-end Engineer specializing in building and designing exceptional
                digital experiences. Currently, I'm focused on upskilling while building more responsive applications.
            </p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#0357EE] hover:border-[#0357EE]'>View Work 
                <span className = 'group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3'/>
                </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Hero
