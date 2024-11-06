import { Tilt } from "react-next-tilt";

export default function Guilds() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center retro bg-darker">
      <div className="text-3xl uppercase leading-[4rem] mx-6">
        <p>Artista, Músico ou Programador?</p>
        <p>
          Escolha um dos três <span className="text-pink">grupos</span> quando você
          se cadastrar!
        </p>
      </div>

      <div className="flex flex-wrap justify-center w-full max-w-6xl gap-8 py-10 xl:justify-between">
        <Tilt className="rounded-lg" scale={1.1}>
          <div>
            <img
              src="/cards/artist.png"
              alt="Artist card"
              className="rounded-lg max-w-[340px]"
            />
          </div>
        </Tilt>
        <Tilt className="rounded-lg" scale={1.1}>
          <div>
            <img
              src="/cards/musician.png"
              alt="Musician card"
              className="rounded-lg max-w-[340px]"
            />
          </div>
        </Tilt>
        <Tilt className="rounded-lg" scale={1.1}>
          <div>
            <img
              src="/cards/hacker.png"
              alt="Hacker card"
              className="rounded-lg  max-w-[340px]"
            />
          </div>
        </Tilt>
      </div>

      <div className="flex justify-center leading-[3rem] tracking-wider mx-6">
        <div className="max-w-6xl px-6 py-6 mt-6 border-4 border-dashed border-pink">
          <p className="text-3xl neuebit">
            {/* TODO: Change `São Paulo` to the name of your city */}
            Você pode entrar em um grupo que você se identificar para brindes exclusivos e
            badges! Você também compete contra outros grupos de uma forma amigável
            em atividades/desafios em Counterspell São Paulo!
          </p>
        </div>
      </div>
    </div>
  );
}
