import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { BiVideoPlus } from "react-icons/bi";
import { CiBellOn } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { CgDarkMode } from "react-icons/cg";


const Header = () => {
  return (
    <header className=' bg-[#0f0f0f]'>
        <div className='flex justify-between ml-[20px] mr-[20px] mt-5 mb-5 '>
            <div className='start flex justify-between items-center gap-5'>
                <button><GiHamburgerMenu className='text-white text-2xl hover:rounded-full bg-hoveryt' /></button>
                <button><img src="../../img/ytlogo2.png" alt=""  className='w-[60px] h-[30px] '/></button>
                <button><h5 className='text-xl text-white'>Youtube</h5></button>
            </div>
            <div className='center flex items-center justify-between'>
                    <input type="text" placeholder=' Search' className='relative rounded-l-full w-[500px] p-2 bg-[#121212] h-[40px] outline outline-[#222222]'  />
                        <button className='rounded-r-full  py-2 px-4 h-[46px] mr-5 bg-hoveryt'><CiSearch className='text-white text-xl'/></button>
                <button className='rounded-full bg-hoveryt p-2'><FaMicrophone className='text-white text-2xl '/></button>
            </div>
            <div className='end'>
                <ul className='flex justify-between items-center gap-5 mt-1'>
                    <li><button><CgDarkMode className='text-white text-2xl'/></button></li>
                    <li><button><BiVideoPlus className='text-white text-2xl ' /></button></li>
                    <li><button><CiBellOn  className='text-white text-2xl'/></button></li>
                    <li><button><img src="../../img/user-icon.jpg" alt="" className='rounded-full size-[40px]'/></button></li>
                </ul>
            </div>
        </div>
{/* hover:overflow-auto */}



    </header>
  )
}

export default Header
