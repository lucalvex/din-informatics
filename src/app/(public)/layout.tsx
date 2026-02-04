import Navbar from '../components/common/NavBar';

const navLinks = [
  { label: 'Solicitações', href: '/' },
  { label: 'Eventos', href: '/' },
  { label: 'Agendamentos', href: '/' },
  { label: 'FAQ', href: '/' },
];

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar navLinks={navLinks} />
      <main className="flex-1 min-h-screen flex items-center justify-center">{children}</main>
    </>
  );
}
