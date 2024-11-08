import Subscribe from "../Subscribe";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./../Map"), { ssr:false });

export default function Locations() {
  // Do not update this list! We'll update it for you.
  const cities = [
    "Boston, MA",
    "New York City, NY",
    "Ottawa, ON",
    "Basking Ridge, NJ",
    "Austin, TX",
    "San Francisco, CA",
    "Burlington, VT",
    "Oshkosh, WI",
  ];
  // Do not update this list! We'll update it for you.

  return (
    <div className="relative px-6 py-24 text-center neuebit bg-darker retro">
      <p className="text-3xl uppercase">
        {/* TODO: Replace `São Paulo` with your city */}
        Não consegue chegar em São Paulo?
      </p>
      <p className="text-xl">
        Tem mais de 100 outros Counterspells pelo mundo!
      </p>
      <div className="flex justify-center text-center text-2xl space-y-2 my-20">
        <div className="border-4 border-dashed border-pink py-6 px-6 neuebit tracking-wider text-4xl max-w-5xl w-full">
          <Map />
        </div>
      </div>

      <div className="flex justify-center my-20 space-y-2 text-2xl text-center">
        <div className="px-6 py-6 text-4xl tracking-wider border-4 border-dashed border-pink neuebit">
          <p>
            {/* TODO: Replace `São Paulo` with your city */}
            Counterspell São Paulo é organizado por adolescentes, para adolescentes.
          </p>
          <p>
            Organize um evento Counterspell na sua cidade.{" "}
            <a
              href="https://hack.club/counterspell-signup"
              target="_blank"
              rel="noreferrer"
              className="text-pink"
            >
              Inscreva-se
            </a>
            .
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-3 uppercase">
        <p className="text-xl text-center">
          Seja notificado quando as inscrições abrirem
        </p>
        {/* TODO: Replace `São Paulo` with your city */}
        <Subscribe eventName="São Paulo" />
      </div>
    </div>
  );
}
