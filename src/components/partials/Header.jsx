import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { BiVideoPlus } from "react-icons/bi";
import { CiBellOn } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";


const Header = () => {
  return (
    <header>
        <div className='flex justify-between ml-[20px] mr-[20px] mt-5 mb-5 '>
            <div className='start flex justify-between items-center gap-5'>
                <button><GiHamburgerMenu className='text-white text-2xl hover:rounded-full bg-hoveryt' /></button>
                <button><img src="../../img/ytlogo2.png" alt=""  className='w-[60px] h-[30px] '/></button>
                <button><h5 className='text-xl text-white'>Youtube</h5></button>
            </div>
            <div className='center flex items-center justify-between gap-3'>
                {/* <div className='search flex items-center justify-between gap-3'> */}
                    <input type="text" placeholder='search' className='relative rounded-full w-[600px] p-2 bg-[#121212]'/>
                    {/* <div className='text-white absolute top-0 left-0 translate-x-4'>Q</div> */}
                {/* </div> */}
                <button className='rounded-full bg-hoveryt p-2'><FaMicrophone className='text-white text-2xl'/></button>
            </div>
            <div className='end'>
                <ul className='flex justify-between items-center gap-5 mt-1'>
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
