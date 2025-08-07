import Navbar from "../../components/Navbar";
import "../../globals.css"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <section className="">
          {/* <Navbar /> */}
          {children}
        </section>
      </body>
    </html>
  );
}
