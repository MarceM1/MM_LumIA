import { UserButton } from '@clerk/nextjs'
import React from 'react'

const Home = () => {
  return (
    <div className='flex'>
      <p>Home</p>
      <UserButton />
    </div>
  )
}

export default Home