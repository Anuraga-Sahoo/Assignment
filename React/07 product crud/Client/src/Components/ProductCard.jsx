import React from 'react'

const ProductCard = ({data}) => {
  return (
    <>
       <div className="cardCOntainer flex flex-col rounded-md gap-1 bg-zinc-800 h-full w-[20rem] p-2 text-white m-4">
        <div className="image ">
          <img src={data.image} alt=""
          className='rounded-md h-[13rem] w-full' />
        </div>
        <div className="info flex justify-around h-[5rem] items-center rounded-md ">
          <h2 className='text-red-400'>{data.name}</h2>
          <h3 className='text-green-400'>{data.price}</h3>
        </div>
      </div>
    </>
  )
}

export default ProductCard
