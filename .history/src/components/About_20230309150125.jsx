import React from 'react'

const About = () => {
  return (

    <div name='about' className='w-full h-screen bg-[#000] text-gray-300'>
    <div className='flex flex-col justify-center items-center w-full h-full'>
      <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
        <div className='sm:text-right pb-8 pl-4'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
            About
          </p>
        </div>
        <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi, I'm Esther, you can call me Ess, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>I am passionate about building excellent software that improves the lives of those around me. 
             I also love designing mostly for clients ranging from individuals to small-businesses.
             I recently completed my undergraduate course in Computer Science and now I'm making use of my time by freelancing 
            whilst upskilling. I'm currently learning React and Node.js. I'm also a big fan of the JAMstack and I'm looking forward to
            learning more about it.</p>  
          </div>
        </div>
    </div>
  </div>


  )
}

export default About