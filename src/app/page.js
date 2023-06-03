import Image from 'next/image'
import OfferSlider from './components/OfferSlider'
import HotDeals from './components/HotDeals'

export default function Home() {
  return (
    <>
      <HotDeals />
      <OfferSlider />
    </>
  )
}
