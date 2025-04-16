/* eslint-disable @next/next/no-img-element */
import { IMAGE_BASEURL } from "@/app/config";
import classNames from "classnames";

function batched<T>(inputs: T[], capacity: number = 10) {
  const res: T[][] = [];
  let batch: T[] = [];
  for (const input of inputs) {
    batch.push(input);
    if (batch.length == capacity) {
      res.push(batch);
      batch = [];
    }
  }
  if (batch.length > 0) {
    res.push(batch);
  }

  return res;
}

const MARKETPLACE_PARTNERS = [
  {
    id: "tokopedia",
    title: "Tokopedia",
    desc: "PT Tokopedia merupakan perusahaan teknologi Indonesia dengan misi pemerataan ekonomi secara digital di Indonesia.",
    icon: `${IMAGE_BASEURL}/images/tokopedia-icon.png`,
    url: "https://www.tokopedia.com",
    tag: "Marketplace",
  },
  {
    id: "shopee",
    title: "Shopee",
    desc: "Shopee adalah situs web perdagangan elektronik berkantor pusat di Singapura yang dimiliki oleh Sea Limited.",
    icon: `${IMAGE_BASEURL}/images/shopee-icon.png`,
    url: "https://shopee.co.id",
    tag: "Marketplace",
  },
  {
    id: "lazada",
    title: "Lazada",
    desc: "Lazada Group adalah sebuah perusahaan e-commerce Asia Tenggara yang didirikan oleh Rocket Internet pada 2012, dan dimiliki oleh Alibaba Group.",
    icon: `${IMAGE_BASEURL}/images/lazada-icon.png`,
    url: "https://www.lazada.co.id",
    tag: "Marketplace",
  },
  {
    id: "blibli",
    title: "Blibli",
    desc: "Blibli merupakan perusahaan e-commerce asli Indonesia yang fokus dalam membangun ekosistem berbelanja pilihan konsumen dan institusi melalui platform perdagangan omnichannel yang aman untuk setiap gaya hidup yang terpercaya.",
    icon: `${IMAGE_BASEURL}/images/blibli-icon.png`,
    url: "https://www.bukalapak.com",
    tag: "Marketplace",
  },
  {
    id: "bukalapak",
    title: "Bukalapak",
    desc: "Bukalapak merupakan situs belanja online terpercaya di Indonesia yang menjual beragam produk yang dibutuhkan seluruh masyarakat Indonesia.",
    icon: `${IMAGE_BASEURL}/images/bukalapak-icon.png`,
    url: "https://www.bukalapak.com",
    tag: "Marketplace",
  },
  {
    id: "tiktok",
    title: "Tiktok",
    desc: "TikTok Shop adalah fitur perdagangan sosial yang memungkinkan pengguna dan pencipta untuk mengiklankan dan menjual produk mereka melalui TikTok.",
    icon: `${IMAGE_BASEURL}/images/tiktok-icon.png`,
    url: "https://shop.tiktok.com",
    tag: "Social Commerce",
  },
];

const ECOMMERCE_PARTNERS = [
  {
    id: "82cart",
    title: "82cart",
    desc: "82Cart adalah sebuah web developer studio, yang menyediakan jasa pengembangan dan desain e-commerce dan toko online di Indonesia.",
    icon: `${IMAGE_BASEURL}/images/82cart-logo.png`,
    url: "https://www.82cart.com",
    className: "bg-slate-50",
    linkClassName: "text-paprika-900 hover:text-paprika-900",
  },
  {
    id: "shopify",
    title: "Shopify",
    desc: "Shopify adalah platform e-commerce web builder yang bisa kamu jadikan sebagai salah satu opsi untuk membuat toko online.",
    icon: `${IMAGE_BASEURL}/images/shopify-logo.svg`,
    url: "https://www.shopify.com",
    className: "bg-green-50",
    linkClassName: "text-green-800 hover:text-green-600",
  },
  {
    id: "woocommerce",
    title: "Woocommerce",
    desc: "WooCommerce adalah sebuah plugin untuk toko online gratis yang bisa Anda gunakan di dalam platform WordPress.",
    icon: `${IMAGE_BASEURL}/images/woocommerce-logo.svg`,
    url: "https://woo.com",
    className: "bg-purple-50",
    linkClassName: "text-purple-800 hover:text-purple-600",
  },
];

const WMS_PARTNERS = [
  {
    id: "autobos",
    title: "Autobos",
    desc: "Autobos adalah Warehouse Management System (WMS) dengan tekonologi AI yang akan membantu Anda menghemat waktu dan uang dalam proses pemenuhan pesanan. Coba gratis dan rasakan bedanya!",
    icon: `${IMAGE_BASEURL}/images/autobos-logo.svg`,
    url: "https://autobos.co.id",
  },
];

const ACCOUNTING_PARTNERS = [
  {
    id: "erasoft",
    title: "Erasoft",
    desc: "PT Erasoft Teknologi Indonesia perusahaan ERP (Enterprise Resource Planning) Indonesia berdiri sejak tahun 1988. Dilengkapi dengan fitur akuntansi, Trading distribusi, Manufaktur, Human Resource, Tenancy management, dan CRM. Sudah melayani ribuan perusahaan skala besar dan menengah.",
    icon: `${IMAGE_BASEURL}/images/erasoft-logo.png`,
    url: "https://erasoft.co.id",
  },
  {
    id: "aol",
    title: "Accurate Online",
    desc: "Aplikasi akuntansi berbasis cloud untuk UKM yang dikembangkan oleh PT. Cipta Piranti Sejahtera (CPSSoft) sejak 2016. Berbagai jenis usaha mulai dari dagang, jasa, kontraktor, hingga pabrikasi bisa menggunakan Accurate Online sebagai sistem pembukuan yang handal di perusahaan.",
    icon: `${IMAGE_BASEURL}/images/accurate-logo.png`,
    url: "https://accurate.id",
  },
];

const POS_PARTNERS = [
  {
    id: "dealpos",
    title: "DEALPOS",
    desc: "DealPOS adalah Aplikasi kasir online yang dirancang khusus untuk toko Retail yang berkategori Fashion, Minimarket, Electronic, Fresh Food dan Toko Bangunan.",
    icon: `${IMAGE_BASEURL}/images/dealpos-icon.png`,
    url: "https://www.dealpos.co.id",
  },
];
const LOYALTY_MANAGEMENT_PARTNERS = [
  {
    id: "tada",
    title: "TADA",
    desc: "Tada adalah platform B2B2C loyalty & rewards yang memungkinkan bisnis meningkatkan retensi mitra penyalur, pelanggan dan karyawan, membangun kesetiaan dan mendorong pertumbuhan.",
    icon: `${IMAGE_BASEURL}/images/tada-icon.png`,
    url: "https://www.usetada.com",
  },
];

function PartnerGroupCard({ title, children, wrapperClassName }: any) {
  return (
    <div className="space-y-8 lg:space-y-12">
      <div className="text-xl md:text-3xl lg:text-5xl font-bold font-rubik">
        {title}
      </div>
      <div className={wrapperClassName}>{children}</div>
    </div>
  );
}

function PartnerItemCardA({ title, desc, icon, tag }: any) {
  return (
    <div className="p-4 lg:p-8 flex items-start gap-4 lg:gap-8 text-sm md:text-lg lg:text-xl">
      <div className="hidden lg:block flex-none pt-8">
        <img src={icon} alt={title} className="max-w-12 w-full rounded" />
      </div>
      <div className="flex-1 space-y-4">
        <div className="flex items-center gap-4">
          <div className="block lg:hidden flex-none">
            <img src={icon} alt={title} className="max-w-10 w-full rounded" />
          </div>
          <div className="flex-1 font-bold">{title}</div>
          <div className="flex-none">
            <div className="border rounded px-2 py-1 text-xs md:text-sm lg:text-base">
              {tag}
            </div>
          </div>
        </div>
        <div>{desc}</div>
      </div>
    </div>
  );
}

function PartnerItemCardB({
  title,
  desc,
  icon,
  url,
  className,
  linkClassName,
}: any) {
  return (
    <div
      className={classNames(
        "flex p-4 lg:p-8 rounded items-center gap-4 lg:gap-8 col-span-1 text-sm md:text-lg lg:text-xl",
        className
      )}
    >
      <div className="flex-none">
        <img src={icon} alt={title} className="max-w-20 w-full" />
      </div>
      <div className="flex-1">
        <div className="font-bold text-base md:text-xl lg:text-3.5xl pb-2">
          {title}
        </div>
        <div className="pb-6">{desc}</div>
        <div>
          <a
            href={url}
            target="_blank"
            className={classNames(
              "font-bold text-paprika-900 hover:text-paprika-900",
              linkClassName
            )}
            rel="noreferrer"
          >
            Kunjungi Situs {title} &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

function PartnerItemCardC({ title, desc, icon, url }: any) {
  return (
    <div className="flex flex-col gap-4 lg:gap-8 text-sm md:text-lg lg:text-xl lg:px-8 first:pl-0 last:pr-0">
      <div className="flex-none flex items-center gap-4 lg:gap-8">
        <div className="flex-none">
          <img src={icon} alt={title} className="max-w-20 w-full" />
        </div>
        <div className="flex-1 space-y-2">
          <div className="font-bold text-lg md:text-xl lg:text-2.5xl">
            {title}
          </div>
          <div>
            <a
              href={url}
              target="_blank"
              className="font-bold text-paprika-900 hover:text-paprika-900"
              rel="noreferrer"
            >
              Kunjungi Situs &rarr;
            </a>
          </div>
        </div>
      </div>
      <div className="flex-1">{desc}</div>
    </div>
  );
}

function PartnerItemCardD({ title, desc, icon, url }: any) {
  return (
    <div className="flex items-center gap-4 md:gap-8 text-sm md:text-lg lg:text-xl">
      <div className="flex-1 flex flex-col gap-3 md:gap-6">
        <div className="flex gap-4 items-center">
          <div className="w-14 aspect-square bg-white rounded shadow-md lg:hidden flex items-center justify-center">
            <img src={icon} alt={title} className="max-w-10 w-full" />
          </div>
          <div className="text-lg md:text-xl lg:text-2.5xl font-bold">
            {title}
          </div>
        </div>
        <div>{desc}</div>
        <div>
          <a
            href={url}
            target="_blank"
            className="font-bold text-paprika-900 hover:text-paprika-900"
            rel="noreferrer"
          >
            Kunjungi Situs {title} &rarr;
          </a>
        </div>
      </div>
      <div className="flex-none hidden lg:block">
        <img src={icon} alt={title} className="max-w-20 w-full" />
      </div>
    </div>
  );
}

export function AboutPartnerMarketplace() {
  const batchedPartners = batched(MARKETPLACE_PARTNERS, 2);

  return (
    <PartnerGroupCard
      title="Partner Marketplace"
      wrapperClassName="lg:divide-y -m-4 lg:-m-8"
    >
      {batchedPartners.map((batch, i) => (
        <div key={i} className="grid grid-cols-1 lg:grid-cols-2 lg:divide-x">
          {batch.map((c) => (
            <PartnerItemCardA
              key={c.id}
              title={c.title}
              desc={c.desc}
              icon={c.icon}
              url={c.url}
              tag={c.tag}
            />
          ))}
        </div>
      ))}
    </PartnerGroupCard>
  );
}

export function AboutPartnerEcommerce() {
  return (
    <PartnerGroupCard
      title="Partner E-Commerce"
      wrapperClassName="space-y-4 lg:space-y-8"
    >
      {ECOMMERCE_PARTNERS.map((c) => (
        <PartnerItemCardB
          key={c.id}
          title={c.title}
          desc={c.desc}
          icon={c.icon}
          url={c.url}
          className={c.className}
          linkClassName={c.linkClassName}
        />
      ))}
    </PartnerGroupCard>
  );
}

export function AboutPartnerAccounting() {
  return (
    <PartnerGroupCard
      title="Partner Accounting/ERP"
      wrapperClassName="grid grid-cols-1 lg:grid-cols-2 overflow-hidden space-y-4 lg:space-y-0 lg:divide-x"
    >
      {ACCOUNTING_PARTNERS.map((c) => (
        <PartnerItemCardC
          key={c.id}
          title={c.title}
          desc={c.desc}
          icon={c.icon}
          url={c.url}
        />
      ))}
    </PartnerGroupCard>
  );
}

export function AboutPartnerPOS() {
  return (
    <PartnerGroupCard title="Partner Point Of Sales (POS)">
      {POS_PARTNERS.map((c) => (
        <PartnerItemCardD
          key={c.id}
          title={c.title}
          desc={c.desc}
          icon={c.icon}
          url={c.url}
        />
      ))}
    </PartnerGroupCard>
  );
}

export function AboutPartnerLoyaltyManagement() {
  return (
    <PartnerGroupCard title="Partner Loyalty Management">
      {LOYALTY_MANAGEMENT_PARTNERS.map((c) => (
        <PartnerItemCardD
          key={c.id}
          title={c.title}
          desc={c.desc}
          icon={c.icon}
          url={c.url}
        />
      ))}
    </PartnerGroupCard>
  );
}

export function AboutPartnerWms() {
  return (
    <PartnerGroupCard title="Partner Warehouse Management System">
      {WMS_PARTNERS.map((c) => (
        <PartnerItemCardD
          key={c.id}
          title={c.title}
          desc={c.desc}
          icon={c.icon}
          url={c.url}
        />
      ))}
    </PartnerGroupCard>
  );
}
