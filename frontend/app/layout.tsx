import { Menu, Footer } from './components';
import './global.css';

import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Welcome to frontend',
  description: 'Generated by create-nx-workspace',
};

type Props = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-full`}>
        <div className="container m-auto">
          <Menu />
          <div className="h-full p-4">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
