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
          className="relative flex flex-col justify-center text-center bg-top bg-no-repeat bg-cover select-none z-0 overflow-x-clip"
          style={{ backgroundImage: `url(/hero/bg5.png)` }}
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
  return (
    <>
      <div className="flex justify-center">
        <div
          className="relative z-10 w-full max-w-2xl 2xl:max-w-6xl"
        >
          <img
            src="/billboard.png"
            alt="Billboard"
            className="-z-10 w-full h-auto mt-[8%] lg:mt-[19%] md:scale-[110%] lg:scale-[140%]"
          />
          <img
            src="/title.png"
            alt="Counterspell"
            className="absolute h-auto top-[12%] scale-[95%] lg:top-[12%] w-[70%] lg:scale-[115%] right-[15%]"
          />
          <img
            src="/smoke.gif"
            alt="Smoke"
            className="absolute h-auto top-0 lg:top-[5%] w-full lg:scale-[130%] translate-x-[1%] hue-rot"
          />

          <div className="hidden absolute top-[90%] lg:top-[145%] left-[9%] w-[80%] lg:scale-[130%] bg-[#090808] h-screen" />

          <div className="flex items-center justify-center text-center">
            <div className="absolute top-[41%] lg:top-[43%] text-[60%] sm:text-[80%] md:text-[100%] lg:text-[140%] tracking-wide">
              <p className="text-[#CFD8ED] retro">
                A BEGINNER FRIENDLY GAME JAM
              </p>
              <p className="text-pink retro text-[90%] sm:text-[100%] lg:text-[100%] mt-2">
                NOVEMBER 23, 2024 • TAMPA, FL
              </p>
              <p className="text-pink retro text-[90%] sm:text-[100%] lg:text-[100%] mt-2">
                <a href="https://maps.app.goo.gl/QawPhC5xhL8URuzs5">AMROC FAB LAB </a>• 8:30AM - 8:30PM 
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="-z-10 translate-y-[35vw] md:translate-y-[200px] translate-x-[50vw] 2xl:translate-x-[120vw] scale-[300%] md:scale-[250%] 2xl:scale-[350%]">
        <img
          className="absolute bottom-0 bg-no-repeat -z-10 -mb-[60px] 2xl:-mb-[20px]"
          src="/hero/bg1.png"
          alt=""
        />
        <img
          className="absolute bottom-0 -z-20 -mb-[45px] 2xl:-mb-[10px]"
          src="/hero/bg2.png"
          alt=""
        />
        <img
          className="absolute bottom-0 -z-30 -mb-[25px] 2xl:mb-0 2xl:bottom-[10px]"
          src="/hero/bg3.png"
          alt=""
        />
        <img
          className="absolute bottom-0 -z-40 2xl:bottom-[40px]"
          src="/hero/bg4.png"
          alt=""
        />
      </div>
    </>
  );
}
