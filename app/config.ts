const BUSINESS_PARTNER_URLS = {
  production: 'https://bisnispartner.masteronline.co.id',
  development: 'https://devbisnis.masteronline.co.id',
  default: 'https://devbisnis.masteronline.co.id',
}

const IMAGE_BASEURLS = {
  production: '/landing-page',
  development: '/landing-page',
  default: '',
}

export const IMAGE_BASEURL = IMAGE_BASEURLS[process.env.NEXT_PUBLIC_STAGE as keyof typeof IMAGE_BASEURLS] || IMAGE_BASEURLS.default
export const BUSINESS_PARTNER_URL = BUSINESS_PARTNER_URLS[process.env.NEXT_PUBLIC_STAGE as keyof typeof BUSINESS_PARTNER_URLS] || BUSINESS_PARTNER_URLS.default
export const WHATSAPP_CS_URL = "//wa.me/6285692611349?text=Hi+kak%2C+saya+mau+tanya+mengenai+Master+Online%3F"