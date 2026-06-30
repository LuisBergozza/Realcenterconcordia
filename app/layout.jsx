import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import SiteScripts from "@/components/SiteScripts";

/* ----------------------------------------------------------------
   Fontes auto-hospedadas e otimizadas pelo Next (sem render-blocking)
   ---------------------------------------------------------------- */
const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-fraunces",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-manrope",
});

/* ----------------------------------------------------------------
   SEO — Metadata API (TROCAR domínio e textos finais)
   ---------------------------------------------------------------- */
export const metadata = {
  metadataBase: new URL("https://www.realcenter.com.br"),
  title: {
    default: "Real Center | Materiais de Construção e Acabamentos",
    template: "%s | Real Center",
  },
  description:
    "Real Center Materiais de Construção e Acabamentos. Tudo para a sua obra com as melhores marcas, atendimento especializado e a credibilidade de uma referência na região.",
  keywords: [
    "materiais de construção",
    "acabamentos",
    "porcelanato",
    "revestimentos",
    "loja de construção",
    "Real Center",
  ],
  authors: [{ name: "Real Center" }],
  alternates: { canonical: "/" },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2032%2032'%3E%3Crect%20width='32'%20height='32'%20rx='7'%20fill='%231d1b1a'/%3E%3Ctext%20x='50%25'%20y='53%25'%20dominant-baseline='middle'%20text-anchor='middle'%20font-family='Georgia,serif'%20font-size='17'%20fill='%23bf5a3e'%3ER%3C/text%3E%3C/svg%3E",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Real Center",
    title: "Real Center | Materiais de Construção e Acabamentos",
    description:
      "Tudo para a sua obra com as melhores marcas, atendimento especializado e credibilidade. Conheça a Real Center.",
    url: "/",
    images: [
      {
        url: "/assets/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Real Center Materiais de Construção e Acabamentos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Center | Materiais de Construção e Acabamentos",
    description:
      "Tudo para a sua obra com as melhores marcas e atendimento especializado.",
    images: ["/assets/img/og-image.jpg"],
  },
};

export const viewport = {
  themeColor: "#1d1b1a",
  width: "device-width",
  initialScale: 1,
};

/* Schema Markup — LocalBusiness (TROCAR dados reais) */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HardwareStore",
  name: "Real Center Materiais de Construção e Acabamentos",
  image: "https://www.realcenter.com.br/assets/img/og-image.jpg",
  "@id": "https://www.realcenter.com.br/#business",
  url: "https://www.realcenter.com.br/",
  telephone: "+55-49-3444-9110",
  priceRange: "$$",
  foundingDate: "2007",
  taxID: "03.451.272/0001-04",
  description:
    "Loja de materiais de construção e acabamentos em Concórdia/SC, com atendimento especializado desde 2007.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Dr. Maruri, 1563 - Térreo, Centro",
    addressLocality: "Concórdia",
    addressRegion: "SC",
    postalCode: "89700-158",
    addressCountry: "BR",
  },
  geo: {
    // TROCAR: coordenadas aproximadas de Concórdia/SC — ajustar ao ponto exato
    "@type": "GeoCoordinates",
    latitude: "-27.233600",
    longitude: "-52.027800",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "07:00",
      closes: "12:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/realcenter",
    "https://www.facebook.com/realcenter",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        {children}
        <SiteScripts />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
