/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next'
import { Hanken_Grotesk, Rubik } from 'next/font/google'
import Head from 'next/head'
import Script from 'next/script'
import './globals.scss'

const rubik = Rubik({ subsets: ['latin'], variable: '--font-rubik' })
const hankenGrotesk = Hanken_Grotesk({ subsets: ['latin'], variable: '--font-hanken-grotesk' })


export const metadata: Metadata = {
  title: 'Master Online - Solusi Bisnis Online',
  description: 'Kontrol Bisnis Anda di Berbagai Marketplace Dari 1 Platform. Jualan Online Lebih Mudah. Kelola Pesanan, Stok, dan Pengiriman Barang dari Master Online. Dilengkapi dengan Fitur Akuntansi Lengkap.',
  applicationName: 'Master Online',
  keywords: 'master online, jualan online, ecommerce, commerce, online shop, integrasi marketplace, inventory, bisnis, erp, akunting, accounting, akuntansi, omnichannel, multichannel',
  authors: [
    { name: "PT Erasoft Teknologi Indonesia", url: 'https://erasoft.co.id/' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </Head>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-778375246" />
      <Script id="google analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-778375246');
        `}
      </Script>
      {/* Event snippet for Sign-up conversion page In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. */}
      <Script id="snippet">
        {`
          function gtag_report_conversion(url) { var callback = function () { if (typeof (url) != 'undefined') { window.location = url; } }; gtag('event', 'conversion', { 'send_to': 'AW-778375246/mXAzCP3X5pQBEM6glPMC', 'value': 30.0, 'currency': 'USD', 'event_callback': callback }); return false; }
        `}
      </Script>
      {/* Facebook Pixel Code */}
      <Script id="snippet">
        {`
          !function (f, b, e, v, n, t, s) {
              if (f.fbq) return; n = f.fbq = function () {
                  n.callMethod ?
                      n.callMethod.apply(n, arguments) : n.queue.push(arguments)
              };
              if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = '2.0';
              n.queue = []; t = b.createElement(e); t.async = !0;
              t.src = v; s = b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t, s)
          }(window, document, 'script',
              'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '294358668412896');
          fbq('track', 'PageView');
        `}
      </Script>
      <Head>
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }} alt=""
            src="https://www.facebook.com/tr?id=294358668412896&ev=PageView&noscript=1" />
        </noscript>
      </Head>
      <body className={`${hankenGrotesk.className} ${hankenGrotesk.variable} ${rubik.variable}`}>{children}</body>
    </html>
  )
}
