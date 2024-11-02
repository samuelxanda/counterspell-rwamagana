import dynamic from "next/dynamic";

const Map = dynamic(() => import("./../Map"), { ssr:false });

export default function Locations() {
  return (
    <div className="relative px-6 py-24 text-center neuebit bg-darker retro">
      <p className="text-3xl uppercase">
        Can't make it to Tampa?
      </p>
      <p className="text-xl">
        There are 100+ other Counterspell locations worldwide!
      </p>

      <div className="flex justify-center text-center text-2xl space-y-2 my-20">
        <div className="border-4 border-dashed border-pink py-6 px-6 neuebit tracking-wider text-4xl max-w-5xl w-full">
          <Map full={false} />
        </div>
      </div>
    </div>
  );
}