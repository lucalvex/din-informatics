'use client';

import Form from '@/app/components/ui/Form';
import { EInputType } from '@/constants/input-type';
import { User } from 'lucide-react';

export default function ForgotPasswordPage() {
  const fields = [
    {
      name: 'email',
      label:
        'Insira seu e-mail institucional e sega as instruções enviadas para redefini-la',
      type: EInputType.EMAIL,
      placeholder: 'raXXXXXX@uem.br',
      required: true,
    },
  ];

  function handleLogin(data: Record<string, string>) {
    console.log(data);
  }

  return (
    <div className="container-auth stack-lg">
      <div className="flex items-center justify-center gap-1">
        <h1 className="title-auth">LOGIN</h1>
        <User className="text-on-primary w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      </div>

      <div className="card">
        <Form fields={fields} submitLabel="Confirmar" onSubmit={handleLogin} />
      </div>
    </div>
  );
}
