import React from 'react'

const HeadlineCards = () => {
  return (
    <div div className='max-w-[1640] max-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
    {/* Card 1 - Start*/}
        <div className='rounded-xl relative'>
            {/* Overlay - Start */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-2'>Your first Pizza, on us!</p>
                <p className='px-2'>Through 12/26</p>
                <button className='border-white bg-white text-black mx-2 absolute'>Order Now</button>
            </div>
            {/* Overlay - End */}
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1200' alt='Pizza'></img>
        </div>
    {/* Card 1 - End*/}

        {/* Card 2 - Start*/}
        <div className='rounded-xl relative'>
            {/* Overlay - Start */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-2'>Your first Burger, on the house!</p>
                <p className='px-2'>Through 12/26</p>
                <button className='border-white bg-white text-black mx-2 absolute'>Order Now</button>
            </div>
            {/* Overlay - End */}
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/1251196/pexels-photo-1251196.jpeg?auto=compress&cs=tinysrgb&w=400' alt='Burger'></img>
        </div>
    {/* Card 2 - End*/}

        {/* Card 3 - Start*/}
        <div className='rounded-xl relative'>
            {/* Overlay - Start */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-2'>Your first biryani, completely free!</p>
                <p className='px-2'>Through 12/26</p>
                <button className='border-white bg-white text-black mx-2 absolute'>Order Now</button>
            </div>
            {/* Overlay - End */}
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/7426864/pexels-photo-7426864.jpeg?auto=compress&cs=tinysrgb&w=400' alt='Plate of biryani'></img>
        </div>
    {/* Card 3 - End*/}

    </div>
  )
}

export default HeadlineCards