import React, { useState } from 'react'
import Image from 'next/image'
import './CardStyle.css'
const Card = ({data}) => {

  return (
    <div className='maindiv'>
       
       {data.image? <Image src={data.image.medium} alt="Image" width={150} height={100}/>: null}

       <div className='info'>
        <div>
        <p className='name'>{data.name}</p>
        
       <p className='text-sm font-extrabold  text-gray-500'>Rating: {data.rating.average} </p>
       </div>
       <p className='text-xs font-semibold '>Language: {data.language}</p>
       </div>

    </div>
  )
}

export default Card
