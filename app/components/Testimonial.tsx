/* eslint-disable @next/next/no-img-element */
"use client";

import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { IMAGE_BASEURL } from "../config";
import TestimonialVideo from "./TestimonialVideo";

const USERS = [
  {
    id: "1",
    icon: `${IMAGE_BASEURL}/images/lumiwhite-logo.svg`,
  },
  {
    id: "2",
    icon: `${IMAGE_BASEURL}/images/morris-logo.png`,
  },
  {
    id: "3",
    icon: `${IMAGE_BASEURL}/images/bayininja-logo.png`,
  },
  {
    id: "4",
    icon: `${IMAGE_BASEURL}/images/evertops-logo.svg`,
  },
  {
    id: "5",
    icon: `${IMAGE_BASEURL}/images/kimbo-logo.png`,
  },
  {
    id: "6",
    icon: `${IMAGE_BASEURL}/images/sinaragung-logo.png`,
  },
  {
    id: "7",
    icon: `${IMAGE_BASEURL}/images/sukapets-logo.png`,
  },
  {
    id: "1",
    icon: `${IMAGE_BASEURL}/images/jib-logo.svg`,
  },
];

const TESTIMONIALS = [
  {
    id: 1,
    user: "Toko Accandi",
    userDesc: (
      <span>
        <span className="font-bold">Soemardi W</span> - Pemilik
      </span>
    ),
    photo: `${IMAGE_BASEURL}/images/bg-warehouse.jpg`,
    logo: `${IMAGE_BASEURL}/images/acc-andi-logo.jpg`,
    messages: [
      "Sebelumnya saya udah cari kemana-mana, udah tes sama beberapa aplikasi lain yang sama dengan ini dan akhirnya saya putusin ke Master Online.",
      "Karena ini yang menurut saya terbaik di antara yang lain. Setelah saya pakai si ini bener2 ngebantu banget.",
    ],
  },
];

type ResponsiveTestimonialCardProps = {
  testimonial: any;
};

function ResponsiveTestimonialCard({
  testimonial,
}: ResponsiveTestimonialCardProps) {
  const ref = useRef<any>(null);
  const numSlides = testimonial.messages.length;
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    ref.current?.slickGoTo(currentSlide - 1);
  };

  const handleNextSlide = () => {
    ref.current?.slickGoTo(currentSlide + 1);
  };

  return (
    <div className="py-8 text-white md:text-black">
      <div className="relative md:flex p-8 md:p-0 rounded overflow-hidden">
        <img
          className="absolute inset-0 w-full h-full object-cover block md:hidden z-0"
          src={testimonial.photo}
        />
        <div className="absolute inset-0 w-full h-full block md:hidden z-0 bg-black bg-opacity-70" />
        <div className="w-full md:w-8/12 xl:w-9/12 flex flex-col justify-between gap-8 md:gap-16 z-10">
          <Slider
            ref={ref}
            arrows={false}
            slidesToShow={1}
            slidesToScroll={1}
            afterChange={(c) => setCurrentSlide(c)}
          >
            {testimonial.messages.map((m: any) => (
              <div
                key={m}
                className="text-xl md:text-2xl lg:text-3xl xl:text-3xl font-semibold"
              >
                “{m}”
              </div>
            ))}
          </Slider>
          <div className="inline-flex gap-4 z-10 items-center self-center md:self-start">
            <button
              className="btn btn-primary btn-circle btn-xs md:btn-md"
              onClick={handlePrevSlide}
            >
              <ChevronLeft />
            </button>
            <div className="flex items-center text-lg md:text-2xl font-bold">
              {currentSlide + 1}/{numSlides}
            </div>
            <button
              className="btn btn-primary btn-circle btn-xs md:btn-md"
              onClick={handleNextSlide}
            >
              <ChevronRight />
            </button>
          </div>
          <div className="flex items-center gap-4 z-10">
            <img
              src={testimonial.logo}
              className="w-8 h-8 object-cover block md:hidden"
              alt=""
            />
            <div className="flex-1">
              <div className="text-base md:text-2xl lg:text-3xl xl:text-4xl font-bold">
                {testimonial.user}
              </div>
              <div className="text-xs md:text-lg lg:text-lg xl:text-xl">
                {testimonial.userDesc}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-none w-4/12 xl:w-3/12 pl-8 hidden md:block">
          <div className="aspect-w-2 aspect-h-3 relative w-full h-auto rounded overflow-hidden">
            <img
              src={testimonial.photo}
              className="absolute inset-0 w-full h-full object-cover"
              alt=""
            />
            <div className="absolute inset-0 w-full h-full bg-black bg-opacity-75" />
            <img
              src={testimonial.logo}
              className="absolute w-32 h-32 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 object-cover"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

type TestimonialCardProps = {
  testimonial: any;
};

function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div>
      <ResponsiveTestimonialCard testimonial={testimonial} />
      {/* <MobileTestimonialCard testimonial={testimonial} /> */}
    </div>
  );
}

function TestimonialCarousel() {
  return (
    <div>
      {TESTIMONIALS.map((c) => (
        <TestimonialCard key={c.id} testimonial={c} />
      ))}
    </div>
  );
  // return (
  //     <Swiper
  //         spaceBetween={50}
  //         slidesPerView={1}
  //     >
  //         {TESTIMONIALS.map(c => (
  //             <SwiperSlide key={c.id}>
  //                 <TestimonialCard testimonial={c} />
  //             </SwiperSlide>
  //         ))}

  //     </Swiper>
  // )
}

function UsersCarousel() {
  return (
    <Swiper
      className="w-full md:container"
      slidesPerView={USERS.length}
      breakpoints={{
        320: {
          slidesPerView: 3.5,
        },
        720: {
          slidesPerView: 4.5,
        },
        1000: {
          slidesPerView: 8,
        },
      }}
    >
      {USERS.map((c) => (
        <SwiperSlide
          key={c.id}
          className="self-center px-4 first:pl-8 last:pr-8"
        >
          <img src={c.icon} className="w-full" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default function Testimonial() {
  return (
    <div className="bg-paprika-50 text-black py-12 md:py-18 lg:py-24 space-y-12 md:space-y-18 lg:space-y-24">
      <div className="space-y-4 lg:space-y-8">
        <div className="px-8 text-center text-sm md:text-lg lg:text-xl">
          Dipercaya ribuan toko terbaik
        </div>
        <UsersCarousel />
      </div>
      <div className="container mx-auto space-y-12 px-8 md:space-y-18 lg:space-y-24">
        <div className="container mx-auto">
          <TestimonialVideo
            title="Arutala Coffee, 2x Pemenang Tokopedia Nyam Award"
            desc="YouTube Channel Master Online"
            youtubeCode="AupRSCgc1BM"
            customThumbnailUrl={`${IMAGE_BASEURL}/images/testimonial-video.png`}
          />
        </div>
        <div className="">
          <TestimonialCarousel />
        </div>
      </div>
    </div>
  );
}
