import ProductsHero from '@/sections/products/ProductsHero'
import ProductShowcase from '@/sections/products/ProductShowcase'
import SolutionPackages from '@/sections/products/SolutionPackages'
import TechnicalSpecifications from '@/sections/products/TechnicalSpecifications'
import React from 'react'

export default function page() {
  return (
   <>
   <ProductsHero />
   <ProductShowcase />
   <SolutionPackages />
   <TechnicalSpecifications />
   </>
  )
}
