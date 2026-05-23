import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'


const Services = () => {
  return (
    <div id='Services' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo underline'>What I Offer</h4>
      <h2 className='text-center
       text-5xl font-Ovo'>My Services</h2>

       <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        I am a passionate web developer focused on creating clean, responsive, and user-friendly websites.
         I enjoy turning ideas into real projects using modern technologies like HTML, CSS, JavaScript, React,
          and Next.js. I am continuously learning and improving my skills to build better digital experiences and professional 
          web applications.
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
            {serviceData.map(({icon, title, description, link}, index)=>(
                <div key={index}
                    className='border border-gray-400 rounded-lg px-8 py-12 hover:-translate-y-1 transition-all duration-500
                     hover:shadow-[4px_4px_0_#000] cursor-pointer hover:bg-lightHover '>
                     
                <Image src={icon} alt='icon' className='w-10 ' />
                <h3 className=' text-lg my-4 text-gray-700'>{title}</h3>
                <p className=' text-sm text-gray-600 leading-5'>{description}

                </p>
                <a href={link} className='flex  items-center gap-2 text-sm mt-5'>
                    Read More <Image src={assets.right_arrow} alt='Services arrow' className='w-4' />
                </a>
                
                </div>
            
            ))}
        </div>
  
    </div>
  )
}

export default Services
