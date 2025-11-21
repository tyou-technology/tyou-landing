import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import '../globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: 'T_YOU | Getting You Online',
    template: '%s | T_YOU',
  },
  description: 'We build modern, fast, and beautiful websites that help your business grow online. From landing pages to e-commerce — we get you online, beautifully.',
  openGraph: {
    title: 'T_YOU – Getting You Online',
    description: 'Modern web solutions for businesses. Fast. Beautiful. Effective.',
    url: 'https://tyou.com.br',
    siteName: 'T_YOU',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'T_YOU – Modern Web Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'T_YOU – Getting You Online',
    description: 'We build websites that convert. Fast, modern, and tailored to your brand.',
    images: ['/logo.png'],
    creator: '@tyoutecnologia',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  alternates: {
    canonical: 'https://tyou.com.br',
  },
  manifest: '/site.webmanifest',
  category: 'technology',
  classification: 'Web Development Agency',
  referrer: 'origin-when-cross-origin',
  creator: 'T_YOU Team',
  publisher: 'T_YOU',
  formatDetection: { telephone: true, email: true },
  applicationName: 'T_YOU',
  appleWebApp: {
    capable: true,
    title: 'T_YOU',
    statusBarStyle: 'black-translucent',
  },
  other: {
    'theme-color': '#00a5b4',
    'X-UA-Compatible': 'IE=edge',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
  },
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={`font-sans antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
