// app/layout.tsx
import type { Metadata } from "next";
import "../../styles/globals.css";
import { AuthContextProvider } from "@/context/authContext";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
// Make sure this import is clean and doesn't conflict
// I've kept 'routing' and explicitly imported 'LocaleType' for clarity
import { routing, locale as LocaleType } from "@/i18n/routing"; 
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Farm Drive",
  description: "Developed with love by Nikhil",
};

// Define a type for your layout component's props
// This type is crucial and must match what Next.js expects for layout params
type RootLayoutProps = {
  children: React.ReactNode;
  params: {
    locale: string; // The locale dynamic segment will be a string
  };
};

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { locale } = params; // Destructure locale directly

  // Ensure the type assertion is correct and refers to your i18n locale type
  if (!routing.locales.includes(locale as LocaleType)) {
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