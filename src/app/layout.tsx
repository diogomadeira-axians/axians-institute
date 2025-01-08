import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import Navbar from "@/components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Axians Institute",
  description: "",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`font-vinci-sans-light antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          <main className='flex min-h-screen flex-col'>
            <Navbar />
            <div className='flex-1'>
              {children}
            </div>
            <div className='py-5'>
              <h1>footer</h1>
            </div>
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
