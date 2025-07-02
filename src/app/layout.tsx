import type { Metadata } from 'next';
import { Poppins, Press_Start_2P } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  subsets: ['latin']
});

const pressStart2p = Press_Start_2P({
  weight: ["400"],
  variable: '--font-press-start',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Pharma-Quest',
  description: `PharmaQuest is a geography-based educational adventure game focused on medicines,
    diseases, and global health. Players explore an interactive world map, visit different
    countries, and solve location-specific medicine-related challenges to unlock new regions and
    earn XP.`
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/images/favicon/favicon.ico" sizes="any" />
        <link rel="icon" href="/assets/images/favicon/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/assets/images/favicon/apple-touch-icon.png" />
        <link rel="icon" href="/assets/images/favicon/icon.svg" type="image/svg+xml" />
      </head>
      <body className={`${poppins.variable} ${pressStart2p.variable} antialiased`}>{children}</body>
    </html>
  );
}
