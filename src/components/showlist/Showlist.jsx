"use client"
import Link from 'next/link';
import React,{useState,useEffect} from 'react'
import Card from '../Card/Card';
import './showlistStyle.css'
const Showlist = () => {
    const [data,setData]= useState([]);

    const fetchdata = ()=>{
            fetch(`https://api.tvmaze.com/search/shows?q=all`).then((res)=>{
                 return res.json();
            }).then((response)=>{
                  setData(response);
                  console.log(response);
            })
    }
    useEffect(()=>{
        fetchdata();
    },[])
     

  return (
    <div id="maincontainer" >
      <div className='heading'>Show List</div>
 <div className='feed'>
   
       {data.map((e,i)=>(
         <Link 
          href={{
            pathname: '/pages/show',
            query: {
                id: e.show.id,
            }
          }}
         
         key={i}>
     
            <Card  data={e.show}  />
       </Link>
       ))}
  
  </div>
    </div>
  )
}

export default Showlist
