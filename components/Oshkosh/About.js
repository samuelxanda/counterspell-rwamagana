export default function About() {
  return (
    <div className="flex justify-center neuebit text-3xl py-24">
      <div className="space-y-12 max-w-8xl">
        <h2 className="pb-6 text-4xl text-center uppercase retro text-whitepurp">
          Make games, <span className="text-pink">meet cool people</span>
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 grid-rows-2 gap-12 tracking-wider mx-6 2xl:mx-0">
          <div className="row-span-2 p-8 space-y-12 border-4 border-dashed border-pink md:p-12">
            <p>
              Counterspell Oshkosh is a beginner-friendly game jam
              for high-school{" "}
              <span className="text-pink">
                artists, musicians, and coders
              </span>{" "}
              to get together to build apps and games.
              It will be hosted at the{" "}
              <a href="https://www.oshkoshlibrary.org/" className="text-pink">Oshkosh Public Library</a>.
            </p>
            <p className="text-2xl uppercase retro">Build whatever you want!</p>
            <p>
              Have fun building whatever you would like individually or in teams!
              The theme for Counterspell Oshkosh will be
              decided through peer voting before the event starts.{" "}
            </p>
            <p>
              No matter your skill level, we'll
              have workshops, resources and mentors throughout the 24 hours to
              help you with your project.
            </p>

            <p className="text-2xl retro">
              Interested?{" "}
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
          <div
            className="h-64 bg-center bg-cover border-4 border-dashed border-pink bg-clip-padding xl:h-auto"
            style={{ backgroundImage: `url(/photos/1.png)` }}
          ></div>
          <div
            className="hidden bg-center bg-cover border-4 border-dashed xl:block border-pink bg-clip-padding"
            style={{ backgroundImage: `url(/photos/2.png)` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
