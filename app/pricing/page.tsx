import StdLayout from '@/components/StdLayout';
import type { Metadata } from 'next';
import Features from './components/Features';
import PackageList from './components/PackageList';
import PricingTable from './components/PricingTable';

export const metadata: Metadata = {
  title: 'Pricing | Master Online - Solusi Bisnis Online',
}


export default function Pricing() {
  return (
    <StdLayout className="bg-neutral-100" activeKey="pricing">
      <div className="bg-neutral-100 text-black space-y-12 md:space-y-18 lg:space-y-24 py-12 md:py-18 lg:py-24">
        <div className="container mx-auto px-8 space-y-1 md:space-y-2">
          <div className="text-base md:text-xl lg:text-2xl font-bold font-hanken-grotesk">Biaya Langganan</div>
          <div className="text-3xl lg:text-6.5xl font-bold">Gratis 2 Minggu Pertama Sebelum Tentukan Pilihanmu</div>
        </div>
        <div className="container mx-auto px-8">
          <PackageList />
        </div>
        <div className='container mx-auto'>
          <PricingTable />
        </div>
        <div className='container mx-auto px-8'>
          <Features />
        </div>
      </div>
    </StdLayout>
  )
}