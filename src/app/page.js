import Image from 'next/image'
import OfferSlider from './components/OfferSlider'
import HotDeals from './components/HotDeals'
import WhyGozayan from './components/WhyGozayan'
import Banner from './components/Banner'

export default function Home() {
  return (
    <>
      <Banner />
      <WhyGozayan />
      <HotDeals />
      <OfferSlider />
    </>
  )
}
