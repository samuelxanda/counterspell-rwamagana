import { Tilt } from "react-next-tilt";

export default function Guilds() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center retro bg-darker">
      <div className="text-3xl uppercase leading-[4rem] mx-6">
        <p>
          <span className="text-pink">Sign Up</span> and join our Discord
          server!
        </p>
      </div>

      <span style={{ marginTop: "2rem" }}></span>

      <div className="flex flex-wrap items-center justify-center gap-8 p-8 border-4 border-dashed border-pink inter">
        <div className="flex flex-wrap justify-center w-full max-w-6xl gap-8 py-10 xl:justify-between">
          <div
            className="flex flex-col justify-center w-full max-w-6xl gap-8 py-10 xl:justify-between"
            style={{
              alignSelf: "center",
            }}
          >
            {/* Join Discord Link */}
            <a
              href="https://discord.gg/32BsffvEf4"
              className="z-30 w-full max-w-6xl px-6 py-6 mt-6 text-2xl uppercase bg-pink hover:text-white motion-safe:hover:scale-105 motion-safe:transition-all"
              style={{
                alignSelf: "center",
              }}
            >
              Join Our Discord
            </a>
            <a
              href="#signup"
              className="z-30 w-full max-w-6xl px-6 py-6 mt-6 text-2xl uppercase bg-pink hover:text-white motion-safe:hover:scale-105 motion-safe:transition-all"
              style={{
                alignSelf: "center",
              }}
            >
              Sign Up Now!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
