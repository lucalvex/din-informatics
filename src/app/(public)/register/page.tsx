'use client';

import Form from '@/app/components/ui/Form';
import { EInputType } from '@/constants/input-type';
import { User } from 'lucide-react';

export default function RegisterPage() {
  const fields = [
    {
      name: 'name',
      label: 'Nome',
      type: EInputType.TEXT,
      placeholder: 'Nome',
      required: true,
    },
    {
      name: 'email',
      label: 'E-mail',
      type: EInputType.EMAIL,
      placeholder: 'raXXXXXX@uem.br',
      required: true,
    },
    {
      name: 'password',
      label: 'Senha',
      type: EInputType.PASSWORD,
      placeholder: '........',
      required: true,
    },
    {
      name: 'course',
      label: 'Curso',
      type: EInputType.TEXT,
      placeholder: '........',
      required: true,
    },
    {
      name: 'academic-record',
      label: 'Registro Acadêmico',
      type: EInputType.NUMBER,
      placeholder: 'XXXXXX',
      required: true,
    },
  ];

  function handleLogin(data: Record<string, string>) {
    console.log(data);
  }

  return (
    <div
      className="flex flex-col items-center w-full min-h-screen stack-lg bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background-uem.png')" }}
    >
      <div className="flex gap-1 mt-12 items-center">
        <h1 className="title-auth">CADASTRO</h1>
        <User className="text-on-primary w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
      </div>

      <div className="card w-full max-w-sm md:max-w-lg mb-12 p-12 ">
        <Form fields={fields} submitLabel="Cadastrar" onSubmit={handleLogin} />
      </div>
    </div>
  );
}
