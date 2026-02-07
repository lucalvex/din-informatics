import Footer from '../components/common/Footer';
import Navbar from '../components/common/NavBar';

const navLinks = [
  { label: 'Registrar Usuário', href: '/register' },
  { label: 'Solicitações', href: '/solicitacoes' },
  { label: 'Eventos', href: '/events' },
  { label: 'Agendamentos', href: '/agendamento' },
  { label: 'FAQ', href: '/faq' },
  { label: 'LOGIN', href: '/login' },
];

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar navLinks={navLinks} />
      <main className="flex flex-1 justify-center">{children}</main>
      <Footer />
    </div>
  );
}
