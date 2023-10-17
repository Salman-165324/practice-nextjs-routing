import React from 'react'

const page = ({searchParams}: {searchParams:{q:string}}) => {
    console.log(searchParams)
  return (
    <div>
        <h2 className='headingText'>Text from search Query: {searchParams.q}</h2>
    </div>
  )
}

export default page