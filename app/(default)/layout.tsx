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
        className="dark:bg-background "
      >
        <Suspense fallback={<h2>Loading...</h2>}>
          <Header />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
