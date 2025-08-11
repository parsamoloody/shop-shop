import { Suspense } from "react";
import Header from "@/components//Header";
import "@/globalCss"
import Footer from "@/components/Footer";
import SpaceLine from "@/ui/spaceLine";

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
          <Header />
          <div className='border-b-[0.5px] border-border-slate-500 dark:border-gray-500'></div>
        </Suspense>
        {children}
        <SpaceLine/>
        <Footer/>
      </body>
    </html>
  );
}
