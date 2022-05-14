import React from 'react'
import logo from '../../Assets/pngwinggreen.png';


const Logo = () => {
  return (
    <>
    <div className='container logoImage'>
    <img src={logo} alt='This is a logo img' className="logo" width={150}></img>
    </div>
    </>
  )
}

export default Logo
