import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import { Inter, Press_Start_2P, Roboto_Mono } from "next/font/google";
import Head from "./head";
import Countdown from "@/components/Countdown";
const space = Roboto_Mono({ subsets: ["latin"], weight: ['400', '700'] });
// const inter = Inter({ subsets: ["latin"] });
const press = Press_Start_2P({ subsets: ["latin"], weight: ['400'] });

export const metadata = {
  title: "Smoljames · Learn to Code",
  description: "I self-taught programming and landed a developer job FOR FREE, and you can too! Learn full stack development with trusted and beginner friendly learn to code courses.",
  icons: {
    icon: '/favicon2.png', // /public path
  },
};

export default function RootLayout({ children }) {
  const header = (
    <div className="flex flex-col">
      {/* <Countdown /> */}
      {/* <p className={"textGradient text-xs sm:text-sm text-center " }>Share your success story &rarr;</p> */}
      <header className="flex items-center gap-4 justify-between p-4 relative">
        {/* <div className="animatedBorder"><div></div></div> */}
        <Link href={'/'}>
          <h1 className={"specialShadow text-2xl sm:text-3xl " + press.className}>&#62;&#62; Smoljames</h1>
          {/* <h1 className={"textGradient halfShadow " + press.className}>&#62;&#62;Learn to code</h1> */}
        </Link>
        {/* <nav className="flex items-center gap-8">
        <Link className="relative after:absolute after:h-full after:w-full after:top-0 after:right-full after:bg-blue-100 after:duration-200 after:ease-in-out hover:after:translate-x-full group overflow-hidden" href={'/'}>
        <p className="z-[1] relative duration-200 group-hover:text-[#030615]">Blog </p>
        </Link>
        <Link className="relative after:absolute after:h-full after:w-full after:top-0 after:right-full after:bg-blue-100 after:duration-200 after:ease-in-out hover:after:translate-x-full group overflow-hidden" href={'/'}>
        <p className="z-[1] relative duration-200 group-hover:text-[#030615]">Notes </p>
        </Link>
        <Link className="relative after:absolute after:h-full after:w-full after:top-0 after:right-full after:bg-blue-100 after:duration-200 after:ease-in-out hover:after:translate-x-full group overflow-hidden" href={'/'}>
        <p className="z-[1] relative duration-200 group-hover:text-[#030615]">Roadmap  </p>
        </Link>
      </nav> */}
      </header>
    </div>
  );

  const footer = (
    <footer className="">

      <Link target='_blank' href='https://www.youtube.com/smoljames'>
        <img src='/favicon2.png' className="w-[30px]" alt='pfp' />
        <p className="specialShadow">Smoljames 2025</p>
        <i className="fa-regular fa-copyright pr-1"></i> 
      </Link>

    </footer>
  );

  return (
    <html lang="en">
      <Head />
      <body className={'bg-[#030615] text-blue-100 flex flex-col gap-4 sm:gap-6 md:gap-10 min-h-screen p-4 text-sm sm:text-base ' + space.className}>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
