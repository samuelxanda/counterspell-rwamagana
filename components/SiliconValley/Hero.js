import React, { useEffect, useState } from "react";
import Banner from "@hackclub/banner";

export default function Hero() {
  return (
    <>
      <div className="absolute top-0 left-0 w-[20%] md:w-40 2xl:w-64">
        <Banner style={{ width: "100%" }} />
      </div>
      <div className="min-h-screen">
        <div
          className="relative flex flex-col justify-center text-center bg-top bg-no-repeat bg-cover pointer-events-none select-none -z-10 overflow-x-clip"
          style={{ backgroundImage: `url(/city/silicon-valley/hero/bg5.png)` }}
        >
          <HeroScroll />
        </div>
        <div className="absolute h-auto bottom-8 left-0 right-0 z-[50]">
          <div className="flex justify-center w-full">
            <img src="/down.png" alt="" className="w-12 h-auto bobbing" />
          </div>
        </div>
      </div>
    </>
  );
}

function HeroScroll() {
  const [scrollY, setScrollY] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  return (
    <>
      <div className="flex justify-center">
        <div
          className="relative z-10 w-full max-w-2xl 2xl:max-w-5xl"
          style={{
            transform: `translateY(${
              screenWidth > 640 ? (scrollY * 5) / 20 : 0
            }px)`,
          }}
        >
          <img
            src="/city/silicon-valley/billboard.png"
            alt="Billboard"
            className="w-full h-auto mt-[2%] lg:mt-[15%] lg:scale-[120%]"
          />
          <img
            src="/city/silicon-valley/title.png"
            alt="Counterspell"
            className="absolute h-auto top-[10%] lg:top-[15%] w-[65%] lg:scale-[120%] right-[17%]"
          />
          <img
            src="/smoke.gif"
            alt="Smoke"
            className="absolute h-auto top-0 lg:top-[3%] w-full lg:scale-[120%] translate-x-[1%] hue-rot"
          />

          <div className="hidden absolute top-[85%] lg:top-[140%] left-[9%] w-[80%] lg:scale-[120%] bg-[#090808] h-screen" />

          <div className="flex items-center justify-center text-center">
            <div className="z-50 absolute top-[40%] lg:top-[44%] text-[55%] sm:text-[75%] md:text-[95%] lg:text-[130%] tracking-wide">
              <p className="text-[#CFD8ED] retro">
                A BEGINNER FRIENDLY GAME JAM
              </p>
              <p className="text-pink retro text-[75%] sm:text-[80%] lg:text-[90%] mt-2">
                NOV 23-24 • Plug and Play Tech Center • 9 AM - 5 PM
              </p>
              <CountdownTimer targetDate="2024-11-23T09:00:00" />
            </div>
          </div>
        </div>
      </div>
      <div className="translate-y-[35vw] md:translate-y-[200px] translate-x-[50vw] 2xl:translate-x-[120vw] scale-[300%] md:scale-[250%] 2xl:scale-[350%]">
        <img
          className="absolute bottom-0 bg-no-repeat z-20 -mb-[60px] 2xl:-mb-[20px]"
          style={{
            transform: `translateY(${
              screenWidth > 640 ? (scrollY * 1) / 20 : 0
            }px)`,
          }}
          src="/city/silicon-valley/hero/bg1.png"
          alt=""
        />
        <img
          className="absolute bottom-0 -z-20 -mb-[45px] 2xl:-mb-[10px]"
          style={{
            transform: `translateY(${
              screenWidth > 640 ? (scrollY * 2) / 20 : 0
            }px)`,
          }}
          src="/city/silicon-valley/hero/bg2.png"
          alt=""
        />
        <img
          className="absolute bottom-0 -z-30 -mb-[25px] 2xl:mb-0 2xl:bottom-[10px]"
          style={{
            transform: `translateY(${
              screenWidth > 640 ? (scrollY * 3) / 20 : 0
            }px)`,
          }}
          src="/city/silicon-valley/hero/bg3.png"
          alt=""
        />
        <img
          className="absolute bottom-0 -z-40 2xl:bottom-[40px]"
          style={{
            transform: `translateY(${
              screenWidth > 640 ? (scrollY * 4) / 20 : 0
            }px)`,
          }}
          src="/city/silicon-valley/hero/bg4.png"
          alt=""
        />
      </div>
    </>
  );
}

function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    function calculateTimeLeft() {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return timeLeft;
    }

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const formatTime = (time) => {
    return time?.toString().padStart(2, "0") ?? "00";
  };

  if (!timeLeft) return null; // Don't render anything until after first client-side render

  return (
    <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 retro">
      {Object.keys(timeLeft).length ? (
        <div className="flex justify-center space-x-2 sm:space-x-4">
          <div className="flex flex-col items-center">
            <span>{formatTime(timeLeft.days)}</span>
            <span className="text-[8px] sm:text-xs">DAYS</span>
          </div>
          <span>:</span>
          <div className="flex flex-col items-center">
            <span>{formatTime(timeLeft.hours)}</span>
            <span className="text-[8px] sm:text-xs">HOURS</span>
          </div>
          <span>:</span>
          <div className="flex flex-col items-center">
            <span>{formatTime(timeLeft.minutes)}</span>
            <span className="text-[8px] sm:text-xs">MINS</span>
          </div>
          <span>:</span>
          <div className="flex flex-col items-center">
            <span>{formatTime(timeLeft.seconds)}</span>
            <span className="text-[8px] sm:text-xs">SECS</span>
          </div>
        </div>
      ) : (
        <span>Time's up!</span>
      )}
    </div>
  );
}
