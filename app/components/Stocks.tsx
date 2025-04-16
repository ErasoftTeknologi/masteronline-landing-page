/* eslint-disable @next/next/no-img-element */
"use client";

import { useGSAP } from "@gsap/react";
import classNames from "classnames";
import gsap from "gsap";
import { CustomEase } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import { IMAGE_BASEURL } from "../config";

const VARIANTS = {
  tokopedia: {
    logoUrl: `${IMAGE_BASEURL}/images/tokopedia-icon.png`,
    containerClassName:
      "md:border-t-4 md:rounded overflow-hidden md:bg-white md:bg-opacity-85 text-black flex flex-col gap-3 px-4 py-2 md:py-4 relative md:border-green-500 col-span-1",
    changeNotifClassName:
      "absolute inset-0 flex flex-col text-white gap-2 px-4 py-2 md:py-4 bg-green-500",
    circleClassName: "w-3 h-3 rounded-full bg-green-500",
  },
  shopee: {
    logoUrl: `${IMAGE_BASEURL}/images/shopee-icon.png`,
    containerClassName:
      "md:border-t-4 md:rounded overflow-hidden md:bg-white md:bg-opacity-85 text-black flex flex-col gap-3 px-4 py-2 md:py-4 relative md:border-orange-500 col-span-1",
    changeNotifClassName:
      "absolute inset-0 flex flex-col text-white gap-2 px-4 py-2 md:py-4 bg-orange-500",
    circleClassName: "w-3 h-3 rounded-full bg-orange-500",
  },
  lazada: {
    logoUrl: `${IMAGE_BASEURL}/images/lazada-icon.png`,
    containerClassName:
      "md:border-t-4 md:rounded overflow-hidden md:bg-white md:bg-opacity-85 text-black flex flex-col gap-3 px-4 py-2 md:py-4 relative md:border-indigo-900 col-span-1",
    changeNotifClassName:
      "absolute inset-0 flex flex-col text-white gap-2 px-4 py-2 md:py-4 bg-indigo-900",
    circleClassName: "w-3 h-3 rounded-full bg-indigo-900",
  },
  blibli: {
    logoUrl: `${IMAGE_BASEURL}/images/blibli-icon.png`,
    containerClassName:
      "md:border-t-4 md:rounded overflow-hidden md:bg-white md:bg-opacity-85 text-black flex flex-col gap-3 px-4 py-2 md:py-4 relative md:border-sky-500 col-span-1",
    changeNotifClassName:
      "absolute inset-0 flex flex-col text-white gap-2 px-4 py-2 md:py-4 bg-sky-800",
    circleClassName: "w-3 h-3 rounded-full bg-sky-500",
  },
  bukalapak: {
    logoUrl: `${IMAGE_BASEURL}/images/bukalapak-icon.png`,
    containerClassName:
      "md:border-t-4 md:rounded overflow-hidden md:bg-white md:bg-opacity-85 text-black flex flex-col gap-3 px-4 py-2 md:py-4 relative md:border-paprika-900 col-span-1",
    changeNotifClassName:
      "absolute inset-0 flex flex-col text-white gap-2 px-4 py-2 md:py-4 bg-paprika-900",
    circleClassName: "w-3 h-3 rounded-full bg-paprika-900",
  },
  tiktok: {
    logoUrl: `${IMAGE_BASEURL}/images/tiktok-icon.png`,
    containerClassName:
      "md:border-t-4 md:rounded overflow-hidden md:bg-white md:bg-opacity-85 text-black flex flex-col gap-3 px-4 py-2 md:py-4 relative md:border-slate-800 col-span-1",
    changeNotifClassName:
      "absolute inset-0 flex flex-col text-white gap-2 px-4 py-2 md:py-4 bg-slate-800",
    circleClassName: "w-3 h-3 rounded-full bg-slate-800",
  },
};

type StockProps = {
  stock?: number;
  className?: string;
  title: string;
  id: string;
  lastChangeId: string;
};
function Stock({ id, lastChangeId, title, stock }: StockProps) {
  const containerRef = useRef(null);
  const stockRef = useRef(null);
  const changeRef = useRef(null);
  const [displayStock, setDisplayStock] = useState(stock);

  useGSAP(
    () => {
      if (id === lastChangeId) {
        const tween = gsap.to(changeRef.current, {
          opacity: 1,
          duration: 1.2,
          repeat: 1,
          yoyo: true,
          repeatDelay: 0,
          ease: CustomEase.create(
            "custom",
            "M0,0 C0,0 -0.014,0.872 0.069,0.917 0.156,1.04 1,1.012 1,1.012 "
          ),
        });
        tween.play();
        setDisplayStock(stock);
      } else {
        const tween = gsap.to(stockRef.current, {
          delay: 0.5,
          opacity: 0,
          duration: 0.25,
          repeat: 1,
          yoyo: true,
          repeatDelay: 0,
        });
        tween.play();
        setTimeout(() => {
          setDisplayStock(stock);
        }, 400);
      }
    },
    {
      dependencies: [
        stock,
        id,
        lastChangeId,
        stockRef.current,
        changeRef.current,
      ],
      scope: containerRef,
      revertOnUpdate: true,
    }
  );

  return (
    <div
      className={VARIANTS[id as keyof typeof VARIANTS].containerClassName}
      ref={containerRef}
    >
      <div className="hidden md:flex gap-2">
        <img
          src={VARIANTS[id as keyof typeof VARIANTS].logoUrl}
          alt=""
          className="aspect-1 w-6 object-cover rounded"
        />
        <div className="font-bold">{title}</div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex-none">
          <img
            src={`${IMAGE_BASEURL}/images/maroon-beanie.png`}
            alt="Maroon Beanie"
            className="aspect-square w-8 rounded hidden md:block"
          />
          <div
            className={classNames(
              VARIANTS[id as keyof typeof VARIANTS].circleClassName,
              "block md:hidden"
            )}
          />
        </div>
        <div className="flex-1">
          <span className="inline md:hidden">{title}</span>
          <span className="hidden md:inline">Maroon Beanie</span>
        </div>
        <div className="flex-none">
          <span>Stok:</span>&nbsp;
          <span className="font-bold" style={{ opacity: 1 }} ref={stockRef}>
            {displayStock}
          </span>
        </div>
      </div>
      <div
        className={VARIANTS[id as keyof typeof VARIANTS].changeNotifClassName}
        style={{ opacity: 0 }}
        ref={changeRef}
      >
        <div className="font-bold text-center text-xl hidden md:block">
          Terjual!
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-none hidden md:block">
            <img
              src={`${IMAGE_BASEURL}/images/maroon-beanie.png`}
              alt="Maroon Beanie"
              className="aspect-square w-8 rounded"
            />
          </div>
          <div className="flex-1">
            <span className="inline md:hidden">Terjual!</span>
            <span className="hidden md:inline">Maroon Beanie</span>
          </div>
          <div className="flex-none">
            <span>Stok:</span>&nbsp;<span className="font-bold">{stock}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Stocks() {
  const [stockChange, setStockChange] = useState({
    id: "tokopedia",
    qty: 10,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setStockChange((c) => {
        const marketplaces = [
          "shopee",
          "lazada",
          "blibli",
          "bukalapak",
          "tiktok",
          "tokopedia",
        ];
        const i = (6 + (10 - c.qty)) % 6;

        return {
          id: marketplaces[i],
          qty: c.qty == 0 ? 10 : c.qty - 1,
        };
      });
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="flex flex-col gap-2 max-w-[900px]">
      <div className="flex flex-col items-start p-4 relative bg-slate-900 rounded overflow-hidden md:hidden">
        <div className="flex items-center gap-2 relative self-stretch w-full flex-auto">
          <img
            className="relative w-8 h-8 object-cover"
            alt="Rectangle"
            src={`${IMAGE_BASEURL}/images/maroon-beanie.png`}
          />
          <div className="relative flex-1 font-semibold text-white text-base">
            Maroon Beanie
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-3 bg-white md:bg-transparent bg-opacity-85 rounded overflow-hidden">
        <Stock
          stock={stockChange.qty}
          lastChangeId={stockChange.id}
          id="tokopedia"
          title="Tokopedia"
        />
        <Stock
          stock={stockChange.qty}
          lastChangeId={stockChange.id}
          id="shopee"
          title="Shopee"
        />
        <Stock
          stock={stockChange.qty}
          lastChangeId={stockChange.id}
          id="lazada"
          title="Lazada"
        />
        <Stock
          stock={stockChange.qty}
          lastChangeId={stockChange.id}
          id="blibli"
          title="Blibli"
        />
        <Stock
          stock={stockChange.qty}
          lastChangeId={stockChange.id}
          id="bukalapak"
          title="Bukalapak"
        />
        <Stock
          stock={stockChange.qty}
          lastChangeId={stockChange.id}
          id="tiktok"
          title="TikTok"
        />
      </div>
    </div>
  );
}
