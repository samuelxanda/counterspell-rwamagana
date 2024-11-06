export default function About() {
  return (
    <div className="flex justify-center neuebit text-3xl py-24">
      <div className="space-y-12 max-w-8xl">
        <h2 className="pb-6 text-4xl text-center uppercase retro text-whitepurp">
          Faça jogos, <span className="text-pink">conheça pessoas legais</span>
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 grid-rows-2 gap-12 leading-[3rem] tracking-wider mx-6 2xl:mx-0">
          <div className="row-span-2 p-8 space-y-12 border-4 border-dashed border-pink md:p-12">
            <p>
              {/* TODO: Change `São Paulo` to the name of your city */}
              Counterspell São Paulo é uma game jam amigável para iniciantes para 
              estudantes de ensino médio acontecendo em São Paulo
              <span className="text-pink">
                artistas, músicos e programadores
              </span>{" "}
              juntos para construir apps e jogos.
            </p>
            <p className="text-2xl uppercase retro">Construa o que você quiser!</p>
            <p>
              {/* TODO: Change `São Paulo` to the name of your city */}
              Qualquer jogo counta! O tema para Counterspell São Pauloserá
              decidido por votação antes do evento começar.{" "}
            </p>
            <p>
              {/* TODO: Change `24 hours` to match your event duration */}
              Seja você um iniciante ou experiente em programação- nós vamos
              ter workshops, recursos e mentores através das 12 houras para
              ajudar você com seu projeto.
            </p>
          </div>
          <div
            className="h-64 bg-center bg-cover border-4 border-dashed border-pink bg-clip-padding xl:h-auto"
            style={{ backgroundImage: `url(/photos/1.png)` }}
          ></div>
          <div
            className="hidden bg-center bg-cover border-4 border-dashed xl:block border-pink bg-clip-padding"
            style={{ backgroundImage: `url(/photos/2.png)` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
