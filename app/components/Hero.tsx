/* eslint-disable @next/next/no-img-element */
"use client";
import Navbar from "@/components/Navbar";
import { IMAGE_BASEURL } from "../config";
import Stocks from "./Stocks";

export default function Hero() {
  return (
    <div className="bg-gray-900 herow">
      <Navbar activeKey="home" theme="red" />
      <div className="relative isolate overflow-hidden pt-14 min-h-screen flex">
        <img
          src={`${IMAGE_BASEURL}/images/bg.png`}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-hero-mobile md:object-center"
        />
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="container mx-auto px-8 py-8 md:py-16 flex flex-col gap-16 md:gap-0">
          <div className="max-w-2xl flex-1 flex flex-col justify-start md:justify-center pt-12 md:pt-0">
            <h1 className="text-3.5xl md:text-4xl lg:text-6.5xl font-bold text-white text-center lg:text-left font-rubik">
              Solusi Cerdas Pebisnis Online
            </h1>
            <p className="mt-1 text-base md:text-xl lg:text-2xl leading-normal lg:leading-8 text-white text-center lg:text-left">
              Kontrol bisnis anda dari berbagai marketplace dari satu tempat.
            </p>
          </div>
          <div className="flex-none">
            <Stocks />
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
