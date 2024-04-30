import React from 'react'
import Slider from "react-slick";


const SliderCat = () => {

  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 10,
    swipeToSlide: true,
    variableWidth: true
  };
    
  return (
    <>
        <div className="slider-container ">
      <Slider {...settings}>
        <div>
        <button className='bg-[#3f3f3f] text-white rounded-lg  py-2 px-5'>All</button>
        </div>
        <div>
        <button className='bg-[#3f3f3f] text-white rounded-lg  py-2 px-5'>5mins</button>
        </div>
        <div>
        <button className='bg-[#3f3f3f] text-white rounded-lg  py-2 px-5'>Gaming</button>
        </div>
        <div>
        <button className='bg-[#3f3f3f] text-white rounded-lg  py-2 px-5'>Music</button>
        </div>
        <div>
        <button className='bg-[#3f3f3f] text-white rounded-lg  py-2 px-5'>Genshin Impact</button>
        </div>
        <div>
        <button className='bg-[#3f3f3f] text-white rounded-lg  py-2 px-5'>J-Pop</button>
        </div>
        <div>
        <button className='bg-[#3f3f3f] text-white rounded-lg  py-2 px-5'>JavaScript</button>
        </div>
        <div>
        <button className='bg-[#3f3f3f] text-white rounded-lg  py-2 px-5'>Live</button>
        </div>
        <div>
        <button className='bg-[#3f3f3f] text-white rounded-lg  py-2 px-5'>Valorant</button>
        </div>
        <div>
        <button className='bg-[#3f3f3f] text-white rounded-lg  py-2 px-5'>Mixes</button>
        </div>
        <div>
        <button className='bg-[#3f3f3f] text-white rounded-lg  py-2 px-5'>Basketball</button>
        </div>
        <div>
        <button className='bg-[#3f3f3f] text-white rounded-lg  py-2 px-5'>Pop Rock</button>
        </div>
        <div>
        <button className='bg-[#3f3f3f] text-white rounded-lg  py-2 px-5'>Indie Rock</button>
        </div>
        <div>
        <button className='bg-[#3f3f3f] text-white rounded-lg  py-2 px-5'>Visual Arts</button>
        </div>
        <div>
        <button className='bg-[#3f3f3f] text-white rounded-lg  py-2 px-5'>Design</button>
        </div>
        <div>
        <button className='bg-[#3f3f3f] text-white rounded-lg  py-2 px-5'>Upload</button>
        </div>
        <div>
        <button className='bg-[#3f3f3f] text-white rounded-lg  py-2 px-5'>Watched</button>
        </div>
        <div>
        <button className='bg-[#3f3f3f] text-white rounded-lg  py-2 px-5'>New to you</button>
        </div>
        <div>
        <button className='bg-[#3f3f3f] text-white rounded-lg  py-2 px-5'>Mixes</button>
        </div>
        <div>
        <button className='bg-[#3f3f3f] text-white rounded-lg  py-2 px-5'>Cooking</button>
        </div>
        <div>
        <button className='bg-[#3f3f3f] text-white rounded-lg  py-2 px-5'>Nightcore</button>
        </div>
        <div>
        <button className='bg-[#3f3f3f] text-white rounded-lg  py-2 px-5'>java</button>
        </div>
        <div>
        <button className='bg-[#3f3f3f] text-white rounded-lg  py-2 px-5'>C++</button>
        </div>
        <div>
        <button className='bg-[#3f3f3f] text-white rounded-lg  py-2 px-5'>C#</button>
        </div>
      
      

        
      </Slider>
    </div>
    </>
  )
}

export default SliderCat
