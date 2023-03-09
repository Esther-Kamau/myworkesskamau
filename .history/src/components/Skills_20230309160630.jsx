import React from 'react';

import HTML from '../assests/html.png';
import CSS from '../assests/css.png';
import Javascript from '../assests/javascript.png';
import Tailwind from '../assests/tailwind.png';
import Figma from '../assests/figma.png';
// import SQL from '../assests/sql.png';
import REACT from '../assests/react.png';




const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f]  text-gray-300'>
       {/*Container*/}
       <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
            <p className='py-4'>These are the Technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8'>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration:500'>
            <img src={HTML} alt="HTML icon" />
            <p>HTML</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration:500'>
            <img src={CSS} alt="CSS icon" />
            <p>CSS</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration:500'>
            <img src={Javascript} alt="JS icon" />
            <p>Javascript</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration:500'>
            <img src={REACT} alt="React icon" />
            <p>REACT</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration:500'>
            <img src={Tailwind} alt="Tailwind icon" />
            <p>Tailwind</p>
        </div>
        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration:500'>
            <img src={Figma} alt="Figma icon" />
            <p>Figma</p>
        </div>
        {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration:500'>
            <img src={SQL} alt="SQL icon" />
            <p>SQL</p>
        </div> */}
        
        </div>
        </div>
       </div>

       
      
  )
}

export default Skills