import React, {useState} from 'react';
import {FaBars, FaTimes,FaGithub,FaLinkedin, FaFacebook, FaLinkedinIn} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assests/logo.png'
import {Link} from 'react-scroll'

const Resume_url = 'http://Esther-Kamau.github.io/Z-to-M/design_resume.pdf'
const Navbar = () => {
    const [nav, SetNav] = useState(false)
    const handleClick = () => SetNav(!nav)
    const downloadFileAtURL = (url) =>{
     
    }
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
<div>
    <img src={Logo} alt='logo image' style={{width: '180px'}} />
</div>

{/*Menus*/}

    <ul className='hidden md:flex'>
        <li> <Link  to="hero" smooth={true}  duration={500} >
          Home
        </Link></li>
        <li> <Link  to="about" smooth={true}  duration={500} >
          About
        </Link></li>
        <li> <Link  to="skills" smooth={true}  duration={500} >
          Skills
        </Link></li>
        <li> <Link  to="work" smooth={true}  duration={500} >
          Work
        </Link></li>
        <li> <Link  to="contact" smooth={true}  duration={500} >
          Contact
        </Link></li>
</ul>

{/*Hamburger*/}
<div onClick={handleClick} className='md:hidden z-10'>
 { !nav ? <FaBars className='text-3xl' /> : <FaTimes className='text-3xl' />}
</div>

{/*Mobile Menus*/}
<ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li  className='py-6 text-4xl'> <li> <Link onClick={handleClick} to="hero" smooth={true}  duration={500} >
          Home
        </Link></li></li>
        <li className='py-6 text-4xl'> <li> <Link onClick={handleClick}  to="about" smooth={true}  duration={500} >
          About
        </Link></li></li>
        <li className='py-6 text-4xl'><li> <Link onClick={handleClick} to="skills" smooth={true}  duration={500} >
          Skills
        </Link></li></li>
        <li className='py-6 text-4xl'><li> <Link onClick={handleClick} to="work" smooth={true}  duration={500} >
          Work
        </Link></li></li>
        <li className='py-6 text-4xl'> <li> <Link onClick={handleClick} to="contact" smooth={true}  duration={500} >
          Contact
        </Link></li></li>  
</ul>
{/*Social Links*/}
<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
<ul>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-700 '>
        <a className='flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/esther-kamau-ba7355262'>
            LinkedIn <FaLinkedinIn size={30}/>
            </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#3333] '>
        <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/Esther-Kamau'>
          Github <FaGithub size={30}/>
            </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#8d2a69] '>
        <a className='flex justify-between items-center w-full text-gray-300' href='kamauestherofficial@gmail.com'>
           Email <HiOutlineMail size={30}/>
            </a>
    </li>
    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[rgba(6,175,3,0.2)] '>
        <a onClick={() =>{downloadFileAtURL(Resume_url)}} className='flex justify-between items-center w-full text-gray-300' href='/'>
           Resume <BsFillPersonLinesFill size={30}/>
            </a>
    </li>
</ul>
</div>

</div>
   
  )
}

export default Navbar
