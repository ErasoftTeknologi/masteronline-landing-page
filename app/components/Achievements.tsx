/* eslint-disable @next/next/no-img-element */

import {
  Groups2Outlined,
  LocalShippingOutlined,
  MonetizationOnOutlined,
  ShoppingBagOutlined,
} from "@mui/icons-material";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { IMAGE_BASEURL } from "../config";

type DataWidgetProps = {
  icon: OverridableComponent<SvgIconTypeMap<object, "svg">>;
  value: string;
  title: string;
};

function DataWidget({ icon, value, title }: DataWidgetProps) {
  const Icon = icon;
  return (
    <div className="w-full lg:w-1/2 p-3 lg:p-4 flex gap-4 lg:gap-8">
      <div className="flex-none lg:hidden">
        <div className="aspect-square rounded-md bg-paprika-900 text-white shadow p-2">
          <Icon />
        </div>
      </div>
      <div className="lg:border-l-4 border-paprika-900 lg:pl-4 flex flex-row lg:flex-col items-center lg:items-start gap-2">
        <div className="font-black text-2xl lg:text-4xl">{value}</div>
        <div className="text-base md:text-lg lg:text-xl">{title}</div>
      </div>
    </div>
  );
}

export default function Achievements() {
  return (
    <div className="bg-white text-black">
      <div className="container mx-auto px-8 py-12 md:py-18 lg:py-24">
        <div className="flex flex-col-reverse lg:flex-row gap-8">
          <div className="w-full lg:w-1/4">
            <img
              src={`${IMAGE_BASEURL}/images/better.png`}
              alt="Better with us"
              className="w-full h-auto rounded-md"
            />
          </div>
          <div className="w-full lg:w-3/4 space-y-4 lg:space-y-8">
            <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl">
              Maju dan kembangkanlah bisnis online anda bersama ribuan pebisnis
              lainnya.
            </h1>
            <div className="flex flex-wrap -m-3 lg:-m-4">
              <DataWidget
                icon={Groups2Outlined}
                title="pengguna"
                value="1500+"
              />
              <DataWidget
                icon={MonetizationOnOutlined}
                title="omset/bulan"
                value="IDR 86M"
              />
              <DataWidget
                icon={ShoppingBagOutlined}
                title="pesanan/bulan"
                value="550rb"
              />
              <DataWidget
                icon={LocalShippingOutlined}
                title="produk terkirim/bulan"
                value=">1jt"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
