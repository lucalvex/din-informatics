import Navbar from '../components/common/NavBar';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main
        style={{ backgroundImage: "url('/images/background-uem.png')" }}
        className="flex-1 flex items-center justify-center bg-cover bg-center"
      >
        {children}
      </main>
    </>
  );
}
