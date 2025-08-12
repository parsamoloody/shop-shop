import "../../globals.css"
export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className="dark:bg-background bg-foreground"
      >
        {children}
      </body>
    </html>
  );
}
