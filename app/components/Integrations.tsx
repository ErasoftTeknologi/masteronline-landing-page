/* eslint-disable @next/next/no-img-element */
"use client"

import { IMAGE_BASEURL } from "../config"

const INTEGRATIONS = [
  {
    id: 1,
    title: "Tokopedia",
    icon: `${IMAGE_BASEURL}/images/tokopedia-logo-white.svg`
  },
  {
    id: 2,
    title: "Shope",
    icon: `${IMAGE_BASEURL}/images/shopee-logo-white.svg`
  },
  {
    id: 3,
    title: "Bukalapak",
    icon: `${IMAGE_BASEURL}/images/bukalapak-logo-white.svg`
  },
  {
    id: 4,
    title: "Blibli",
    icon: `${IMAGE_BASEURL}/images/blibli-logo-white.svg`
  },
  {
    id: 5,
    title: "Tiktok",
    icon: `${IMAGE_BASEURL}/images/tiktok-logo-white.svg`
  },
  {
    id: 6,
    title: "Lazada",
    icon: `${IMAGE_BASEURL}/images/lazada-logo-white.svg`
  },
]

type IntegrationCardProps = {
  integration: any
}

function IntegrationCard({ integration }: IntegrationCardProps) {
  return (
    <div className="col-span-1 text-center px-4 md:px-0">
      <img src={integration.icon} alt={integration.title} className="inline-block w-full max-w-[160px]" />
    </div>
  )
}

export default function Integrations() {
  return (
    <div className="bg-black text-white">
      <div className="container px-8 lg:px-32 py-12 md:py-18 lg:py-24 mx-auto space-y-8">
        <div className="text-xs md:text-base text-center font-medium">TERINTEGRASI DENGAN</div>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-8">
          {INTEGRATIONS.map(i => <IntegrationCard key={i.id} integration={i} />)}
        </div>
      </div>
    </div>
  )
}