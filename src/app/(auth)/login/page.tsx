'use client';

import Form from '@/app/components/ui/Form';
import { EInputType } from '@/constants/input-type';

export default function LoginPage() {
  const fields = [
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
  ];

  function handleLogin(data: Record<string, string>) {
    console.log(data);
  }

  return (
    <div className="container-auth stack-lg">
      <h1 className="title-auth">LOGIN</h1>

      <div className="card">
        <Form fields={fields} submitLabel="Login" onSubmit={handleLogin} />
      </div>
    </div>
  );
}
