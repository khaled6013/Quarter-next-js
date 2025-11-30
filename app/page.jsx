import React from 'react'
import Banner from './components/Banner'
import Marketplace from './components/Marketplace'
import Counter from './components/Counter'
import Sells from './components/Sells'
import Focus from './components/Focus'
import Featured from './components/Featured'
import Apartment from './components/Apartment'
import Listing from './components/Listing'
import Client from './components/Client'


const page = () => {
  return (
    <div className=''>
      <Banner></Banner>
      <Marketplace></Marketplace>
      <Counter></Counter>
      <Sells></Sells>
      <Focus></Focus>
      <Featured></Featured>
      <Apartment></Apartment>
      <Listing></Listing>
      <Client></Client>
    </div>
  )
}

export default page