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
  metadataBase: new URL("https://www.realcenterconcordia.com.br"),
  title: {
    default: "Real Center | Materiais de Construção e Acabamentos em Concórdia SC",
    template: "%s | Real Center",
  },
  description:
    "Real Center em Concórdia SC: materiais de construção, pisos, porcelanatos, telhas e acabamentos para sua obra. Atendimento especializado e marcas de qualidade.",
 keywords: [
  "Materiais de Construção em Concórdia",
  "Loja de Acabamentos em Concórdia",
  "Porcelanatos em Concórdia",
  "Pisos Cerâmicos em Concórdia",
  "Revestimentos em Concórdia",
  "Torneiras e Metais em Concórdia",
  "Telhas em Concórdia",
  "Material para Reforma",
  "Material para Construção",
  "Acabamentos Premium",
  "Loja de Materiais de Construção",
  "Materiais para Reforma Residencial",
  "Materiais para Construção Civil",
  "Pisos em Concórdia",
  "Pisos Laminados em Concórdia",
  "Pisos Vinílicos em Concórdia",
  "Revestimentos Cerâmicos",
  "Porcelanato Polido",
  "Porcelanato Acetinado",
  "Cubas para Banheiro",
  "Vasos Sanitários",
  "Louças para Banheiro",
  "Chuveiros e Duchas",
  "Acessórios para Banheiro",
  "Ferragens para Construção",
  "Tubos e Conexões",
  "Materiais Hidráulicos",
  "Materiais Elétricos",
  "Tintas e Complementos",
  "Argamassa",
  "Rejunte",
  "Cimento",
  "Areia e Brita",
  "Blocos e Tijolos",
  "Ferramentas para Construção",
  "Loja de Pisos e Acabamentos",
  "Construção e Reforma",
  "Construção Residencial",
  "Acabamentos para Casa",
  "Real Center Materiais de Construção",
  "Real Center Concórdia",
  "Materiais de Construção Santa Catarina",
  "Acabamentos Santa Catarina"
],
  authors: [{ name: "Real Center" }],
  alternates: { canonical: "https://www.realcenterconcordia.com.br/"},
  manifest: "/site.webmanifest",
   creator: "Real Center",
   publisher: "Real Center Materiais de Construção",
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Real Center",
    title: "Real Center | Materiais de Construção e Acabamentos em Concórdia SC",
    description:
      "Tudo para a sua obra com as melhores marcas, atendimento especializado e credibilidade. Conheça a Real Center.",
    url: "/",
    images: [
      {
        url: "/assets/img/og-image.png",
        width: 1200,
        height: 630,
        alt: "Real Center Materiais de Construção e Acabamentos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Real Center | Materiais de Construção e Acabamentos em Concórdia SC",
    description:
      "Tudo para a sua obra com as melhores marcas e atendimento especializado.",
    images: ["/assets/img/og-image.png"],
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
  "@type": "HomeAndConstructionBusiness",
  name: "Real Center Materiais de Construção e Acabamentos",
  image: "https://www.realcenterconcordia.com.br/assets/img/og-image.png",
   logo: "https://www.realcenterconcordia.com.br/assets/img/logo.png",
  "@id": "https://www.realcenterconcordia.com.br/#localbusiness",
  url: "https://www.realcenterconcordia.com.br/",
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
  latitude: "-27.226614",
  longitude: "-52.018315"
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
    "https://www.instagram.com/realcenterconcordia/",
    "https://www.facebook.com/RealCenterConcordia",
  ],
   areaServed: [
  {
    "@type": "City",
    name: "Concórdia",
  },
  {
    "@type": "AdministrativeArea",
    name: "Santa Catarina",
  },
],
   contactPoint: {
  "@type": "ContactPoint",
  telephone: "+55-49-3444-9110",
  contactType: "customer service",
  availableLanguage: "Portuguese",
},
   hasOfferCatalog: {
  "@type": "OfferCatalog",
  name: "Produtos",
  itemListElement: [
    {
      "@type": "OfferCatalog",
      name: "Pisos e Porcelanatos",
    },
    {
      "@type": "OfferCatalog",
      name: "Materiais de Construção",
    },
    {
      "@type": "OfferCatalog",
      name: "Telhas",
    },
    {
      "@type": "OfferCatalog",
      name: "Louças e Metais",
    },
    {
      "@type": "OfferCatalog",
      name: "Tubos e Conexões",
    },
  ],
},
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${manrope.variable}`}>
      <body>
        <span id="topo" aria-hidden="true"></span>
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
