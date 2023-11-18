import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/* Hero component's Overlay - Start */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/10 flex flex-col justify-center'>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
                        Your <span className='text-orange-500'>Favorite</span> Foods
                    </h1>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
                        Delivered <span className='text-orange-500'>Instantly</span>
                    </h1>
            </div>
            <img className="w-full max-h-[500px] object-cover" src='https://images.pexels.com/photos/5553620/pexels-photo-5553620.jpeg?auto=compress&cs=tinysrgb&w=1600' alt='Man holding Pizza Slice and pressing laptop'></img>
            {/* Hero component's Overlay - End */}
        </div>
    </div>
  )
}

export default Hero