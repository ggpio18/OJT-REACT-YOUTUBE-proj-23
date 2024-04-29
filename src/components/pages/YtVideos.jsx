import React from 'react'

import { ytVideos } from './data'
import { baseImgUrl2 } from '../helpers/functions-general'
const YtVideos = () => {
  return (
    <>
      
        
        {ytVideos.map((item, key)=>{
            return(
          <div className="p-3" key={key} item={item}>
            <div className="playback relative mb-3">
              <img
                src={`${baseImgUrl2}/videos/${item.img}`}
                className="w-[355px] h-[180px] object-cover"
                alt=""
              />
              <h4 className="time absolute bottom-0 right-0 z-10 bg-stone-500 rounded-md px-2 text-xs ">{item.duration}</h4>
            </div>
            <div className="flex gap-3">
              <div>
                <img
                  src={`${baseImgUrl2}/profile/${item.profile}`}
                  alt=""
                  className="w-[40px] h-[40px] rounded-full"
                />
              </div>
              <div >
                <h2 className='text-white'>{item.title}</h2>
                {/* <h3 className='text-white'>Lorem, ipsum.</h3> */}
                <h3 className='text-[#5d5d5d]'>{item.channel}.</h3>
                <h2>
                  <span className='text-[#5d5d5d]'>{item.views} views •</span> <span className="dot"></span>{" "}
                  <span className='text-[#5d5d5d]'>{item.uploadTime}</span>
                </h2>
              </div>
            </div>
          </div>
          )
        })}

          
        
        
    </>
  )
}

export default YtVideos
