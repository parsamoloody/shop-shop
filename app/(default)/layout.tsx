import "@/globalCss"
import { Metadata } from "next";
export const metadata: Metadata = {
  title: 'Sho Shop',
  description: 'find your dram',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>{children}</>
  );
}
