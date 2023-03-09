import React from 'react'


const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center flex-col items-center p-4'>
<form method="POST" action="https://getform.io/f/44ef1251-56b2-47ca-a43b-9c3faddf1d63" className='flex flex-col max-w-[600px] w-full'>
    <div className='pb-8'>
        <h1 className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-400'>Contact</h1>
        <p className='text-gray-300 py-4'>Lets Talk! Let's engage and collaborate in building the next project together. 
        <br /> Write your email on the email section. I'm just one call away!</p>
        </div>

        <input className=' my-4 p-4 bg-white rounded-lg' type="text" placeholder='Name' name='name' />
        <input className='my-4 p-4 bg-white rounded-lg' type="text" placeholder='Email' name='email' />
        <textarea className='my-6 p-4 bg-white rounded-lg' name="message" id="" cols="10" rows="10" placeholder='Message'></textarea>

        <button className='text-white border-2 hover:bg-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>      
</form>
<div className='w-full bg-[#000]'>
<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
    <div className='flex justify-between'>
        <div className='flex flex-col'>
            <h1 className='text-2xl font-bold text-gray-300'>Esther Kamau</h1>
            <p className='text-gray-300'>Software Developer</p>
            </div>
            <
</div>
</div>
  )
}

export default Contact