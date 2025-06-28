import type { Metadata } from "next"; 
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Farm drive",
  description: "devloped with love by nikhil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="opensans antialiased"
      >
        {children}
      </body>
    </html>
  );
}
