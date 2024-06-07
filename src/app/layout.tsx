import type { Metadata } from "next";
import Head from 'next/head';
import Script from 'next/script';
import "../Styles/styles.css";
import Navbar from "./Components/Navbar/Navbar";
import FullscreenCover from "./Components/FullscreenCover/FullscreenCover";

// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vito Medlej | Lebanese Fullstack Typescript Dev Portfolio",
  description: "Full-stack Typescript Developer with 4+ years of experience in building complex web and mobile apps. Proficient in Next.js, Node.js, and MongoDB",
  icons: {
    icon: 'https://res.cloudinary.com/dwcu3wcol/image/upload/v1657099811/log_nkmcys.jpg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Vito Medlej | Fullstack Typescript Developer Portfolio</title>
        <meta name="description" content={"Full-stack Typescript Developer with 4+ years of experience in building complex web and mobile apps. Proficient in Next.js, Node.js, and MongoDB"} />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="icon" href="https://res.cloudinary.com/dwcu3wcol/image/upload/v1657099811/log_nkmcys.jpg"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"/>
      
<meta property='og:image' content='https://res.cloudinary.com/dwcu3wcol/image/upload/v1657099811/log_nkmcys.jpg'/>
      </head>
      <body className='relative no-scroll'>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-MTBZKLQVS6"></Script>
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', ${process.env.NEXT_PUBLIC_CONFIG});
          `}
        </Script>

        <FullscreenCover />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
