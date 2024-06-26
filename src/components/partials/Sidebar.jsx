import React from 'react'
import Footer from './Footer';
import { IoMdHome } from "react-icons/io";
import { MdSubscriptions } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { IoChevronForwardSharp } from "react-icons/io5";
import { IoAddCircleOutline } from "react-icons/io5";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { RiPlayList2Fill } from "react-icons/ri";
import { PiVideoDuotone } from "react-icons/pi";
import { PiClockLight } from "react-icons/pi";
import { AiOutlineLike } from "react-icons/ai";
import { SlFire } from "react-icons/sl";
import { PiMusicNoteThin } from "react-icons/pi";
import { BiMoviePlay } from "react-icons/bi";
import { SiYoutubegaming } from "react-icons/si";
import { FaRegNewspaper } from "react-icons/fa6";
import { IoTrophyOutline } from "react-icons/io5";
import { GiHanger } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { CiFlag1 } from "react-icons/ci";
import { IoHelpCircleOutline } from "react-icons/io5";
import { MdOutlineFeedback } from "react-icons/md";
// import svg
import  kids from "../../../public/img/kids.svg"
import  prem from "../../../public/img/premium.svg"
import  ytmusic from "../../../public/img/yt-music.svg"
import { Link } from 'react-router-dom';




const Sidebar = () => {
  return (
    <>
      {/* SIDEBAR */}

        <div className='headerHori w-[240px] h-screen hover:overflow-y-scroll  '>
            <ul className=' mb-2  '>
                <li className=' '>
                    {/* must finished */}
                    <Link to="#" className='text-white flex  items-center gap-3 rounded-md bg-sidebarhover py-2 px-3 mb-2'>
                    <IoMdHome />
                    Home</Link>
                </li>
                <li>
                <Link to="#" className='text-white flex  items-center gap-3 rounded-md hover:bg-sidebarhover  py-2 px-3 mb-2'>
                    <SiYoutubeshorts />
                    Shorts</Link>
                </li>
                <li>
                <Link to="#" className='text-white flex  items-center gap-3 rounded-md hover:bg-sidebarhover  py-2 px-3 mb-2'>
                    <MdSubscriptions />
                    Subscriptions</Link>
                </li>
            </ul>

            <ul className='border-t-2 border-[#3f3f3f]'>
                <li className='text-white flex  items-center gap-1 rounded-md hover:bg-sidebarhover py-2 px-3 mb-1 mt-1'>
                    <p>You</p>
                    <IoChevronForwardSharp />
                </li>
                <li>
                <Link to="#" className='text-white flex  items-center gap-3 rounded-md hover:bg-sidebarhover py-2 px-3 mb-2'>
                    <IoMdHome />
                    Your Channel</Link>
                </li>
                <li>
                <Link to="#" className='text-white flex  items-center gap-3 rounded-md hover:bg-sidebarhover py-2 px-3 mb-2'>
                    <RxCounterClockwiseClock />
                    History</Link>
                </li>
                <li>
                    <Link to="#" className='text-white flex  items-center gap-3 rounded-md hover:bg-sidebarhover py-2 px-3 mb-2'>   
                    <RiPlayList2Fill />
                    Playlist</Link>
                </li>
                <li>
                <Link to="#" className='text-white flex  items-center gap-3 rounded-md hover:bg-sidebarhover py-2 px-3 mb-2'>   
                    <PiVideoDuotone />
                    Playlist</Link>
                </li>
                <li>
                     <Link to="#" className='text-white flex  items-center gap-3 rounded-md hover:bg-sidebarhover py-2 px-3 mb-2'>   
                    <PiClockLight />
                    Watch later</Link>
                </li>
                <li>
                    <Link to="#" className='text-white flex  items-center gap-3 rounded-md hover:bg-sidebarhover py-2 px-3 mb-2'>
                    <AiOutlineLike />
                    liked Videos</Link>
                </li>
            </ul>

            <ul className='border-t-2 border-[#3f3f3f]'>
                <li className='text-white flex  items-center gap-5 rounded-md hover:bg-sidebarhover py-2 px-3 mb-2 mt-1'>
                    <p>Subscription</p>
                </li>
                <li>
                <Link to="#" className='text-white flex  items-center gap-5 rounded-md hover:bg-sidebarhover py-2 px-3 mb-2 '>
                    <img src="https://via.placeholder.com/150x150" alt=""  className='rounded-full size-[20px]'/>
                    <p>YOU</p>
                    </Link>
                </li>
                <li>
                    <Link to="#" className='text-white flex  items-center gap-5 rounded-md hover:bg-sidebarhover py-2 px-3 mb-2 '>
                    <img src="https://via.placeholder.com/150x150" alt=""  className='rounded-full size-[20px]'/>
                    <p>You</p>
                    </Link>
                </li>
                <li>
                     <Link to="#" className='text-white flex  items-center gap-5 rounded-md hover:bg-sidebarhover py-2 px-3 mb-2 '>
                    <img src="https://via.placeholder.com/150x150" alt=""  className='rounded-full size-[20px]'/>
                    <p>You</p>
                    </Link>
                </li>
                <li>
                    <Link to="#" className='text-white flex  items-center gap-5 rounded-md hover:bg-sidebarhover py-2 px-3 mb-2 '>
                    <img src="https://via.placeholder.com/150x150" alt=""  className='rounded-full size-[20px]'/>
                    <p>You</p>
                    </Link>
                </li>
                <li>
                    <Link to="#" className='text-white flex  items-center gap-5 rounded-md hover:bg-sidebarhover py-2 px-3 mb-2 '>
                    <IoAddCircleOutline className='size-[20px]'/>
                    <p>You</p>
                    </Link>
                </li>
                
                
            </ul>

            <ul className='border-t-2 border-[#3f3f3f]'>
                <li className='text-white flex  items-center gap-5 rounded-md hover:bg-sidebarhover py-2 px-3 mb-2 mt-1'>
                    <p>Explore</p>
                </li>
                <li>
                    <Link to="#" className='text-white flex  items-center gap-5 rounded-md hover:bg-sidebarhover py-2 px-3 mb-2 '>
                    <SlFire />
                    <p>Trending</p>
                    </Link>
                </li>
                <li>
                    <Link to="#" className='text-white flex  items-center gap-5 rounded-md hover:bg-sidebarhover py-2 px-3 mb-2 '>
                    <PiMusicNoteThin />
                    <p>Music</p>
                    </Link>
                </li>
                <li>
                    <Link to="#" className='text-white flex  items-center gap-5 rounded-md hover:bg-sidebarhover py-2 px-3 mb-2 '>
                    <BiMoviePlay />
                    <p>Movies</p>
                    </Link>
                </li>
                <li>
                    <Link to="#" className='text-white flex  items-center gap-5 rounded-md hover:bg-sidebarhover py-2 px-3 mb-2 '>
                    <SiYoutubegaming />
                    <p>Gaming</p>
                    </Link>
                </li>
                <li>
                    <Link to="#" className='text-white flex  items-center gap-5 rounded-md hover:bg-sidebarhover py-2 px-3 mb-2 '>
                    <FaRegNewspaper />
                    <p>News</p>
                    </Link>
                </li>
                <li>
                    <Link to="#" className='text-white flex  items-center gap-5 rounded-md hover:bg-sidebarhover py-2 px-3 mb-2 '>
                    <IoTrophyOutline />
                    <p>Sports</p>
                    </Link>
                </li>
                <li>
                    <Link to="#" className='text-white flex  items-center gap-5 rounded-md hover:bg-sidebarhover py-2 px-3 mb-2 '>
                    <GiHanger />
                    <p>Fashion & Beauty</p>
                    </Link>
                </li>
                
                
            </ul>

            <ul className='border-t-2 border-[#3f3f3f]'>
                <li className='text-white flex  items-center gap-5 rounded-md hover:bg-sidebarhover py-2 px-3 mb-2 mt-1'>
                    <p>More from youtube</p>
                </li>
                <li>
                    <Link to="#" className='text-white flex  items-center gap-5 rounded-md hover:bg-sidebarhover py-2 px-3 mb-2 '>
                    <img src={prem} alt=""  className='size-[24px]'/>
                    <p>Youtube Premiuim</p>
                    </Link>
                </li>
                <li>
                    <Link to="#" className='text-white flex  items-center gap-5 rounded-md hover:bg-sidebarhover py-2 px-3 mb-2 '>
                    <img src={prem} alt=""  className='size-[24px]'/>
                    <p>Youtube Studio</p>
                    </Link>
                </li>
                <li>
                    <Link to="#" className='text-white flex  items-center gap-5 rounded-md hover:bg-sidebarhover py-2 px-3 mb-2 '>
                    <img src={ytmusic} alt=""  className='size-[24px]'/>
                    <p>Youtube Music</p>
                    </Link>
                </li>
                <li>
                    <Link to="#" className='text-white flex  items-center gap-5 rounded-md hover:bg-sidebarhover py-2 px-3 mb-2 '>
                    <img src={kids} alt=""  className='size-[24px]'/>
                    <p>Youtube Kids</p>
                    </Link>
                </li>
               
            </ul>

            <ul className='border-t-2 border-[#3f3f3f]'>
                <li>
                    <Link to="#" className='text-white flex  items-center gap-5 rounded-md hover:bg-sidebarhover py-2 px-3 mb-2 mt-1'>
                    <IoSettingsOutline />
                    <p>Settings</p>
                    </Link>
                </li>
                <li>
                    <Link to="#" className='text-white flex  items-center gap-5 rounded-md hover:bg-sidebarhover py-2 px-3 mb-2 '>
                    <CiFlag1 />
                    <p>Report History</p>
                    </Link>
                </li>
                <li>
                    <Link to="#" className='text-white flex  items-center gap-5 rounded-md hover:bg-sidebarhover py-2 px-3 mb-2 '>
                    <IoHelpCircleOutline />
                    <p>Help</p>
                    </Link>
                </li>
                <li>
                    <Link to="#" className='text-white flex  items-center gap-5 rounded-md hover:bg-sidebarhover py-2 px-3 mb-2 '>
                    <MdOutlineFeedback />
                    <p>Send Feedback</p>
                    </Link>
                </li>
               
            </ul>

           <Footer/>

        </div>
   
    </>
  )
}

export default Sidebar
