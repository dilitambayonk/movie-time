import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { CONFIGS } from '@/lib/configs';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import Providers from '@/lib/providers/Providers';
import './globals.css';

const montserratSans = Montserrat({
  variable: '--font-montserrat-sans',
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: CONFIGS.site.name,
  description: 'Moovie Time is a movie database website.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserratSans.variable} antialiased`} suppressHydrationWarning>
        <main className="flex min-h-screen flex-col">
          <Providers className="flex-1">
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </main>
      </body>
    </html>
  );
}
