import { Suspense } from "react";
import Header from "../components/Header";
import "../globals.css"

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
      </body>
    </html>
  );
}
