import Subscribe from "../Subscribe";

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
        Check out other Counterspell cities!
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

      <div className="flex justify-center my-20 space-y-2 text-2xl text-center">
        <div className="px-6 py-6 text-4xl tracking-wider border-4 border-dashed border-pink neuebit">
          <p>
            Counterspell Cambridge is organized by teenagers, for teenagers.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-3 uppercase">
        <a
          className="z-30 w-full max-w-6xl px-6 py-6 mt-6 text-2xl uppercase bg-pink hover:text-white motion-safe:hover:scale-105 motion-safe:transition-all"
          href="https://counterspell-signup.mattsoh.dev"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecorationLine: "none" }}
        >
          Sign up for Counterspell Cambridge
        </a>
      </div>
    </div>
  );
}
