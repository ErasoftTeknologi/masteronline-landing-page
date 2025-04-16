/* eslint-disable @next/next/no-img-element */
"use client";

import { BUSINESS_PARTNER_URL, IMAGE_BASEURL } from "@/app/config";
import { useGSAP } from "@gsap/react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useState } from "react";

const MASTERONLINE_LOGO = `${IMAGE_BASEURL}/images/masteronline-logo.png`;
const MASTERONLINE_LOGO_WHITE = `${IMAGE_BASEURL}/images/masteronline-logo-white.png`;

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const navigation = [
  { id: "home", name: "Home", href: "/" },
  { id: "about", name: "About", href: "/about" },
  { id: "pricing", name: "Pricing", href: "/pricing" },
  { id: "partner", name: "Partner", href: BUSINESS_PARTNER_URL },
];

type NavbarProps = {
  activeKey?: string;
  theme?: "red" | "default";
};

export default function Navbar({ activeKey, theme = "default" }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useGSAP(() => {
    if (theme === "red") {
      gsap.to("#navbar-inner", {
        marginTop: "16px",
        borderRadius: "50px",
        backgroundColor: "rgb(157,5,52,0.85)",
        boxShadow: "0 0 20px rgba(0,0,0,0.25)",
        duration: 0.25,
        scrollTrigger: {
          trigger: "body",
          start: "75px 0", //trigger, viewport
          // markers: true,
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
          toggleClass: {
            className: "backdrop-blur-lg",
            targets: "#navbar-inner",
          },
        },
      });
    } else {
      gsap.to("#navbar", {
        backgroundColor: "rgba(255,255,255,0.85)",
        boxShadow: "0 0 20px rgba(0,0,0,0.25)",
        duration: 0.25,
        scrollTrigger: {
          trigger: "body",
          start: "75px 0", //trigger, viewport
          // markers: true,
          toggleActions: "play none none reverse", //onEnter, onLeave, onEnterBack, and onLeaveBack
        },
      });
    }
  }, {});

  return (
    <header
      className={
        theme === "red"
          ? "theme-red fixed top-0 px-4 bg-black bg-opacity-0 inset-x-0 z-40"
          : "theme-default sticky top-0 bg-white bg-opacity-0 filter backdrop-blur-lg inset-x-0 z-40"
      }
      id="navbar"
    >
      <nav
        className={classNames(
          "md:container mx-auto flex items-center justify-between py-4 filter",
          theme === "red" ? "px-4 md:px-8" : "px-8"
        )}
        aria-label="Global"
        id="navbar-inner"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1 p-1">
            <span className="sr-only">Master Online</span>
            <img
              className="h-8 md:h-10 w-auto"
              src={
                theme === "red" ? MASTERONLINE_LOGO_WHITE : MASTERONLINE_LOGO
              }
              alt=""
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-my-2.5 inline-flex items-center justify-center rounded-md px-3 py-2 text-white bg-paprika-900 special-btn-effect-3"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12 px-8 justify-end">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={classNames(
                "text-lg font-semibold leading-6",
                activeKey === item.id
                  ? theme === "red"
                    ? "font-bold text-paprika-100"
                    : "text-paprika-900"
                  : theme === "red"
                    ? "text-white"
                    : "text-black"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:justify-end gap-4">
          <a
            className="px-6 py-2 bg-white border-2 border-paprika-900 text-lg font-semibold font-rubik rounded text-paprika-900 special-btn-effect-1"
            href="/login"
          >
            Login
          </a>
          <a
            className="px-6 py-2 bg-paprika-900 border-2 border-paprika-900 text-lg font-semibold font-rubik rounded text-white special-btn-effect-2"
            href="/register"
          >
            Daftar
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden z-50"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-paprika-900 px-8 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Master Online</span>
              <img
                className="h-8 w-auto"
                src={MASTERONLINE_LOGO_WHITE}
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-my-2.5 rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-paprika-900">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-white hover:bg-opacity-10",
                      activeKey === item.id ? "text-paprika-100" : ""
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-white hover:bg-opacity-10"
                >
                  Login
                </a>
                <a
                  href="/register"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-white hover:bg-opacity-10"
                >
                  Daftar
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
