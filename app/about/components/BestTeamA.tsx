"use client";
import { IMAGE_BASEURL } from "@/app/config";
/* eslint-disable @next/next/no-img-element */

import { Link } from "react-scroll";

export default function BestTeamA() {
  return (
    <div className="bg-white text-black md:text-xl relative about-section">
      <div className="container mx-auto px-8 py-8 min-h-screen flex flex-col md:flex-row gap-8 items-center">
        <div className="w-full md:w-7/12 space-y-8">
          <div>
            <div className="text-base md:text-xl lg:text-2xl font-bold pb-2 font-hanken-grotesk">
              Tentang Kami
            </div>
            <div className="text-3.5xl md:text-4xl lg:text-6.5xl font-bold font-rubik">
              Tim Terbaik Untuk Pecahkan Masalahmu
            </div>
          </div>
          <div className="font-hanken-grotesk text-sm md:text-lg lg:text-xl">
            Sejak tahun 2019, tim kami memiliki fokus dan komitmen yang disiplin
            untuk selalu memberikan solusi terbaik untuk para pebisnis.
          </div>
          <div className="">
            <Link
              className="text-paprika-900 font-bold cursor-pointer text-sm md:text-lg lg:text-xl"
              to="about-partners"
              smooth={true}
              offset={-80}
              duration={500}
            >
              Ketahui selebihnya &darr;
            </Link>
          </div>
        </div>
        <div className="w-full md:w-5/12 max-w-[600px]">
          <img
            src={`${IMAGE_BASEURL}/images/team.jpg`}
            className="w-full"
            alt="Team"
          />
        </div>
      </div>
    </div>
  );
}
