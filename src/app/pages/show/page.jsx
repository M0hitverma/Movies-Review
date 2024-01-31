"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation'
import Image from 'next/image';
import { FaRegPlayCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import './style.css'
const ShowDetail = () => {
  
   const [data,setData]=useState({});
   const [imgurl , setImgurl]= useState("")
   const [rating,setRating]=useState(0);
  const [active, setActive]=useState(false);

  const searchParams = useSearchParams()
  const id= searchParams.get('id')
    
  const fetchsummary=()=>{
        fetch(`http://api.tvmaze.com/shows/${id}`).then((res)=>{
          return res.json();
        }).then((response)=>{
           setData(response);
          setRating(response.rating.average);
           setImgurl(response.image.medium);
           setSrc(response.url);
           console.log(response.url);
        })
  }
  useEffect(()=>{
     fetchsummary();
  },[])

  return (


    <div className='sumdiv'>
     <div className='booking'>
      {!active?
     <button className='booking-btn' 
     type='button'
     onClick={()=>{
        setActive(!active);
     }}
     >BookTicket</button>
     :
     null}
     
     {active?
     <>
         <ImCross className='text-white mb-2 cursor-pointer' onClick={()=>{setActive(!active)}} />
      <form className='booking-form'>
    
        <label>
          <h1>Movie</h1>
        <input  type="text"  value={data.name}/>
        </label>
        <label>
          <h1 className='text-black' >Seats</h1>
        <input type="number"/>
        </label>
        <button type="button"  className=' bg-orange-300 shadow-lg p-2 rounded-md'  >Book</button>
      </form>
      </>
      :
      null 
      }
     </div>

      <div className='maincontainer'>
     <Image  className='image' src={imgurl} alt ="image" width={800} height={600}/>
    
       <div className='movieinfo'>  

     <div className='flex flex-row headings '>

      <div>
      <h1  id="heading">{data.name}</h1>

      <div className='flex flex-row gap-4 text-md font-extrabold'>
      <h1 id="language">{data.language}</h1>
      <h1 id="rating"> {rating}/10</h1>
      </div>
      </div>

      <FaRegPlayCircle className='icon' /> 

      </div>

      <div id="summary">{data.summary}</div>
     
      </div>
      
      </div>

    </div>
  );
};

export default ShowDetail;