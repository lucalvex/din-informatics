import Footer from '../components/common/Footer';
import Navbar from '../components/common/NavBar';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex flex-col min-h-screen text-foreground"
      style={{ backgroundImage: "url('/images/background-uem.png')" }}
    >
      <Navbar />
      <main className="flex-1 flex items-center justify-center bg-cover bg-center">
        {children}
      </main>

      <Footer />
    </div>
  );
}
