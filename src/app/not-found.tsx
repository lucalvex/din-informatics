import Navbar from './components/common/NavBar';
import Footer from './components/common/Footer';
import Image from 'next/image';

const navLinks = [
  { label: 'Registrar Usuário', href: '/register' },
  { label: 'Solicitações', href: '/solicitacoes' },
  { label: 'Eventos', href: '/eventos' },
  { label: 'Agendamentos', href: '/agendamento' },
  { label: 'FAQ', href: '/faq' },
  { label: 'LOGIN', href: '/login' },
];

export default function NotFoundPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Navbar navLinks={navLinks} />

      <div className="flex flex-1 flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 px-6 sm:px-10 lg:px-24">
        <Image
          src="/images/not-found-rigth.png"
          alt="Not Found Right"
          width={245}
          height={296}
          className="hidden lg:block w-40 xl:w-48 object-contain"
          priority
        />

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold border-b-2 pb-3 text-center">
          Página em desenvolvimento :(
        </h1>

        <Image
          src="/images/not-found-left.png"
          alt="Not Found Left"
          width={245}
          height={296}
          className="hidden lg:block w-40 xl:w-48 object-contain"
          priority
        />
      </div>

      <Footer />
    </div>
  );
}
