'use client'
import React from 'react'
import MyWorkCard from './MyWorkCard'
import { myWorks, IWorksProps } from './data-my-work'


const MyWorks = () => {
  return (
    <div className='md:px-24 px-6 grid  md:grid-cols-2  grid-cols-1 gap-x-12 gap-y-24'>

      {
        myWorks?.map((m: IWorksProps) => <MyWorkCard data={m} key={m.id}/>)
      }




    </div>
  )
}

export default MyWorks