/* eslint-disable @next/next/no-img-element */
import { BUSINESS_PARTNER_URL, IMAGE_BASEURL } from "../config";

export default function Partnership() {
  return (
    <div className="bg-white pb-12 md:pb-24">
      <div className="container px-8 mx-auto">
        <div className="w-full aspect-w-6 aspect-h-7 sm:aspect-h-5 md:aspect-h-4 lg:aspect-h-3 xl:aspect-h-2 relative rounded-lg overflow-hidden">
          <img alt="" src={`${IMAGE_BASEURL}/images/partner-handshake.png`} className="absolute left-0 top-0 w-full h-full object-cover" />
          <div className="absolute left-0 top-0 w-full h-full object-cover bg-black bg-opacity-60 text-center px-8 md:px-6 lg:px-32 py-8 md:py-16 lg:py-24 flex flex-col justify-center">
            <div className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-rubik font-bold pb-4 md:pb-5 lg:pb-6 xl:pb-8 text-white">Tertarik untuk membantu mengembangkan Master Online?</div>
            <div className="text-sm sm:text-lg md:text-xl lg:text-xl xl:text-2xl font-medium pb-8 md:pb-10 lg:pb-12 xl:pb-16 text-white text-opacity-70">Jadilah partner bisnis Master Online dan dapatkan kompensasi Komisi Referal yang sangat menarik dengan peluang 5 juta pebisnis online di Indonesia. Cocok untuk yang sedang mencari bisnis, penghasilan tambahan atau aktif di sosmed.</div>
            <div>
              <a target="_blank" href={BUSINESS_PARTNER_URL} className="btn btn-primary btn-sm md:btn-md text-sm md:text-base lg:text-lg" rel="noreferrer">Cari tahu selengkapnya</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}