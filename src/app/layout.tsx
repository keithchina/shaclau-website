import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";
import Footer from "@/components/Footer";
import Script from "next/script";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Shaclau Enterprise Ltd",
  image: "https://www.shaclauenterpriseltd.co.ke/og-image.jpg",
  url: "https://www.shaclauenterpriseltd.co.ke",
  telephone: "+254759388987",
  email: "shaclaultd@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ambwere Plaza",
    addressLocality: "Kitale",
    addressRegion: "Trans-Nzoia County",
    addressCountry: "KE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 1.0149396439395928,
    longitude: 35.00065476779693,
  },
  areaServed: [
    "Trans-Nzoia County",
    "North Rift",
    "Western Kenya",
    "Kenya",
  ],
  sameAs: [
    "https://www.facebook.com/shaclaultd/",
    "https://instagram.com/shaclaultd",
    "https://x.com/shaclaultd",
    "https://www.tiktok.com/@shaclaultd",
  ],
  description:
    "Land surveying, GIS and spatial analytics, structural engineering, and land advisory services across Kenya.",
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shaclauenterpriseltd.co.ke"),
  title: "Shaclau Enterprise Ltd",
  description: "Land Surveying, GIS, and Structural Engineering across Kenya.",
  openGraph: {
    title: "Shaclau Enterprise Ltd",
    description: "Precision land surveying, structural engineering, and geospatial intelligence across Kenya.",
    url: "https://www.shaclauenterpriseltd.co.ke",
    siteName: "Shaclau Enterprise Ltd",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shaclau Enterprise Ltd — Precision Land Surveying, Structural Engineering & Geospatial Intelligence",
      },
    ],
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shaclau Enterprise Ltd",
    description: "Precision land surveying, structural engineering, and geospatial intelligence across Kenya.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
        <Script
          id="tYoSBnkCqPDQ-Kl0HTCBR"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                if(!window.chatbase||window.chatbase("getState")!=="initialized"){
                  window.chatbase=(...arguments)=>{
                    if(!window.chatbase.q){window.chatbase.q=[]}
                    window.chatbase.q.push(arguments)
                  };
                  window.chatbase=new Proxy(window.chatbase,{
                    get(target,prop){
                      if(prop==="q"){return target.q}
                      return(...args)=>target(prop,...args)
                    }
                  })
                }
                const onLoad=function(){
                  const script=document.createElement("script");
                  script.src="https://www.chatbase.co/embed.min.js";
                  script.id="tYoSBnkCqPDQ-Kl0HTCBR";
                  script.domain="www.chatbase.co";
                  document.body.appendChild(script)
                };
                if(document.readyState==="complete"){onLoad()}
                else{window.addEventListener("load",onLoad)}
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}