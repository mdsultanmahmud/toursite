'use client'

import OfferSlider from './components/OfferSlider'
import HotDeals from './components/HotDeals'
import WhyGozayan from './components/WhyGozayan'
import Banner from './components/Banner'
import { useState } from 'react'
import PopularHotel from './components/PopularHotel'
import PopularDestination from './components/PopularDestination'
import PopularTour from './components/PopularTour'

export default function Home() {
  const [search, setSearch] = useState('flight')
  return (
    <>
      <Banner searchingProps = {{search, setSearch}}/>
      <WhyGozayan />
      <HotDeals />
      <OfferSlider />
      <PopularHotel search = {search}/>
      <PopularDestination search = {search}/>
      <PopularTour search={search} />
    </>
  )
}
