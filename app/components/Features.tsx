 
"use client"

import { CalculateOutlined, ContentPasteSearchOutlined, HubOutlined, InventoryOutlined, LocalShippingOutlined, SafetyCheckOutlined, ShoppingCartOutlined, SpaceDashboardOutlined } from "@mui/icons-material"
import { IMAGE_BASEURL } from "../config"
import PlainTestimonialVideo from "./PlainTestimonialVideo"

const FEATURES = [
  {
    id: 1,
    title: "Multi-channel Order Management",
    desc: "Pengaturan Pesanan dari Berbagai Marketplace atau eCommerce Secara Real Time",
    icon: HubOutlined
  },
  {
    id: 2,
    title: "Delivery Management",
    desc: "Pengaturan Pengiriman yang Terintegrasi dengan kurir",
    icon: LocalShippingOutlined
  },
  {
    id: 3,
    title: "Sales Analysis",
    desc: "Analisa Penjualan per Marketplace Secara Real Time",
    icon: ContentPasteSearchOutlined
  },
  {
    id: 4,
    title: "Inventory Control",
    desc: "Kontrol Stock di Berbagai Marketplace secara Real Time",
    icon: InventoryOutlined
  },
  {
    id: 5,
    title: "Purchasing",
    desc: "Pengaturan Pembelian Barang",
    icon: ShoppingCartOutlined
  },
  {
    id: 6,
    title: "Terintegrasi Sistem Akuntansi",
    desc: "Hutang, Piutang dan General Ledger",
    icon: CalculateOutlined
  },
  {
    id: 7,
    title: "Dashboard Komprehensif",
    desc: "Kontrol Usaha Anda dengan Mudah dan Cepat",
    icon: SpaceDashboardOutlined
  },
  {
    id: 8,
    title: "Keamanan Data Terjamin",
    desc: "Keamanan Data yang Terjamin dengan Standard Dunia",
    icon: SafetyCheckOutlined
  },
]

type FeatureCardProps = {
  feature: any
}

function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = feature.icon
  return (
    <div className="w-full lg:w-1/2 xl:w-1/3 p-4 flex items-center lg:items-start gap-4">
      <div className="flex-none lg:hidden">
        <div className="bg-paprika-900 rounded aspect-square px-2 py-1 text-white text-lg aspect-1"><Icon /></div>
      </div>
      <div className="flex-1">
        <div className="border-b-0 lg:border-b-2 border-paprika-900 font-semibold flex text-base md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl">
          <div className="flex-1 lg:pb-2">{feature.title}</div>
          <div className="text-paprika-900 hidden lg:block"><Icon /></div>
        </div>
        <div className="text-xs md:text-sm lg:text-base pt-2">{feature.desc}</div>
      </div>
    </div>
  )
}

export default function Features() {
  return (
    <div>
      <div className="bg-white text-black">
        <div className="container px-8 py-12 md:py-18 lg:py-24 mx-auto space-y-8">
          <div className="text-2xl md:text-4xl lg:text-5xl font-bold font-rubik">Satu platform <br />Semua marketplace</div>
          <div className="w-full flex flex-wrap justify-center -m-4">
            {FEATURES.map(f => <FeatureCard key={f.id} feature={f} />)}
          </div>
        </div>
      </div>
      <div className="bg-red-50 text-black">
        <div className="container mx-auto px-8 py-12 md:py-18 lg:py-24 flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
          <div className="flex-1">
            <h1 className="text-xl md:text-2xl lg:text-3.5xl font-semibold text-gray-900 pb-2">
              Hadir untuk meningkatkan penjualan dan performa tokomu.
            </h1>
            <p className="text-sm md:text-lg lg:text-xl text-gray-600 pb-6">
              Erasoft menghadirkan Master Online sebagai platform omnichannel retail dalam membantu pebisnis berjualan. Master Online sebagai platform omnichannel membantu toko dalam meningkatkan efisiensi dan produktivitas toko. Sejak tahun 2019, Master Online sudah melayani ribuan pebisnis dan berhasil mempertahankan konsistensi performa dalam berbagai event high traffic marketplace.
            </p>
            <a href="https://www.youtube.com/@masteronlineomnichannel" target='_blank' className="text-paprika-900 font-bold text-sm md:text-lg lg:text-xl" rel="noreferrer">
              Pelajari Lebih Lanjut &rarr;
            </a>
          </div>
          <div className="flex-1 w-full">
            <PlainTestimonialVideo youtubeCode="14vUGrveI-E" customThumbnailUrl={`${IMAGE_BASEURL}/images/intro-video-2.png`} />
          </div>
        </div>
      </div>
    </div>
  )
}