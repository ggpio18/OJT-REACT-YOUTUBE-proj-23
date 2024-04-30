import React from 'react'
import Header from '../../partials/Header'
import Sidebar from '../../partials/Sidebar'
import YtVideos from './YtVideos'
import SliderCat from '../../partials/SliderCat'
import { ytVideos } from './data'


const Home = () => {
  return (
    <div className='h-screen fixed '>
      
      <div>
      <Header/>
      <div className="grid grid-cols-[0fr_1fr]">
        <Sidebar/>
        <div className="p-5">
          <div className="mb-3">
            <SliderCat />
          </div>
          <div className='h-screen  overflow-x-scroll'>
          <div className="grid grid-cols-5  auto-rows-max">
          {ytVideos.map((item, key)=>(
            <YtVideos item={item}  key={key}/>
          ))}
          </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home
