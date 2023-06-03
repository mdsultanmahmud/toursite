import Image from 'next/image'
import OfferSlider from './components/OfferSlider'
import HotDeals from './components/HotDeals'
import WhyGozayan from './components/WhyGozayan'

export default function Home() {
  return (
    <>
      <WhyGozayan />
      <HotDeals />
      <OfferSlider />
    </>
  )
}
