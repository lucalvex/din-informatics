import { events } from '@/app/data/events';

interface EventPageProps {
  params: { id: string };
}

export default async function EventDetail({ params }: EventPageProps) {
  const { id } = await params;
  const event = events.find((e) => {
    return e.id === id;
  });

  if (!event) {
    return;
  }

  return (
    <div className="w-full h-full bg-linear-to-t from-[#00648C]/30 via-[#00648C]/20 to-transparent ">
      <div className="p-10 max-w-6xl mx-auto flex flex-col gap-6 ">
        <h2 className="text-4xl text-center font-semibold">
          Detalhes do evento
        </h2>

        <div className="p-6 flex w-full items-center gap-4">
          <hr className="flex-1 border-t border-primary" />
          <span className="w-1 h-1 rounded-full bg-primary"></span>
          <hr className="flex-1 border-t border-primary" />
        </div>

        <div className="flex flex-col justify-center md:flex-row w-full gap-10 items-start">
          <div className="w-full md:w-1/2 ">
            <img
              src={event.image}
              alt={event.title}
              className="w-full max-h-300 object-cover rounded-4xl"
            />
          </div>

          <div className="flex flex-col gap-5 w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-semibold">
              {event.title}
            </h2>
            <p className="text-base md:text-lg text-justify">
              {event.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
