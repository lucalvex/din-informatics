export type Agendamento = {
  date?: Date;
  horario?: string;
};

export type CalendarProps = {
  value?: Agendamento;
  onChange: (agendamento: Agendamento) => void;
};
