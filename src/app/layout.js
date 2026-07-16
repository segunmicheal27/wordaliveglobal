import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TopBar from '@/components/TopBar';

export const metadata = {
  title: 'Word Alive Global | Jos',
  description: 'Our vision is to reveal Jesus Christ; raising the banner of Jesus on every Sphere of Influence.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TopBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
