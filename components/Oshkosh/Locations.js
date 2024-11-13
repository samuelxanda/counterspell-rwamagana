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
    "Oshkosh, WI", // It doesn't make a lot of sense to include ourselves in this list, but we'll keep it for now.
  ];
  // Do not update this list! We'll update it for you.

  return (
    <div className="relative px-6 py-24 text-center neuebit bg-darker retro">
      <div className="flex justify-center mb-20 space-y-2 text-2xl text-center">
        <div className="p-6 text-4xl tracking-wider border-4 border-dashed border-pink neuebit">
          <p>Counterspell is organized by teenagers, for teenagers.</p>
          <p>
            Interested? {" "}
            <a
              href="https://forms.hackclub.com/t/sdMpoL7wK9us"
              target="_blank"
              rel="noreferrer"
              className="text-pink"
            >
              Sign up here
            </a>
            !
          </p>
        </div>
      </div>

      <p className="text-3xl uppercase">
        Can't make it to Oshkosh?
      </p>
      <p className="text-xl">
        There are 100+ other Counterspell locations worldwide!
      </p>
      <div className="flex justify-center pt-12">
        <div className="grid items-center justify-center w-full max-w-5xl grid-cols-1 gap-8 text-2xl lg:grid-cols-2">
          {cities.map((city, i) => (
            <p className="lg:odd:text-left lg:even:text-right" key={i}>
              {city}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
