"use client"

import { useParams } from 'next/navigation'
import { ReactNode, useEffect } from 'react'
import { Element, scroller } from 'react-scroll'
import TosPrivacy from './TosPrivacy'
import TosSecurity from './TosSecurity'
import TosTermsAndConditions from './TosTermsAndConditions'

type TosCardProps = {
  id: string
  title: string
  subtitle: string
  children: ReactNode
}


const TERMS = [
  {
    id: 'privacy',
    title: 'Privasi',
    subtitle: 'Kebijakan privasi',
    content: <TosPrivacy />
  },
  {
    id: 'security',
    title: 'Keamanan',
    subtitle: 'Pengamanan yang kami lakukan',
    content: <TosSecurity />
  },
  {
    id: 'terms_and_conditions',
    title: 'Syarat dan Ketentuan',
    subtitle: 'Batasan, hak dan kewajiban dalam memakai Master Online',
    content: <TosTermsAndConditions />
  }
]


export function TosCard({ id, title, subtitle, children }: TosCardProps) {
  return (
    <div id={id} className="flex flex-col gap-4">
      <div className='space-y-2 text-center'>
        <div className='inline-block w-32 h-1 bg-paprika-900' />
        <div className="font-bold text-2xl lg:text-4xl">{title}</div>
        <div className="font-semibold">{subtitle}</div>
      </div>
      <div className="shadow-lg bg-white p-8">
        {children}
      </div>
    </div>
  )
}

export default function TosCards() {
  const params = useParams()

  useEffect(() => {
    const section = (window.location.hash || "").replace("#", "")
    scroller.scrollTo(section, { offset: -100, smooth: true, duration: 500 })
  }, [params])

  return (
    <div className="container py-16 px-8 mx-auto flex flex-col gap-8">
      {TERMS.map(c => (
        <Element key={c.id} name={c.id}>
          <TosCard
            id={c.id}
            title={c.title}
            subtitle={c.subtitle}
            key={c.id}
          >
            {c.content}
          </TosCard>
        </Element>
      ))}
    </div>
  )
}