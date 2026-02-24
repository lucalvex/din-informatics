'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

import Calendar from '@/app/components/ui/Calendar';
import { Agendamento } from '@/types/calendar';

export default function SchedulingsPage() {
  const [motivo, setMotivo] = useState('');
  const [agendamento, setAgendamento] = useState<Agendamento>({
    date: undefined,
    horario: undefined,
  });
  const [sucesso, setSucesso] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!agendamento.date || !agendamento.horario) return;

    formRef.current?.requestSubmit();
  }, [agendamento]);

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!agendamento?.date || !agendamento?.horario) {
      return;
    }

    const payload = {
      motivo,
      date: agendamento.date,
      horario: agendamento.horario,
    };

    console.log('Enviando:', payload);

    setSucesso(true);

    setTimeout(() => {
      setSucesso(false);
      router.push('/');
    }, 2000);
  };

  return (
    <div className="w-full flex justify-center lt-">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="w-full h-full flex items-center max-w-5xl py-10 gap-10"
      >
        <div className="flex flex-col justify-center w-full gap-3 h-full">
          <h2 className="text-[#423D3D] text-3xl">
            Explique o motivo da reunião
          </h2>
          <textarea
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
            placeholder="Digite algo..."
            className="
              flex-1
              border
              rounded-lg
              px-4
              py-2
              focus:outline-none
              focus:ring-2
              focus:ring-blue-500
              max-h-1/2
              resize-none
            "
          />
        </div>

        <Calendar
          value={agendamento}
          onChange={(dados) => {
            setAgendamento(dados);
          }}
        />
      </form>

      {sucesso && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white px-10 py-6 rounded-xl shadow-2xl flex items-center gap-4 animate-scaleIn">
            <div className="text-green-600 text-2xl">✔</div>
            <p className="text-lg font-semibold">Agendado com sucesso!</p>
          </div>
        </div>
      )}
    </div>
  );
}
