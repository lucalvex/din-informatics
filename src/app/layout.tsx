import type { Metadata } from 'next';
import { Geist, Geist_Mono, Lexend } from 'next/font/google';
import './globals.css';
import NavBar from './components/common/NavBar';
import Footer from './components/common/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const lexend = Lexend({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-lexend',
});

export const metadata: Metadata = {
  title: 'DINInformatics',
  description: 'Gerenciamente Administrativo do Departamento de Informática',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={lexend.variable}>
      <body>{children}</body>
    </html>
  );
}
