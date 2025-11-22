import React from 'react'

const Card = (props) => {
  return (
    <div>
      <a href={props.elem.download_url} target='_blank'>
          <div className='h-40 w-44 overflow-hidden bg-white rounded-xl'>
            <img className='h-full w-full object-cover' src={props.elem.download_url} alt="" />
            {/* <button  className='bg-blue-600 px-5 py-1 m-5  text-sm rounded-md  active:bg-green-800 ' >Download</button> */}
          </div>

          <h1 className='font-bold text-lg'>{props.elem.author}</h1>
         </a>
    </div>
  )
}

export default Card
