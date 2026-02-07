import Image from 'next/image';
import { Accordion } from '../components/ui/Accordion';

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col gap-5">
      <section className="flex flex-col lg:flex-row justify-center items-center mt-5 bg-background-gray gap-10 lg:gap-32 p-6 sm:px-10">
        <div className="flex flex-col gap-2 w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold">
            Seja bem-vindos ao DINInfortics
          </h1>
          <p className="lg:text-end">
            Central acadêmica do DIN - UEM para suas solicitações, eventos e
            matrículas
          </p>
        </div>

        <Image
          src="/images/robo-main.png"
          alt="Robo Principal"
          width={245}
          height={296}
          className="w-32 sm:w-40 lg:w-48 object-contain"
          priority
        />
      </section>

      <section className="flex flex-col items-center min-h-screen p-6 sm:px-10 lg:flex-row lg:gap-32 bg-linear-to-b from-[#00648C]/20 via-[#00648C]/10 to-transparent">
        <div className="flex flex-col items-center my-10 gap-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center">
            Fique por dentro dos próximos
            <span className="text-blue-ligth"> eventos </span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-3 place-items-center gap-0.5 sm:gap-0.5 w-full px-4">
            <div className="relative w-36 h-48 sm:w-44 sm:h-56 lg:w-52 lg:h-64">
              <Image
                src="/images/event-1.png"
                alt="Evento GIT"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="relative w-36 h-48 sm:w-44 sm:h-56 lg:w-52 lg:h-64">
              <Image
                src="/images/event-2.png"
                alt="Evento DADOS"
                fill
                className="object-contain"
                priority
              />
            </div>

            <div className="relative w-36 h-48 sm:w-44 sm:h-56 lg:w-52 lg:h-64">
              <Image
                src="/images/event-3.png"
                alt="Evento WEB"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <button className="bg-primary text-on-primary font-medium rounded-2xl px-2 py-4 w-1/2 mt-10 ">
            Ver todos os eventos
          </button>

          <div
            className="
              flex flex-col items-center mt-10 gap-10
              border-2 border-primary rounded-2xl
              w-full
              px-10 
              py-8
              max-w-md sm:max-w-1/2
              mx-auto
            "
          >
            <h1 className="text-4xl font-medium"> Perguntas Frequentes </h1>

            <Accordion title="Como posso fazer uma solicitação?">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores ullam qui aut eius earum. Pariatur perspiciatis unde
                veritatis atque, quidem aspernatur nostrum consectetur saepe,
                magni laudantium, fuga aliquam dolorem molestiae!
              </p>
            </Accordion>

            <Accordion title="Quais são atividades passivéis de AACs?">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deleniti ipsa quia eos praesentium reiciendis qui pariatur
                nesciunt hic, et totam reprehenderit nisi assumenda nemo optio
                corrupti. Quia corrupti dolores vel!
              </p>
            </Accordion>

            <Accordion title="Como posso agendar um horários com o coordernador?">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                animi reprehenderit, nobis deleniti dignissimos sapiente
                explicabo laborum numquam aspernatur ut magnam, laudantium
                doloremque consectetur perferendis obcaecati similique quisquam
                adipisci vero?
              </p>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
