'use client';

import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format, isSameDay, parse } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Pencil } from 'lucide-react';
import { CalendarProps } from '@/types/calendar';
import 'react-day-picker/dist/style.css';

export default function Calendar({ value, onChange }: CalendarProps) {
  const [selected, setSelected] = useState<Date | undefined>(value?.date);
  const [selectedTime, setSelectedTime] = useState<string | null>(
    value?.horario ?? null,
  );
  const today = new Date();

  const validDays = [
    {
      date: parse('10/02/2026', 'dd/MM/yyyy', new Date()),
      horarios: ['08:00', '09:30', '14:00'],
    },
    {
      date: parse('15/02/2026', 'dd/MM/yyyy', new Date()),
      horarios: ['10:00', '13:00', '16:30'],
    },
    {
      date: parse('01/02/2026', 'dd/MM/yyyy', new Date()),
      horarios: ['07:30', '11:00'],
    },
  ];

  function getHorarios(day: Date | undefined) {
    if (!day) return [];

    const found = validDays.find((item) => isSameDay(item.date, day));

    return found?.horarios ?? [];
  }

  const isValidDay = (date: Date) =>
    validDays.some((item) => isSameDay(item.date, date));

  const capitalize = (text: string) =>
    text.charAt(0).toUpperCase() + text.slice(1);

  return (
    <div className="bg-[#CAC4D0] rounded-2xl shadow-xl w-full overflow-hidden">
      <div className="flex flex-col p-6 gap-6 border-b border-[#97919c]">
        <p className="text-[#49454F] text-sm">Selecione uma data</p>

        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-medium text-[#1C1B1F]">
            {capitalize(format(today, 'EEE, MMM d', { locale: ptBR }))}
          </h1>

          <button className="cursor-pointer">
            <Pencil size={20} />
          </button>
        </div>
      </div>

      <div className="p-6">
        <DayPicker
          mode="single"
          selected={selected}
          onSelect={(day) => {
            if (!day) {
              setSelected(undefined);
              setSelectedTime(null);
              return;
            }

            if (isValidDay(day)) {
              setSelected(day);
              setSelectedTime(null);
            }
          }}
          locale={ptBR}
          modifiers={{
            valido: isValidDay,
          }}
          modifiersClassNames={{
            valido:
              '[&>button]:border [&>button]:border-[#00648c] [&>button]:text-[#00648c] [&>button]:bg-transparent [&>button]:hover:bg-[#00648c] [&>button]:hover:text-white [&>button]:cursor-pointer',
            selected: '[&>button]:text-white [&>button]:!bg-[#00648c]',
            today: 'text-inherit',
          }}
          onMonthChange={() => {
            setSelected(undefined);
            setSelectedTime(null);
          }}
          disabled={(date) => !isValidDay(date)}
          style={
            {
              '--rdp-accent-color': '#00648c',
            } as React.CSSProperties
          }
          classNames={{
            months: 'w-full',
            month_grid: 'w-full',
            day_button:
              'w-10 h-10 rounded-full flex items-center justify-center',
          }}
        />

        {selected && (
          <div className="flex gap-2 items-center mt-5">
            <div className="bg-[#B2A3C0] shadow-lg rounded-xl p-4 w-full">
              <p className="font-medium mb-3">Horários disponíveis</p>

              {getHorarios(selected).map((hora) => (
                <label key={hora} className="flex items-center gap-2 mb-2">
                  <input
                    type="radio"
                    name="opcao"
                    value={hora}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-5 h-5 appearance-none rounded-full border-2 border-black checked:bg-[#00648c] checked:border-[#00648c] cursor-pointer"
                  />
                  {hora}
                </label>
              ))}
            </div>

            <p className="text-justify">
              {' '}
              Só é permitido selecionar apenas um horário por solicitação
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-between p-6 text-primary">
        <button
          type="button"
          onClick={() => {
            setSelected(undefined);
            setSelectedTime(null);
          }}
          className="cursor-pointer"
        >
          Limpar
        </button>
        <div className="flex gap-6">
          <button
            type="button"
            disabled={!selected || !selectedTime}
            onClick={() => {
              if (!selected || !selectedTime) return;

              onChange({
                date: selected,
                horario: selectedTime,
              });
            }}
            className="cursor-pointer disabled:opacity-50 disabled:cursor-auto"
          >
            Agendar
          </button>
        </div>
      </div>
    </div>
  );
}
