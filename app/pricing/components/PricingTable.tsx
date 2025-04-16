"use client"

import { ExpandCircleDown } from '@mui/icons-material'
import classNames from 'classnames'
import { useMemo, useState } from 'react'
import { COMPARISONS, PACKAGES, PRICE_DETAILS } from '../data'
import { PricingTableContextProvider, usePricingTableContext } from './PricingTableContext'

type PriceCompareRowProps = {
  compare: any
  className?: string
}

function PriceCompareRow({ compare, className }: PriceCompareRowProps) {
  return (
    <tr key={compare.id} className={className}>
      <td className='p-3 text-sm font-bold border border-paprika-100'>{compare.title}</td>
      {PACKAGES.map(c => {
        const row = (PRICE_DETAILS as any)[c.id]?.[compare.id]
        const val = compare.render(row)
        return <td key={c.id} className='p-3 text-sm border border-paprika-100 text-center'>{val}</td>
      })}
    </tr>
  )
}

type PriceCompareSeparatorRowProps = {
  compare: any
  className?: string
}

function PriceCompareSeparatorRow({ compare, className }: PriceCompareSeparatorRowProps) {
  return (
    <tr key={compare.id} className={className}>
      <td className='p-3 text-sm font-bold border border-paprika-100 bg-paprika-900 text-white' colSpan={PACKAGES.length + 1}>{compare.title}</td>
    </tr>
  )
}

type PackageHeaderProps = {
  pkg: any
}

function PackageHeader({ pkg }: PackageHeaderProps) {
  const ctx = usePricingTableContext()

  const computedMonthlyPrice = useMemo(() => {
    const additionalFee = ctx.extras.reduce((a, c) => {
      a += c.id === pkg.id ? c.amount : 0
      return a
    }, 0)
    return pkg.monthlyPrice + additionalFee
  }, [pkg, ctx])

  const renderMonthlyPrice = (price: number) => {
    if (!price) {
      return (
        <div className="inline-flex items-center gap-1 font-normal">
          <div className="font-bold text-2xl tracking-tighter">{pkg.formattedMonthlyPriceList}</div>
        </div>
      )
    }
    let num = price < 1000000 ? (price / 1000).toFixed(1) : (price / 1000000).toFixed(1)
    num = num.endsWith(".0") ? num.slice(0, -2) : num.replace('.', ',')
    const unit = price < 1000000 ? "rb" : "jt"

    return (
      <div className="inline-flex items-center gap-1 font-normal">
        <div className="text-sm">Rp</div>
        <div className="font-bold text-2xl tracking-tighter">{num}</div>
        <div className="text-xs text-left">
          <div>{unit}</div>
          <div>/bln</div>
        </div>
      </div>
    )
  }
  return (
    <td key={pkg.id} className='px-4 py-8 border border-paprika-100 text-center relative'>
      <div className='text-2xl font-semibold'>{pkg.title}</div>
      <div className='text-sm text-slate-700 pb-4'>{pkg.subtitle}</div>
      <div className={classNames('text-slate-800 font-bold text-2xl pt-4 border-t-2', pkg.priceWrapperClassName)}>{renderMonthlyPrice(computedMonthlyPrice)}</div>
      {pkg.popular && (
        <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2 bg-paprika-900 rounded-lg text-xs font-bold text-white whitespace-nowrap'>Paling Populer</div>
      )}
    </td>
  )
}

export default function PricingTable() {
  const [open, setOpen] = useState(false)

  return (
    <PricingTableContextProvider>
      <div className="collapse focus-visible:outline-none">
        <input type="checkbox" checked={open} onChange={e => setOpen(e.target.checked)} />
        <div className="collapse-title text-center font-bold text-paprika-900">
          {open
            ? (
              <div className='inline-flex items-center gap-4'>
                <span>Tutup Perbandingan Antar Paket</span><span className='transform rotate-180'><ExpandCircleDown /></span>
              </div>
            )
            : (
              <div className='inline-flex items-center gap-4'>
                <span>Buka Perbandingan Antar Paket</span><span><ExpandCircleDown /></span>
              </div>
            )
          }
        </div>
        <div className="collapse-content overflow-x-auto beautify-scrollbar">
          <div className='px-4 py-4'>
            <table className='bg-white shadow-lg min-w-[1000px] w-full'>
              <thead>
                <tr>
                  <td key={"-"} className='border border-paprika-100'></td>
                  {PACKAGES.map(c => (
                    <PackageHeader key={c.id} pkg={c} />
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISONS.map((c, i) => (
                  c.id === '-'
                    ? <PriceCompareSeparatorRow key={c.id} compare={c} className='' />
                    : <PriceCompareRow key={c.id} compare={c} className={i % 2 ? 'bg-paprika-100' : 'bg-white'} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PricingTableContextProvider>
  )
}
