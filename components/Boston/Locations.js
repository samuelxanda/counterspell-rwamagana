import Subscribe from "../Subscribe";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./../Map"), { ssr:false });

export default function Locations({ registrationRef }) {
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
        Can't make it to Boston?
      </p>
      <p className="text-xl">
        There are 100+ other Counterspell locations worldwide!
      </p>

      <div className="flex justify-center text-center text-2xl space-y-2 my-20">
        <div className="border-4 border-dashed border-pink py-6 px-6 neuebit tracking-wider text-4xl max-w-5xl w-full">
          <Map />
        </div>
      </div>

      <div className="flex justify-center my-20 space-y-2 text-2xl text-center">
        <div className="px-6 py-6 text-4xl tracking-wider border-4 border-dashed border-pink neuebit">
          <p>
            {/* TODO: Replace `Example City` with your city */}
            Counterspell Boston is organized by teenagers, for teenagers.
          </p>
          <p>
            Organize a Counterspell event in your city.{" "}
            <a
              href="https://hack.club/counterspell-signup"
              target="_blank"
              rel="noreferrer"
              className="text-pink"
            >
              Sign up
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
