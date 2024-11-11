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

      <div className="flex flex-col items-center justify-center w-full max-w-2xl p-8 border-4 border-dashed border-pink inter">
        <a
          href="https://discord.gg/32BsffvEf4"
          className="w-full px-6 py-6 mb-4 text-2xl uppercase bg-pink hover:text-white motion-safe:hover:scale-105 motion-safe:transition-all"
        >
          Join Our Discord
        </a>
        <a
          href="https://forms.hackclub.com/t/sdMpoL7wK9us?city=recMFiFOMNNSwr6dI"
          className="w-full px-6 py-6 text-2xl uppercase bg-pink hover:text-white motion-safe:hover:scale-105 motion-safe:transition-all"
        >
          Sign Up Now!
        </a>
      </div>
    </div>
  );
}
