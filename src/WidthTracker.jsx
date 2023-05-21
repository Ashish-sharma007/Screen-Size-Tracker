import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const WidthTracker = () => {

const [widthTracker, setWidthTracker] = useState(window.innerWidth,)
const [heightTracker, setHeightTracker] = useState(window.innerHeight)

useEffect(()=>{
window.addEventListener('resize', function(){
  setWidthTracker(window.innerWidth)
})

})

useEffect(()=>{
  window.addEventListener('resize', function(){
    setHeightTracker(window.innerHeight)
  })
  
  })


  return (
    <div className='mt-28 flex justify-center'>
    <div className='text-white text-4xl bg-red-500 md:w-32 lg:w-48' > Window Width : {widthTracker} </div>
    <div className='text-white text-4xl bg-amber-400 md:w-32 lg:w-48'>Window Height : {heightTracker} </div>

    </div>
  )
}

export default WidthTracker