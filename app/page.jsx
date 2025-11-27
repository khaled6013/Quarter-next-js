import React from 'react'
import Banner from './components/Banner'
import Marketplace from './components/Marketplace'
import Counter from './components/Counter'
import Sells from './components/Sells'
import Focus from './components/Focus'


const page = () => {
  return (
    <div className=''>
      <Banner></Banner>
      <Marketplace></Marketplace>
      <Counter></Counter>
      <Sells></Sells>
      <Focus></Focus>
    </div>
  )
}

export default page