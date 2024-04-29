import React from 'react'
import Header from '../partials/Header'
import Sidebar from '../partials/Sidebar'
import YtVideos from './YtVideos'
import SliderCat from '../partials/SliderCat'


const Home = () => {
  return (
    <div>
      
      <div>
      <Header/>
      <div className="grid grid-cols-[0fr_1fr]">
        <Sidebar/>
        <div className="p-5">
          <div className="mb-5">
            <SliderCat />
          </div>
          <div className="grid grid-cols-5  auto-rows-max">
            <YtVideos />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home
