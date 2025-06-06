import type { Metadata } from 'next';
import { Montserrat, Geist_Mono } from 'next/font/google';
import styles from './layout.module.css';
import './globals.css';

const montserrat = Montserrat({
  variable: '--font-Montserrat',
  subsets: ['latin', 'latin-ext'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Maxim Grishaev',
  description:
    "Hello! I'm Maxim Grishaev. An engineer with years of experience in web, full-stack, frontend, and mobile development. Most recently, I served as a Staff Software Engineer at DAZN, where I led a platform transformation that significantly improved team velocity, developer satisfaction, and user retention.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="apple-touch-icon" sizes="180x180" href="/static/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/static/favicon/site.webmanifest" />
      </head>
      <body className={`${montserrat.variable} ${geistMono.variable} ${styles.rainbow}`}>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
