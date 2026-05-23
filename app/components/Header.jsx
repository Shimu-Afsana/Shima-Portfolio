import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center -mar-2'>
        <div className='mt-30'>
             <Image src={assets.profile_img} alt='' className='rounded-full w-32 '/>
             
        </div>
                <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'> Hi! I'm  Shima Haque<Image src={assets.hand_icon} alt='Profile img' className='w-6' /> </h3> 
                
                <h3 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>Web developer based in Bangladesh</h3>
                <p className='max-w-2xl mx-auto font-Ovo'> I am a web developer from Dhaka, Bangladesh with 3 years of experience in multiple companies like Everglory Container Lines, Comtect Network System and Waqia Group.</p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href="#contact" className='px-10 py-3 border rounded-full border-gray-500 bg-black text-white 
                flex items-center gap-2'>Contact Me <Image src={assets.right_arrow_white} 
                alt='' className='w-4'/></a>

                <a href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500
                 flex items-center gap-2'>My Resume <Image src={assets.download_icon} 
                alt='' className='w-4'/></a>
            </div>
        </div>
  )
}

export default Header
