import { Suspense } from "react";
import Header from "./components/Header";
import "@/globalCss"
import Footer from "./components/Footer";
import SpaceLine from "@/ui/spaceLine";
import { Metadata } from "next";
import { Providers } from "./_contexts/provider";

export const metadata: Metadata = {
  title: 'Sho Shop - firs word shop',
  description: 'find your dram',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="dark:bg-background w-full"
      >
        <Suspense fallback={<h2>Loading...</h2>}>
         <Providers>
           <Suspense fallback={<h2>Loading...</h2>}>
            <Header />
           </Suspense>
          <div className='border-b-[0.5px] border-border-slate-500 dark:border-gray-500'></div>
        {children}
        <SpaceLine/>
        <Footer/>
         </Providers>
        </Suspense>
      </body>
    </html>
  );
}
