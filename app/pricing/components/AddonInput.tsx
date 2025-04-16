/* eslint-disable react/display-name */
"use client"

import { ReactNode, memo, useId, useState } from 'react'
import { usePricingTableContext } from './PricingTableContext'

type MultiuserNumInputProps = {
  id: string
  min: number
  max: number
}

export const MultiuserNumInput = memo(({ id, min = 0, max = 10 }: MultiuserNumInputProps) => {
  const ctx = usePricingTableContext()
  const [value, setValue] = useState(min)
  const isDecDisabled = value <= min
  const isIncDisabled = value >= max

  const handleInc = () => {
    const newValue = value + 1
    setValue(newValue)
    ctx.upsertExtra({
      id: id,
      featureId: 'multiuser',
      amount: (newValue - min) * 300000
    })
  }
  const handleDec = () => {
    const newValue = value - 1
    setValue(newValue)
    ctx.upsertExtra({
      id: id,
      featureId: 'multiuser',
      amount: (newValue - min) * 300000
    })
  }
  return (
    <div className='inline-flex w-auto justify-center items-center'>
      <button disabled={isDecDisabled} onClick={handleDec} className='flex-none bg-paprika-900 disabled:bg-paprika-100 w-5 h-5 rounded text-white'>-</button>
      <input readOnly={true} value={value} className='text-center w-10' />
      <button disabled={isIncDisabled} onClick={handleInc} className='flex-none bg-paprika-900 disabled:bg-paprika-100 w-5 h-5 rounded text-white'>+</button>
    </div>
  )
})


type AddonCheckboxInputProps = {
  id: string
  featureId: string
  price: number
  children: ReactNode
}

export const AddonCheckboxInput = memo(({ id, featureId, price, children }: AddonCheckboxInputProps) => {
  const inputId = useId()
  const ctx = usePricingTableContext()
  const [checked, setChecked] = useState(false)

  const handleChangeValue = (e: any) => {
    const newValue = e.target.checked
    setChecked(newValue)
    ctx.upsertExtra({
      id: id,
      featureId,
      amount: newValue ? price : 0
    })
  }

  return (
    <div className='space-y-1 text-center'>
      <input id={inputId} type='checkbox' className='inline-block' checked={checked} onChange={handleChangeValue} />
      <label className='block' htmlFor={inputId}>{children}</label>
    </div>
  )
})