"use client";

import React from "react";
import { ServiceCards } from "./ServiceCards";

const Services = () => {
  return (
    <div className="flex w-full flex-wrap">
      <div className="relative flex w-full">
        <div className="before:bg-gradient-radial after:bg-gradient-conic absolute left-[10%] top-[20%] z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-to-br before:from-blue-300 before:to-transparent before:opacity-70 before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[480px] after:w-full after:translate-x-1/3 after:from-sky-200 after:via-blue-200 after:opacity-40 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-50 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]"></div>
        <h2 className="relative z-20 bg-clip-text py-8 pt-0 text-2xl font-bold text-black dark:text-white sm:text-4xl">
          Our Services
        </h2>
      </div>
      <div>
        <ServiceCards />
      </div>
    </div>
  );
};

export default Services;
