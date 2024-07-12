import React from 'react'
import buyguide from'../assets/buyguide.png'
function Buyguide() {
  return (
    <>
    <div className='lg:pl-44 pl-20 mt-5'>
      <h1 className='text-3xl font-bold text-gray-700'>How To Buy ?</h1>
    </div>
      <div className='grid md:grid-cols-3 justify-center md:pl-44 w-full h-auto gap-10 md:gap-0 p-5'>
        <div className='w-60 h-60 bg-white rounded-lg '>
          <div className='h-10 w-56 ml-2 mt-3 rounded-t-lg'>
             <h3 className='text-gray-700 text-xl font-semibold'>Choose Your Car</h3>
          </div>
          <div className='h-44  ml-2 rounded-b-lg w-56' style={{backgroundImage:`url(${buyguide})`
          ,backgroundSize:'cover'}}>

          </div>
        </div>
        <div className='w-60 h-60 bg-white rounded-lg '>
          <div className='h-10 w-56 ml-2 mt-3 rounded-t-lg'>
             <h3 className='text-gray-700 text-xl font-semibold'>Choose Your Car</h3>
          </div>
          <div className='h-44  ml-2 rounded-b-lg w-56' style={{backgroundImage:`url(${buyguide})`
          ,backgroundSize:'cover'}}>

          </div>
        </div>
        <div className='w-60 h-60 bg-white rounded-lg '>
          <div className='h-10 w-56 ml-2 mt-3 rounded-t-lg'>
             <h3 className='text-gray-700 text-xl font-semibold'>Choose Your Car</h3>
          </div>
          <div className='h-44  ml-2 rounded-b-lg w-56' style={{backgroundImage:`url(${buyguide})`
          ,backgroundSize:'cover'}}>

          </div>
        </div>
    </div>
    </>
  
  )
}

export default Buyguide
  