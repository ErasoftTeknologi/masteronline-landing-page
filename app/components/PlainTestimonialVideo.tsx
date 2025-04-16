/* eslint-disable @next/next/no-img-element */

import { PlayArrowOutlined } from '@mui/icons-material'
import { useState } from 'react'

type PlainTestimonialVideoProps = {
  customThumbnailUrl?: string
  youtubeCode: string
}

export default function PlainTestimonialVideo({ customThumbnailUrl, youtubeCode }: PlainTestimonialVideoProps) {
  const [playing, setPlaying] = useState(false)
  return (
    <div className='space-y-4'>
      <div className="aspect-video relative text-white rounded-lg overflow-hidden">
        <img
          src={customThumbnailUrl || `https://img.youtube.com/vi/${youtubeCode}/hqdefault.jpg`}
          alt=""
          className='w-full h-full object-cover'
        />
        <button className="absolute inset-0 w-full h-full bg-black bg-opacity-75 flex flex-col p-8 lg:p-16" onClick={() => setPlaying(true)}>
          <div className="flex-1 flex w-full items-center justify-center text-8xl">
            <PlayArrowOutlined fontSize='inherit' />
          </div>
        </button>
        {playing && (
          <iframe
            src={`https://www.youtube.com/embed/${youtubeCode}?autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 border-0 w-full h-full z-0"
          />
        )}
      </div>
    </div>
  )
}