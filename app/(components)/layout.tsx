import Header from './Header/Header';
import Footer from './Footer/Footer';
import UserProfile from './UserProfile/UserProfile';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
          <Header />
          <div style={{ border: '2px solid black' }}>{ children }</div>
          <Footer />
    </div>
  );
};