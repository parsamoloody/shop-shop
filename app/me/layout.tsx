import Header from "@/components/Header";
import "@/globalCss"
import SpaceLine from "@/ui/spaceLine";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className="bg-gray-50 dark:bg-background"
      >
        <Header />
        <SpaceLine />
        {children}
      </body>
    </html>
  );
}
