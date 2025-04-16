"use client"

import { WHATSAPP_CS_URL } from '@/app/config';
import { CheckOutlined, KeyboardArrowDownOutlined, KeyboardArrowUpOutlined } from '@mui/icons-material';
import classNames from 'classnames';
import { ReactNode, useState } from 'react';
import { PACKAGES } from '../data';

const formatter = new Intl.NumberFormat('id-ID', {
  style: 'currency',
  currency: 'IDR',
  minimumFractionDigits: 0
})

function shortenNumber(value: number): string {
  const suffixes = ["", " rb", " jt", " M", " T"];
  let num = Math.abs(value);

  let index = 0;
  while (num >= 1000 && index < suffixes.length - 1) {
    num /= 1000;
    index++;
  }

  const roundedNum = Math.round(num * 10) / 10; // Round to one decimal place

  return (value < 0 ? '-' : '') + roundedNum + suffixes[index];
}

function PackageInfo() {
  return (
    <div className='col-span-1 flex flex-col justify-center gap-6 text-base md:text-xl lg:text-xl'>
      <div className='text-xl md:text-2xl lg:text-3xl'>Seluruh paket berbayar akan mendapatkan <b>potongan harga 1 bulan</b> untuk pembayaran tahunan.</div>
      <div className='space-y-1 md:space-y-2'>
        <div>Butuh info lebih lanjut?</div>
        <div><a href={WHATSAPP_CS_URL} target='_blank' className='font-bold text-paprika-900' rel="noreferrer">Hubungi Sales &rarr;</a></div>
      </div>
    </div>
  )
}

type PackageProps = {
  pkg: any
  className?: string
  icon?: ReactNode
}

function Package({ pkg, className, icon }: PackageProps) {
  const [open, setOpen] = useState(false)
  return (
    <div className={classNames('col-span-1 bg-white shadow-lg divide-y rounded-sm overflow-hidden border-t-4', className)}>
      <div className="p-4 md:p-6 lg:p-8 relative min-h-32">
        <div className='pb-4 text-black'>
          {icon}
        </div>
        <div className="font-bold text-base md:text-lg lg:text-xl">{pkg.title}</div>
        <div className="text-xs md:text-sm lg:text-base">{pkg.desc}</div>
      </div>
      <div className="p-4 md:p-6 lg:p-8 flex items-center min-h-24 sm:min-h-40 md:min-h-40 lg:min-h-60 xl:min-h-44 2xl:min-h-36 gap-2 md:gap-4">
        <div className="flex-1">
          <div className="text-base md:text-xl lg:text-2xl font-bold">{pkg.monthlyPrice ? <>
            <span>{formatter.format(pkg.monthlyPrice)}</span><span>/</span>
            <span className='inline-block opacity-75'>bulan</span></> : pkg.formattedMonthlyPrice}</div>
          {pkg.annualPriceDisc && (
            <div className='text-xs md:text-sm lg:text-base'>Hemat <span className="font-bold">Rp {shortenNumber(pkg.annualPriceDisc)}</span> untuk pembayaran tahunan</div>
          )}
        </div>
        <div className="flex-none">
          <a href="/login" className="rounded-md bg-paprika-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-paprika-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-paprika-900">Mulai Sekarang</a>
        </div>
      </div>
      <div className="p-4 md:p-6 lg:p-8 text-base space-y-2 hidden md:block">
        <div className='font-bold'>Termasuk dalam paket {pkg.title}</div>
        <div className='space-y-2'>
          {pkg.includes.map((c: any) => (
            <div key={c} className="flex gap-2 md:gap-3 lg:gap-4 leading-loose text-xs md:text-sm lg:text-base">
              <div><CheckOutlined className='text-green-500' /></div>
              <div>{c}</div>
            </div>
          ))}
        </div>
      </div>
      <div className='block md:hidden'>
        <div className={classNames("collapse rounded-none", open && "collapse-open")}>
          {/* <input type="checkbox" className='min-h-0 p-0' checked={collapsed} /> */}
          <div className='cursor-pointer collapse-title min-h-0 px-1 py-2 bg-black bg-opacity-10 text-center' onClick={() => setOpen(!open)}>
            {open
              ? <KeyboardArrowUpOutlined />
              : <KeyboardArrowDownOutlined />
            }
          </div>
          <div className='collapse-content'>
            <div className="p-4 md:p-6 lg:p-8 text-base space-y-2">
              <div className='font-bold'>Termasuk dalam paket {pkg.title}</div>
              <div className='space-y-2'>
                {pkg.includes.map((c: any) => (
                  <div key={c} className="flex gap-2 md:gap-3 lg:gap-4 leading-loose text-xs md:text-sm lg:text-base">
                    <div><CheckOutlined className='text-green-500' /></div>
                    <div>{c}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default function PackageList() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {PACKAGES.map(c => <Package pkg={c} key={c.id} className={c.className} icon={c.icon} />)}
      <PackageInfo />
    </div>
  )
}
