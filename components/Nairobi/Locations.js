export default function Locations() {
  const cities = [
    "Kigali, Rwanda",
    "New York City, USA",
    "Pune, India",
    "Seoul, South Korea",
    "Giza, Egypt",
    "London, UK",
    "Burlington, USA",
    "Dubai, UAE",
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

      <div className="flex justify-center my-20 space-y-2 text-2xl text-center">
        <div className="px-6 py-6 text-4xl tracking-wider border-4 border-dashed border-pink neuebit">
          <p>Counterspell is organized by teenagers, for teenagers.</p>
        </div>
      </div>
    </div>
  );
}
