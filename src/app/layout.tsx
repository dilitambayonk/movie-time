import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import { CONFIGS } from '@/lib/configs';
import Footer from '@/components/layout/Footer';
import './globals.css';
import Navbar from '@/components/layout/Navbar';

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
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
