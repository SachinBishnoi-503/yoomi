import React from 'react'
import Workout from '../assets/images/webp/workout-image.webp'
 
const YourWorkout = () => {
  return (
    <div className='mt-[-166px]'>
      <div className='container'>
        <div className='flex justify-center items-center'>
          <img src={Workout} alt="workout-image-not-found" />
        </div>
      </div>
    </div>
  )
}

export default YourWorkout