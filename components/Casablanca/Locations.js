import Subscribe from "../Subscribe";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../Map"), { ssr:false });

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
        {/* TODO: Replace `Example City` with your city */}
        Can't make it to Casablanca?
      </p>
      <p className="text-xl">
        There are 100+ other Counterspell locations worldwide!
      </p>
      <div className="flex justify-center pt-24">
        <div className="grid items-center justify-center w-full max-w-5xl grid-cols-1 gap-8 text-2xl lg:grid-cols-2">
          {cities.map((city, i) => (
            <p className="lg:odd:text-left lg:even:text-right" key={i}>
              {city}
            </p>
          ))}
        </div>
      </div>

      <div className="flex justify-center text-center text-2xl space-y-2 my-20">
        <div className="border-4 border-dashed border-pink py-6 px-6 neuebit tracking-wider text-4xl max-w-5xl w-full">
          <Map />
        </div>
      </div>

      <div className="flex justify-center my-20 space-y-2 text-2xl text-center">
        <div className="px-6 py-6 text-4xl tracking-wider border-4 border-dashed border-pink neuebit">
          <p>
            {/* TODO: Replace `Example City` with your city */}
            Counterspell Casablanca is organized by teenagers, for teenagers.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-3 uppercase">
        <div className="flex flex-col space-y-4 text-2xl retro sm:text-3xl lg:flex-row lg:space-y-0">
          <a href="https://counterspellcasablanca.fillout.com/t/7LZ3oYm3Efus" target="_blank">
            <button class="h-16 px-4 uppercase border-4 bg-pink sm:h-20 border-pink" id="formSubmit">Register interest</button>
          </a>
        </div>
      </div>
    </div>
  );
}
