"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter, Barlow } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { Providers } from "./providers";

const font = Barlow({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/* <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head */}

      <head>
        <link rel="icon" href="public/favicon.jpg" />
      </head>

      <body className={`bg-[#FCFCFC] dark:bg-black ${font.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
