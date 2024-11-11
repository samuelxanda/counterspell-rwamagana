import { Tilt } from "react-next-tilt";
import { useState, useEffect } from "react";

export default function Guilds() {
  const [isMobileUser, setIsMobileUser] = useState(false);
  useEffect(() => {
    setIsMobileUser(("ontouchstart" in window) || (navigator.maxTouchPoints > 0));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-24 text-center retro bg-darker">
      <div className="text-3xl uppercase leading-[4rem] mx-6">
        <p>Artist, Musician or Coder?</p>
        <p>
          Join one of three <span className="text-pink">guilds</span> when you
          sign up!
        </p>
      </div>
      {!isMobileUser &&
        <div className="flex flex-wrap justify-center w-full max-w-6xl gap-8 py-10 xl:justify-between">
          <Tilt className="rounded-lg" scale={1.1}>
            <div>
              <img
                src="/cards/artist.png"
                alt="Artist card"
                className="rounded-lg max-w-[340px]"
              />
            </div>
          </Tilt>
          <Tilt className="rounded-lg" scale={1.1}>
            <div>
              <img
                src="/cards/musician.png"
                alt="Musician card"
                className="rounded-lg max-w-[340px]"
              />
            </div>
          </Tilt>
          <Tilt className="rounded-lg" scale={1.1}>
            <div>
              <img
                src="/cards/hacker.png"
                alt="Hacker card"
                className="rounded-lg  max-w-[340px]"
              />
            </div>
          </Tilt>
        </div>
      }
      {isMobileUser &&
        <div className="flex flex-wrap justify-center w-full max-w-6xl gap-8 py-10 xl:justify-between">
          <div>
            <img
              src="/cards/artist.png"
              alt="Artist card"
              className="rounded-lg max-w-[340px]"
            />
          </div>
          <div>
            <img
              src="/cards/musician.png"
              alt="Musician card"
              className="rounded-lg max-w-[340px]"
            />
          </div>
          <div>
            <img
              src="/cards/hacker.png"
              alt="Hacker card"
              className="rounded-lg  max-w-[340px]"
            />
          </div>
        </div>
      }

      <div className="flex justify-center leading-[3rem] tracking-wider mx-6">
        <div className="max-w-6xl px-6 py-6 mt-6 border-4 border-dashed border-pink">
          <p className="text-3xl neuebit">
            You can join the guild you identify with for exclusive swag and
            badges! You also get to compete against other guilds in friendly
            activities/challenges throughout Counterspell Toronto!
          </p>
        </div>
      </div>
    </div>
  );
}
