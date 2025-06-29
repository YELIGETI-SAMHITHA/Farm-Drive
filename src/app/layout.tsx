import type { Metadata } from "next"; 
import "../styles/globals.css";
import { AuthContextProvider } from "@/context/authContext";

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
        <AuthContextProvider>

        {children}
        </AuthContextProvider>
      </body>
    </html>
  );
}
