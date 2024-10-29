import Subscribe from "./Subscribe";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), { ssr:false });

export default function Locations() {
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

  return (
    <div className="relative px-6 py-24 text-center neuebit bg-darker retro">
      <p className="text-3xl uppercase">It's happening all around you</p>
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
          <p>Counterspell is organized by teenagers, for teenagers.</p>
          <p>
            Don't see your city on the list? Sign up to{" "}
            <a
              href="https://hack.club/counterspell-signup"
              target="_blank"
              rel="noreferrer"
              className="text-pink"
            >
              organize here
            </a>
            .
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-3 uppercase">
        <p className="text-xl text-center">
          Get notified when registrations open
        </p>
        <Subscribe />
      </div>
    </div>
  );
}
