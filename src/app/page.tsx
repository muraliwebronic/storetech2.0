import CompetitiveAdvantage from '@/sections/home/CompetitiveAdvantage'
import HeroSection from '@/sections/home/HeroSection'
import MarketOpportunity from '@/sections/home/MarketOpportunity'
import ProductConfigurator from '@/sections/home/ProductConfigurator'
import RetailRevolution from '@/sections/home/RetailRevolution'

export default function page() {
  return (
   <>
   <HeroSection />
   <RetailRevolution />
   <ProductConfigurator />
   <MarketOpportunity />
   <CompetitiveAdvantage />
   </>
  )
}
