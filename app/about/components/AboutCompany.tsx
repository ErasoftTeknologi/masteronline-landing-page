/* eslint-disable @next/next/no-img-element */

import { IMAGE_BASEURL } from "@/app/config";

function AboutCard({ companyName, title, desc, icon, url }: any) {
  return (
    <div className="flex flex-wrap items-center lg:gap-16">
      <div className="w-1/2 lg:w-auto lg:flex-1 text-xl md:text-2xl lg:text-5xl font-bold order-0 pr-4 lg:pr-0 font-rubik">
        {title}
      </div>
      <div className="flex-1 order-2 lg:order-1 pt-4 lg:pt-0 text-sm md:text-lg lg:text-xl space-y-6">
        <div>{desc}</div>
        {url && (
          <div className="flex-1 order-2 lg:order-1 pt-4 lg:pt-0 text-xl">
            <a
              href={url}
              target="_blank"
              className="text-paprika-900 font-bold"
              rel="noreferrer"
            >
              Kunjungi Situs {companyName} <span aria-hidden="true">→</span>
            </a>
          </div>
        )}
      </div>
      <div className="w-1/2 lg:w-auto lg:flex-none order-1 lg:order-2 text-right">
        <img
          src={icon}
          className="w-full max-w-20 lg:max-w-32 inline-block"
          alt=""
        />
      </div>
    </div>
  );
}

export function AboutErasoft() {
  return (
    <AboutCard
      companyName="Erasoft"
      title="Tentang Erasoft"
      desc="Erasoft didirikan sebagai perusahaan software house di Jakarta pada tahun 1988. Dengan dukungan 10 orang ahli komputer, pada awalnya kami berfokus pada pengembangan dan penyediaan solusi perangkat lunak. Seiring berjalannya waktu, berkat kepercayaan dari para pelanggan kami dan kemampuan kami untuk berinovasi, Erasoft telah berhasil berkembang menjadi perusahaan solusi teknologi yang lengkap."
      icon={`${IMAGE_BASEURL}/images/erasoft-logo.png`}
      url="https://erasoft.co.id"
    />
  );
}

export function AboutMasterOnline() {
  return (
    <div>
      <AboutCard
        companyName="Master Online"
        title="Tentang Master Online"
        desc="Master Online sebagai software integrasi marketplace memudahkan toko untuk mengembangkan penjualan dan mengelola stok barang dengan cepat dan tepat di marketplace Indonesia. Didukung oleh perusahaan ERP di Indonesia yang berdiri sejak tahun 1988, PT Erasoft Teknologi Indonesia, melengkapi Master Online dengan fitur ERP dan akuntansi terbaik."
        icon={`${IMAGE_BASEURL}/images/masteronline-logo.png`}
      />
      <img
        src={`${IMAGE_BASEURL}/images/office.png`}
        className="w-full pt-24"
        alt=""
      />
    </div>
  );
}
