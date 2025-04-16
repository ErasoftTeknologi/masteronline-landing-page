/* eslint-disable @next/next/no-img-element */
"use client"

import { IMAGE_BASEURL } from "@/app/config";
import { CallMadeOutlined, CallReceivedOutlined, ReceiptLongOutlined, StorefrontOutlined, WarehouseOutlined } from "@mui/icons-material";

const FEATURES = [
  {
    id: 1,
    title: 'Integrasi Marketplace',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    icon: StorefrontOutlined
  },
  {
    id: 2,
    title: 'Invoice & Sales Analysis',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    icon: ReceiptLongOutlined
  },
  {
    id: 3,
    title: 'Multi Warehouse Multi Location',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    icon: WarehouseOutlined
  },
  {
    id: 4,
    title: 'Account Receivable (AR)',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    icon: CallReceivedOutlined
  },
  {
    id: 5,
    title: 'Account Payable (AP)',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
    icon: CallMadeOutlined
  },
]

const CREDIT_CARDS = [
  {
    id: 'visa',
    title: 'VISA',
    icon: `${IMAGE_BASEURL}/images/visa-logo.svg`
  },
  {
    id: 'mastercard',
    title: 'Mastercard',
    icon: `${IMAGE_BASEURL}/images/mastercard-logo.svg`
  },
  {
    id: 'jcb',
    title: 'JCB',
    icon: `${IMAGE_BASEURL}/images/jcb-logo.svg`
  },
  {
    id: 'american-express',
    title: 'American Express',
    icon: `${IMAGE_BASEURL}/images/american-express-logo.svg`
  },
]

type FeatureProps = {
  feature: any
}

function Feature({ feature }: FeatureProps) {
  const Icon = feature.icon
  return (
    <div className="col-span-1 flex flex-row lg:flex-col gap-2 md:gap-4 items-center md:items-start">
      <div>
        <div className="inline-block aspect-square p-2 md:p-3 lg:p-4 bg-paprika-900 shadow-lg shadow-paprika-900 text-center rounded-md items-center justify-center">
          <Icon className="text-white text-2xl" />
        </div>
      </div>
      <div>
        <div className="text-sm md:text-base font-bold">{feature.title}</div>
        {/* <div className="text-sm">{feature.desc}</div> */}
      </div>
    </div>
  )
}

export default function Features() {
  return (
    <div className="space-y-12 md:space-y-24">
      <div className="space-y-8 md:space-y-12">
        <div className="font-bold text-xl md:text-2xl lg:text-3.5xl">Nikmati fitur-fitur dibawah ini ketika anda menggunakan Master Online. Tersedia di seluruh paket yang ada.</div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-8">
          {FEATURES.map(c => <Feature key={c.id} feature={c} />)}
        </div>
      </div>
      <div className="text-center hidden lg:block">
        <div className="inline-block divide-y text-center">
          <div className="pb-4">Harga diatas belum termasuk PPN 11%. Dengan membeli paket langganan, anda setuju dengan syarat & ketentuan pengunaan Master Online.</div>
          <div className="pb-4 space-y-2 text-center p-4">
            <div className="font-bold">Pembayaran dapat dilakukan menggunakan</div>
            <div className="inline-flex gap-8 items-center">
              {CREDIT_CARDS.map(c => (
                <div key={c.id} className="border px-4 py-2 aspect-video max-w-32 flex items-center">
                  <img src={c.icon} className="w-full" alt={c.title} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}