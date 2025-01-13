import type { Metadata } from "next";
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { AppProvider } from "./provider";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
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
  const queryClient = new QueryClient();

  // await queryClient.prefetchQuery(getUserQueryOptions());

  const dehydratedState = dehydrate(queryClient);

  const locale = await getLocale();

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`font-vinci-sans-light antialiased`}
      >
        <AppProvider>
          <HydrationBoundary state={dehydratedState}>
            <NextIntlClientProvider messages={messages}>
              <main className='flex min-h-screen flex-col'>
                <Navbar />
                <div className='flex-1'>
                  {children}
                </div>
                <Footer />
              </main>
            </NextIntlClientProvider>
          </HydrationBoundary>
        </AppProvider>
      </body>
    </html>
  );
}
