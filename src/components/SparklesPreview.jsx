import React from "react";
import { SparklesCore } from "./ui/sparkles";
import ShinyText from "./ShinyText/ShinyText"


export function SparklesPreview() {
  return (
    <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20 leading-[1.1]">
      <ShinyText text={"RESUMIFY"} speed={2}/>
      </h1>

      <div className="w-[40rem] h-40 relative">
        {/* Gradient bars */}
          <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[4px] w-full blur-xl" />
          <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-full" />

          {/* Super wide glowing blue line */}
          <div className="absolute left-0 right-0 mx-auto top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[6px] w-full blur-2xl" />
          <div className="absolute left-0 right-0 mx-auto top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[2px] w-full" />

        {/* Sparkles core */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial mask to fade edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
      </div>
    </div>
  );
}
