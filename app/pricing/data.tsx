import { CheckOutlined, CloseOutlined, LayersSharp } from "@mui/icons-material";
import { AddonCheckboxInput, MultiuserNumInput } from "./components/AddonInput";

export const PACKAGES = [
  {
    id: "basic",
    title: "Basic",
    subtitle: "Untuk free trial selama 2 minggu",
    desc: "Untuk free trial selama 2 minggu",
    monthlyPrice: 0,
    annualPriceDisc: null,
    formattedMonthlyPrice:
      (
        <div className="inline-flex items-center gap-1 font-normal">
          <div className="font-bold text-2xl tracking-tighter">Gratis</div>
        </div>
      ),
    formattedMonthlyPriceList:
      (
        <div className="inline-flex items-center gap-1 font-normal">
          <div className="font-bold text-2xl tracking-tighter">Gratis</div>
        </div>
      ),
    popular: false,
    includes: [
      "14 hari free trial",
      "Max 4 toko",
      "Max 2 marketplace",
      "Private onboarding",
    ],
    className: "border-black",
    icon: <LayersSharp className="text-black text-2xl" />,
    priceWrapperClassName: "border-black",
  },
  {
    id: "starter",
    title: "Starter",
    subtitle: "Untuk toko skala mikro",
    desc: "Untuk toko skala mikro",
    monthlyPrice: 0,
    annualPriceDisc: null,
    formattedMonthlyPrice:
      (
        <div className="inline-flex items-center gap-1 font-normal">
          <div className="text-base md:text-xl lg:text-2xl font-bold"><span>Rp 200.000</span>
            <br></br><span className='inline-block opacity-75'>/ 6 bulan</span></div>
        </div>
      ),
    formattedMonthlyPriceList:
      (
        <div className="inline-flex items-center gap-1 font-normal">
          <div className="text-sm">Rp</div>
          <div className="font-bold text-2xl tracking-tighter">200</div>
          <div className="text-xs text-left">
            <div>rb</div>
            <div>/6 bln</div>
          </div>
        </div>
      ),
    popular: false,
    includes: [
      "1k pesanan/6 bulan",
      "Unlimited toko",
      "Unlimited marketplace",
      "Max 2 user",
      "Chat marketplace",
    ],
    className: "border-black",
    icon: <LayersSharp className="text-black text-2xl" />,
    priceWrapperClassName: "border-black",
  },
  {
    id: "silver",
    title: "Silver",
    subtitle: "Untuk toko skala mikro",
    desc: "Untuk toko skala mikro",
    monthlyPrice: 400000,
    annualPriceDisc: 400000,
    formattedMonthlyPrice: (
      <div className="inline-flex items-center gap-1 font-normal">
        <div className="text-sm">Rp</div>
        <div className="font-bold text-2xl tracking-tighter">400</div>
        <div className="text-xs text-left">
          <div>rb</div>
          <div>/bln</div>
        </div>
      </div>
    ),
    popular: false,
    includes: [
      "Max 3k pesanan/bulan",
      "Unlimited toko",
      "Unlimited marketplace",
      "Max 2 user",
      "Chat marketplace",
      "Extra kuota Rp 150/pesanan",
    ],
    className: "border-slate-300",
    icon: <LayersSharp className="text-slate-300 text-2xl" />,
    priceWrapperClassName: "border-slate-300",
  },
  {
    id: "gold",
    title: "Gold",
    subtitle: "Untuk toko skala UMKM",
    desc: "Untuk toko skala UMKM",
    monthlyPrice: 900000,
    annualPriceDisc: 900000,
    formattedMonthlyPrice: (
      <div className="inline-flex items-center gap-1 font-normal">
        <div className="text-sm">Rp</div>
        <div className="font-bold text-2xl tracking-tighter">900</div>
        <div className="text-xs text-left">
          <div>rb</div>
          <div>/bln</div>
        </div>
      </div>
    ),
    popular: true,
    includes: [
      "Max 30k pesanan/bulan",
      "Unlimited toko",
      "Unlimited marketplace",
      "Max 5 user",
      "Chat marketplace",
      "Extra kuota Rp 150/pesanan",
    ],
    className: "border-amber-300",
    icon: <LayersSharp className="text-amber-400 text-2xl" />,
    priceWrapperClassName: "border-amber-300",
  },
  {
    id: "diamond",
    title: "Diamond",
    subtitle: "Untuk toko skala menengah",
    desc: "Untuk toko skala menengah",
    monthlyPrice: 2500000,
    annualPriceDisc: 2500000,
    formattedMonthlyPrice: (
      <div className="inline-flex items-center gap-1 font-normal">
        <div className="text-sm">Rp</div>
        <div className="font-bold text-2xl tracking-tighter">2,5</div>
        <div className="text-xs text-left">
          <div>jt</div>
          <div>/bln</div>
        </div>
      </div>
    ),
    popular: false,
    includes: [
      "Max 75k pesanan/bulan",
      "Unlimited toko",
      "Unlimited marketplace",
      "Max 5 user",
      "Chat marketplace",
      "Multi SKU",
      "Bundling",
      "Extra kuota Rp 150/pesanan",
    ],
    className: "border-sky-300",
    icon: <LayersSharp className="text-sky-300 text-2xl" />,
    priceWrapperClassName: "border-sky-300",
  },
  {
    id: "platinum",
    title: "Platinum",
    subtitle: "Untuk toko skala besar",
    desc: "Untuk toko skala besar",
    monthlyPrice: 5000000,
    annualPriceDisc: 5000000,
    formattedMonthlyPrice: (
      <div className="inline-flex items-center gap-1 font-normal">
        <div className="text-sm">Rp</div>
        <div className="font-bold text-2xl tracking-tighter">5</div>
        <div className="text-xs text-left">
          <div>jt</div>
          <div>/bln</div>
        </div>
      </div>
    ),
    popular: false,
    includes: [
      "Max 150k pesanan/bulan",
      "Unlimited toko",
      "Unlimited marketplace",
      "Unlimited user",
      "Chat marketplace",
      "Multi SKU",
      "Bundling",
      "Extra kuota Rp 150/pesanan",
    ],
    className: "border-slate-200",
    icon: <LayersSharp className="text-slate-200 text-2xl" />,
    priceWrapperClassName: "border-slate-200",
  },
];

export function DEFAULT_VALUE_RENDERER(v: any) {
  if (v === false) return <CloseOutlined className="text-red-600" />;
  else if (v === true) return <CheckOutlined className="text-green-500" />;
  else return v;
}

export const COMPARISONS = [
  {
    id: "numMarketplaces",
    title: "Jumlah Marketplace",
    render: DEFAULT_VALUE_RENDERER,
  },
  {
    id: "numMonthlyOrders",
    title: "Jumlah Pesanan Per Bulan",
    render: DEFAULT_VALUE_RENDERER,
  },
  {
    id: "marketplaceIntegration",
    title: "Marketplace Integration",
    render: DEFAULT_VALUE_RENDERER,
  },
  {
    id: "invoicingAndSalesAnalysis",
    title: "Invoicing & Sales Analysis",
    render: DEFAULT_VALUE_RENDERER,
  },
  {
    id: "shipmentManagement",
    title: "Shipment Management",
    render: DEFAULT_VALUE_RENDERER,
  },
  {
    id: "purchasing",
    title: "Purchasing",
    render: DEFAULT_VALUE_RENDERER,
  },
  {
    id: "multiwarehouse",
    title: "Multi Warehouse Multi Location",
    render: DEFAULT_VALUE_RENDERER,
  },
  {
    id: "accountReceivable",
    title: "Account Receivable (AR)",
    render: DEFAULT_VALUE_RENDERER,
  },
  {
    id: "accountPayable",
    title: "Account Payable (AP)",
    render: DEFAULT_VALUE_RENDERER,
  },
  {
    id: "generalLedger",
    title: "General Ledger",
    render: DEFAULT_VALUE_RENDERER,
  },
  {
    id: "multiuser",
    title: "Multi User & Security",
    render: DEFAULT_VALUE_RENDERER,
  },
  {
    id: "-",
    title: "Add-on/Plugin",
    render: DEFAULT_VALUE_RENDERER,
  },
  {
    id: "chatIntegration",
    title: "Integrasi Chat",
    render: DEFAULT_VALUE_RENDERER,
  },
  {
    id: "tiktokshop",
    title: "Integrasi TikTok Shop",
    render: DEFAULT_VALUE_RENDERER,
  },
  {
    id: "multisku",
    title: "Multi SKU",
    render: DEFAULT_VALUE_RENDERER,
  },
  {
    id: "bundling",
    title: "Bundling",
    render: DEFAULT_VALUE_RENDERER,
  },
  {
    id: "eightytwocart",
    title: "Integrasi Webstore 82cart",
    render: DEFAULT_VALUE_RENDERER,
  },
  {
    id: "shopify",
    title: "Integrasi Webstore Shopify",
    render: DEFAULT_VALUE_RENDERER,
  },
  {
    id: "woocommerce",
    title: "Integrasi Webstore Woocommerce",
    render: DEFAULT_VALUE_RENDERER,
  },
  // {
  //     id: 'dealpos',
  //     title: "Integrasi Dealpos",
  //     render: DEFAULT_VALUE_RENDERER
  // },
  {
    id: "erasoft",
    title: "Integrasi ERP Erasoft",
    render: DEFAULT_VALUE_RENDERER,
  },
  {
    id: "accurate",
    title: "Integrasi Accurate Online",
    render: DEFAULT_VALUE_RENDERER,
  },
  {
    id: "openapi",
    title: "Integrasi Open API",
    render: DEFAULT_VALUE_RENDERER,
  },
  {
    id: "tada",
    title: "Integrasi TADA",
    render: DEFAULT_VALUE_RENDERER,
  },
  {
    id: "ftp",
    title: "Data Transfer to FTP",
    render: DEFAULT_VALUE_RENDERER,
  },
];

export const PRICE_DETAILS = {
  basic: {
    numMarketplaces: 2,
    numMonthlyOrders: "100",
    marketplaceIntegration: true,
    invoicingAndSalesAnalysis: true,
    shipmentManagement: true,
    purchasing: true,
    multiwarehouse: true,
    accountReceivable: true,
    accountPayable: true,
    generalLedger: false,
    multiuser: false,
    chatIntegration: false,
    tiktokshop: false,
    multisku: false,
    bundling: false,
    eightytwocart: false,
    shopify: false,
    woocommerce: false,
    dealpos: false,
    erasoft: false,
    accurate: false,
    openapi: false,
    tada: false,
    ftp: false,
  },
  starter: {
    numMarketplaces: "Unlimited",
    numMonthlyOrders: "1.000 (per 6 bulan)",
    marketplaceIntegration: true,
    invoicingAndSalesAnalysis: true,
    shipmentManagement: true,
    purchasing: true,
    multiwarehouse: true,
    accountReceivable: true,
    accountPayable: true,
    generalLedger: true,
    multiuser: 2,
    chatIntegration: "Free",
    tiktokshop: "Free",
    multisku: (
      <AddonCheckboxInput id="silver" featureId="multisku" price={200000}>
        Rp 200.000/bulan
      </AddonCheckboxInput>
    ),
    bundling: (
      <AddonCheckboxInput id="silver" featureId="bundling" price={300000}>
        Rp 300.000/bulan
      </AddonCheckboxInput>
    ),
    eightytwocart: "Free",
    shopify: "Free",
    woocommerce: "Free",
    dealpos: (
      <AddonCheckboxInput id="silver" featureId="dealpos" price={200000}>
        Rp 200.000/bulan
      </AddonCheckboxInput>
    ),
    erasoft: "Free",
    accurate: (
      <AddonCheckboxInput id="silver" featureId="accurate" price={200000}>
        Rp 200.000/bulan
      </AddonCheckboxInput>
    ),
    openapi: (
      <AddonCheckboxInput id="silver" featureId="openapi" price={200000}>
        Rp 200.000/bulan
      </AddonCheckboxInput>
    ),
    tada: "Free",
    ftp: (
      <AddonCheckboxInput id="silver" featureId="feature" price={300000}>
        Rp 300.000/bulan
      </AddonCheckboxInput>
    ),
  },
  silver: {
    numMarketplaces: "Unlimited",
    numMonthlyOrders: "3.000",
    marketplaceIntegration: true,
    invoicingAndSalesAnalysis: true,
    shipmentManagement: true,
    purchasing: true,
    multiwarehouse: true,
    accountReceivable: true,
    accountPayable: true,
    generalLedger: true,
    multiuser: 2,
    chatIntegration: "Free",
    tiktokshop: "Free",
    multisku: (
      <AddonCheckboxInput id="silver" featureId="multisku" price={200000}>
        Rp 200.000/bulan
      </AddonCheckboxInput>
    ),
    bundling: (
      <AddonCheckboxInput id="silver" featureId="bundling" price={300000}>
        Rp 300.000/bulan
      </AddonCheckboxInput>
    ),
    eightytwocart: "Free",
    shopify: "Free",
    woocommerce: "Free",
    dealpos: (
      <AddonCheckboxInput id="silver" featureId="dealpos" price={200000}>
        Rp 200.000/bulan
      </AddonCheckboxInput>
    ),
    erasoft: "Free",
    accurate: (
      <AddonCheckboxInput id="silver" featureId="accurate" price={200000}>
        Rp 200.000/bulan
      </AddonCheckboxInput>
    ),
    openapi: (
      <AddonCheckboxInput id="silver" featureId="openapi" price={200000}>
        Rp 200.000/bulan
      </AddonCheckboxInput>
    ),
    tada: "Free",
    ftp: (
      <AddonCheckboxInput id="silver" featureId="feature" price={300000}>
        Rp 300.000/bulan
      </AddonCheckboxInput>
    ),
  },
  gold: {
    numMarketplaces: "Unlimited",
    numMonthlyOrders: "30.000",
    marketplaceIntegration: true,
    invoicingAndSalesAnalysis: true,
    shipmentManagement: true,
    purchasing: true,
    multiwarehouse: true,
    accountReceivable: true,
    accountPayable: true,
    generalLedger: true,
    multiuser: <MultiuserNumInput id="gold" min={5} max={50} />,
    chatIntegration: "Free",
    tiktokshop: "Free",
    multisku: (
      <AddonCheckboxInput id="gold" featureId="multisku" price={200000}>
        Rp 200.000/bulan
      </AddonCheckboxInput>
    ),
    bundling: (
      <AddonCheckboxInput id="gold" featureId="bundling" price={300000}>
        Rp 300.000/bulan
      </AddonCheckboxInput>
    ),
    eightytwocart: "Free",
    shopify: "Free",
    woocommerce: "Free",
    dealpos: (
      <AddonCheckboxInput id="gold" featureId="dealpos" price={200000}>
        Rp 200.000/bulan
      </AddonCheckboxInput>
    ),
    erasoft: "Free",
    accurate: (
      <AddonCheckboxInput id="gold" featureId="accurate" price={200000}>
        Rp 200.000/bulan
      </AddonCheckboxInput>
    ),
    openapi: (
      <AddonCheckboxInput id="gold" featureId="openapi" price={200000}>
        Rp 200.000/bulan
      </AddonCheckboxInput>
    ),
    tada: "Free",
    ftp: (
      <AddonCheckboxInput id="gold" featureId="feature" price={300000}>
        Rp 300.000/bulan
      </AddonCheckboxInput>
    ),
  },
  diamond: {
    numMarketplaces: "Unlimited",
    numMonthlyOrders: "75.000",
    marketplaceIntegration: true,
    invoicingAndSalesAnalysis: true,
    shipmentManagement: true,
    purchasing: true,
    multiwarehouse: true,
    accountReceivable: true,
    accountPayable: true,
    generalLedger: true,
    multiuser: <MultiuserNumInput id="diamond" min={5} max={50} />,
    chatIntegration: "Free",
    tiktokshop: "Free",
    multisku: "Free",
    bundling: "Free",
    eightytwocart: "Free",
    shopify: "Free",
    woocommerce: "Free",
    dealpos: (
      <AddonCheckboxInput id="diamond" featureId="dealpos" price={200000}>
        Rp 200.000/bulan
      </AddonCheckboxInput>
    ),
    erasoft: "Free",
    accurate: (
      <AddonCheckboxInput id="diamond" featureId="accurate" price={200000}>
        Rp 200.000/bulan
      </AddonCheckboxInput>
    ),
    openapi: (
      <AddonCheckboxInput id="diamond" featureId="openapi" price={200000}>
        Rp 200.000/bulan
      </AddonCheckboxInput>
    ),
    tada: "Free",
    ftp: (
      <AddonCheckboxInput id="diamond" featureId="feature" price={300000}>
        Rp 300.000/bulan
      </AddonCheckboxInput>
    ),
  },
  platinum: {
    numMarketplaces: "Unlimited",
    numMonthlyOrders: "150.000",
    marketplaceIntegration: true,
    invoicingAndSalesAnalysis: true,
    shipmentManagement: true,
    purchasing: true,
    multiwarehouse: true,
    accountReceivable: true,
    accountPayable: true,
    generalLedger: true,
    multiuser: "Unlimited",
    chatIntegration: "Free",
    tiktokshop: "Free",
    multisku: "Free",
    bundling: "Free",
    eightytwocart: "Free",
    shopify: "Free",
    woocommerce: "Free",
    dealpos: (
      <AddonCheckboxInput id="platinum" featureId="dealpos" price={200000}>
        Rp 200.000/bulan
      </AddonCheckboxInput>
    ),
    erasoft: "Free",
    accurate: (
      <AddonCheckboxInput id="platinum" featureId="accurate" price={200000}>
        Rp 200.000/bulan
      </AddonCheckboxInput>
    ),
    openapi: (
      <AddonCheckboxInput id="platinum" featureId="openapi" price={200000}>
        Rp 200.000/bulan
      </AddonCheckboxInput>
    ),
    tada: "Free",
    ftp: (
      <AddonCheckboxInput id="platinum" featureId="feature" price={300000}>
        Rp 300.000/bulan
      </AddonCheckboxInput>
    ),
  },
};
