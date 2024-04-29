import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className='border-t-2 border-[#3f3f3f] mt-2 '>
        <div className="container">
      <ul className=' flex gap-3   py-1 mt-3'>
            <li><a href="">About</a></li> <li><a href="">Press</a></li> <li><a href="">Copyright</a></li>
    </ul> 
    <ul className=' flex gap-3   py-1'>
            <li><a href="">Contact us</a></li> <li><a href="">Creators</a></li> 
    </ul> 
    <ul className=' flex gap-3  py-1'>
            <li><a href="">Advertise</a></li> <li><a href="">Developers</a></li> 
    </ul> 
    {/* 2nd footer */}
    <ul className='footer flex gap-3    py-1 mt-3'>
            <li><a href="">Terms</a></li> <li><a href="">Privacy</a></li> <li><a href="">Policy & safety</a></li>
    </ul> 
    <ul className=' flex gap-3  py-1'>
            <li><a href="">How youtube works</a></li> 
    </ul> 
    <ul className=' flex gap-3  py-1'>
            <li><a href="">Test new features</a></li> 
    </ul> 

    <span className='text-xs text-[#717171] mt-2 mb-2'> © 2024 Google LLC</span>
    </div>
    </footer>
    </>
  )
}

export default Footer
