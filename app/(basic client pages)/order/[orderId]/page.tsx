import React from 'react'

const page = ({params}:{params:{orderId:string}}) => {
  return (
    <div className='headingText'>
        <h2>Your Order Has been completed. </h2>
        <p>Your Order Id is: {params.orderId}</p>
    </div>
  )
}

export default page