import { useState, useEffect } from 'react';

import React from 'react'
import axios from 'axios';
import Card from './components/Card.jsx';
const App = () => {
  
  const [ndata, setndata] = useState([]);

  const [index, setindex] = useState(1);

  const getData = async ()=>{

    const response = await axios.get( `https://picsum.photos/v2/list?page=${index}&limit=20`);
    
    setndata(response.data);
    console.log("Data aa gya");

  }


   useEffect(function(){
     getData();
   }, [index, getData]);

  let printuserdata = <h1 className='text-gray-300 top-1/2 left-1/2 absolute transform translate-x--1/2 translate-y--1/2 text-sm'>Loading...</h1>;






  if(ndata.length > 0){
    printuserdata = ndata.map((elem, idx)=>{
       return (
          <div key={idx}>
           <Card elem={elem}   />
          </div>
        )
    })
  }

  return (
    

    <div className='h-screen  p-5 w-full flex flex-col  bg-black text-white '>
      
      {/* <h1 className='text-2xl '>Hello {}</h1> */}
      {/* <button onClick={getData} className='bg-green-500 px-5 py-2 m-4 text-xl rounded-md hover:bg-green-600  active:bg-green-800 '>Get data</button> */}
    <h1 className='text-4xl fixed p-3 font-bold bg-red-500 rounded-2xl'>{index}</h1>
    
    <div className='flex h-[82%] flex-wrap gap-4'>
     {printuserdata}
    </div>

    <div className=' flex gap-5 justify-center items-center  mt-10 '>
      <button 
      style={{opacity:index==1? 0.5 : 1}}
      
       onClick={()=>{
        console.log("prev button clicked" , index);
        
        if(index>1)
        {
          setindex(index-1);
          setndata([]);
        }
        
      }} className='bg-amber-400 rounded-lg text-xl cursor-pointer  px-4 py-1 text-white  border-blue-100'>Prev</button>
      <h4 className=' font-bold text-center text-sm'>Page {index}</h4>
      <button onClick={ ()=>{
        console.log("next button clicked", index);
        setndata([]);
        setindex(index+1);
      }} className='bg-amber-400 rounded-lg text-xl cursor-pointer  px-4 py-1 text-white  border-blue-100'>Next</button>
    
    </div>
    
    
    
    </div>
  )
}

export default App
