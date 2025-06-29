// app/layout.tsx
import type { Metadata } from "next";
import "../../styles/globals.css";
import { AuthContextProvider } from "@/context/authContext";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { routing, locale } from "@/i18n/routing";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Farm Drive",
  description: "Developed with love by Nikhil",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
const locale = (await params).locale;
  if (!routing.locales.includes(locale as locale)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="opensans antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AuthContextProvider>{children}</AuthContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
