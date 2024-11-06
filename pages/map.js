import React, { useEffect, useRef, useState } from "react";
import useSound from "use-sound";
import Head from "next/head";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/Map"), { ssr:false });

export default function MapPage() {
  return (
    <>
      <div className="h-full w-full">
      <img
          src="/title.png"
          alt="Counterspell"
          className="absolute h-auto w-[250px] top-5 left-5 right-0"
          style={{ zIndex: 1 }}
        />
        <Map full={true}/>
      </div>
    </>
  );
}
