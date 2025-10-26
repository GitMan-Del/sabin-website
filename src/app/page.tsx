"use client";

import { useState, useEffect } from "react";
import NavBar from "./componenets/navbar";
import { ScrollHook } from "./hooks/smoothscroll";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  ScrollHook();

  // Loading Screen
  const [Set, isSet] = useState(true);
  useEffect(() => {
    // Ascunde loading dupa 1020ms
    const t = setTimeout(() => isSet(false), 1020);
    return () => clearTimeout(t);
  }, []);

  // Slide Up anim
  const [Animated, setAnimated] = useState(false);
  useEffect(() => {
    const handleLoad = () => {
      // Activeaza animatia dupa 1000ms
      const t = setTimeout(() => setAnimated(true), 1000);
      return () => clearTimeout(t);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  // Background lines
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (typeof window === "undefined") return;

    const gap = 32;

    const updateLines = () => {
      // Calculeaza numarul de linii pe latimea ecranului
      const availableWidth = window.innerWidth;
      const numItems = Math.floor(availableWidth / gap);
      setCount(numItems);
    };

    updateLines(); // apel initial
    window.addEventListener("resize", updateLines);

    return () => window.removeEventListener("resize", updateLines);
  }, []);

  const lines = Array.from({ length: count });

  // Meniu Navbar
  const [active, setActive] = useState(true);

  return (
    <>
      {!active && (
        // NavBar Menu Mobile
        <div className=" w-full h-screen absolute top-0 left-0 p-10 ">
          <div className="w-10 h-10 rounded-full backdrop-blur-2xl bg-white/20 flex items-center justify-center">
            <svg
              onClick={() => setActive((prev) => !prev)}
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
            >
              <path
                fill="#FFFFE3"
                d="M8 19a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3a1 1 0 0 0 0-2a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5a1 1 0 0 0 0-2Zm7.71-3.29a1 1 0 0 0 0-1.42L13.41 12l2.3-2.29a1 1 0 0 0-1.42-1.42L12 10.59l-2.29-2.3a1 1 0 0 0-1.42 1.42l2.3 2.29l-2.3 2.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l2.29-2.3l2.29 2.3a1 1 0 0 0 1.42 0ZM16 3a1 1 0 0 0 0 2a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3a1 1 0 0 0 0 2a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5Z"
              />
            </svg>
          </div>
          <ul className="flex flex-col gap-5 items-start justify-center z-50 w-full h-full text-white">
            <li className="hover:-translate-x-[2px] hover:-translate-y-[1px] duration-200 ">
              <Link
                href="#"
                className=" font-medium hover:text-[#A374FF] cursor-pointer transition-colors text-xs"
              >
                Home
              </Link>
            </li>
            <li className="hover:-translate-x-[2px] hover:-translate-y-[1px] duration-200">
              <Link
                href="#"
                className=" font-medium hover:text-[#17F1D1] cursor-pointer transition-colors text-xs"
              >
                Plans
              </Link>
            </li>
            <li className="hover:-translate-x-[1px] hover:-translate-y-[2px] duration-200">
              <Link
                href="#"
                className=" font-medium hover:text-[#FFD074] cursor-pointer transition-colors text-xs"
              >
                Signals
              </Link>
            </li>
            <li className=" hover:-translate-x-[2px] hover:-translate-y-[1px] duration-200">
              <Link
                href="#"
                className=" font-medium hover:text-[#A374FF] cursor-pointer transition-colors text-xs"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
      {/* Aici ai Animatia de NAVABAR pe tlf */}
      <div
        className={`hero w-full h-screen relative bg-[#0e100f2f] ${
          active
            ? ""
            : "menuSlide translate-x-[250px] duration-300 rounded-2xl transition-all overflow-auto z-[100]"
        }  ${!Animated ? "overflow-hidden" : ""}
       
          `}
      >
        <button
          onClick={() => setActive(true)}
          className={`${
            active ? "hidden" : "absolute top-0 left-0 w-full h-full z-50"
          }`}
        ></button>
        {Animated ? <NavBar animated={Animated} Active={setActive} /> : <></>}
        {Set && (
          <div
            className={`w-full h-screen bg-[#0E100F] flex justify-center items-center absolute top-0 left-0 z-[110] ${
              Animated ? "slide-up" : "opacity-0"
            } ${!Set ? "opacity-0" : "opacity-100"} `}
          >
            <svg
              width="312"
              height="314"
              viewBox="0 0 312 314"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="spin_log scale-90"
            >
              <path
                d="M153.098 18.7977C169.779 8.89671 191.329 14.3931 201.23 31.0742C213.324 51.451 202.286 78.1804 180.188 86.7338C134.751 104.321 72.2026 138.163 76.8669 190.108C81.7044 243.98 47.1087 189.929 23.4154 147.726C11.0761 125.748 19.1496 98.3025 40.8248 85.4373L153.098 18.7977Z"
                fill="#A374FF"
              />
              <path
                d="M158.902 295.166C142.221 305.067 120.672 299.571 110.771 282.89C98.6761 262.513 109.714 235.783 131.812 227.23C177.249 209.643 239.798 175.8 235.133 123.856C230.296 69.9839 264.892 124.035 288.585 166.237C300.924 188.216 292.851 215.661 271.175 228.526L158.902 295.166Z"
                fill="#FFD074"
              />
              <path
                d="M157.041 190.307C143.172 192.752 128.828 177.145 126.373 163.221C123.918 149.297 132.06 129.725 145.929 127.279C159.799 124.834 174.143 140.442 176.598 154.366C179.053 168.29 170.911 187.862 157.041 190.307Z"
                fill="#17F1D1"
              />
            </svg>
          </div>
        )}
        <div
          className={`w-full h-[105vh] bg-gradient-to-l from-[#000000] via-[#0E100F]/10 to-[#000000] flex items-center justify-center`}
        >
          <div className="absolute inset-0 w-full h-full pointer-events-none z-0 flex flex-row">
            {lines.map((_, index) => (
              <div
                key={index}
                className="h-full bg-[#0e100f2f] bg-gradient-to-b from-[#0e100f2f] to-[#15171606]"
                style={{
                  width: "2px",
                  marginLeft: index === 0 ? 0 : "30px", // gap - line width
                }}
              ></div>
            ))}
          </div>
          <div className="flex flex-col gap-3 text-center z-30">
            <h1
              className={`text-5xl md:text-6xl font-bold text-[#17F1D1] ${
                Animated ? "popup-text" : " "
              } `}
            >
              Semnale,
              <br />
              <span className="text-[#A374FF]">Trading de Top</span>
              <br />
              <span className="text-[#FFFFE3]">& Profit Real,</span>
              <br />
              <span className="text-[#FFD074]">Transparent</span>
            </h1>
            <p
              className={`max-w-[90%] md:max-w-[45%] mx-auto text-center text-[#D0D0D0] text-xs ${
                Animated ? "popup-text2" : " "
              } `}
            >
              Sunt Sabin, trader profesionist cu experiență internațională. Ofer
              semnale validate zilnic pe Telegram, strategii de protecție a
              capitalului și creștere sustenabilă , fără promisiuni, doar
              performanță demonstrată.
            </p>
            <div className="flex flex-row gap-4 items-center justify-center">
              <button
                className={`bg-[#0E100F] border border-[#1E1E1E] px-6 py-2 text-xs text-[#FFFFE3] rounded-xl rotate-3 hover:-rotate-1 hover:scale-105 hover:translate-x-[2px] hover:translate-y-[1px] hover:cursor-pointer transition-all duration-200 ${
                  Animated ? "opacity_object" : " "
                }`}
              >
                Join us now!
              </button>
              <button
                className={`px-6 py-2 text-xs text-[#FFFFE3] -rotate-3 hover:-rotate-1 hover:scale-105 hover:-translate-x-[2px] hover:-translate-y-[1px] hover:cursor-pointer transition-all duration-200 ${
                  Animated ? "opacity_object" : " "
                }`}
              >
                See more →
              </button>
            </div>
          </div>
        </div>

        <section className="w-full text-[#FFFFE3] h-[90vh] lg:p-20 px-5 py-30">
          <div className="flex w-full flex-col md:flex-row gap-3 mb-5 justify-between lg:items-end items-center">
            <h2 className="font-semibold md:text-5xl text-4xl max-w-[400px]">
              <span className="text-[#A374FF]">Clienți mulțumiți,</span> <br />{" "}
              rezultate dovedite
            </h2>
            <p className=" md:max-w-[20%] text-center md:text-right text-[#D0D0D0] md:text-md text-xs">
              Peste 500 de clienți au ales serviciile noastre și 95% dintre ei
              sunt complet satisfăcuți. Descoperă ce spun despre noi.
            </p>
          </div>

          <div className="w-full h-full flex md:flex-row flex-col gap-5 ">
            {/* Stânga: Grid 4x6 */}
            <div className="grid grid-cols-4 grid-rows-6 gap-5 flex-1 min-h-[500px]">
              {/* 1: Partners (2x2) - col 1-2, row 1-2 */}
              <div className="col-span-2 row-auto bg-[#151716]/30 border border-[#151716] rounded-2xl flex items-center justify-between p-3  ">
                <div className="flex items-center gap-2">
                <Image
                  src="/og-image.png"
                  width={20}
                  height={20}
                  alt="Partner 1"
                  className="rounded-full"
                />
                <Image
                  src="/og-image.png"
                  width={40}
                  height={40}
                  alt="Partner 2"
                  className="rounded-full"
                />
                <Image
                  src="/og-image.png"
                  width={50}
                  height={50}
                  alt="Partner 3"
                  className="rounded-full"
                />
                <Image
                  src="/og-image.png"
                  width={30}
                  height={30}
                  alt="Partner 4"
                  className="rounded-full"
                />
                  </div>

                <p className="uppercase text-xs text-gray-400">40+ Parteners</p>
              </div>

              {/* 2: Tall content (2x4) - col 3-4, row 1-4 */}
              <div className="col-span-2 row-span-5 col-start-3 row-start-1 bg-[#151716]/30 border border-[#151716] rounded-2xl p-4">
                <p className="text-white">Tall Content (2)</p>
              </div>

              {/* 3: Bottom right (2x2) - col 3-4, row 5-6 */}
              <div className="col-span-2 row-span-1 col-start-3 row-start-0 bg-[#151716]/30 border border-[#151716] rounded-2xl p-4">
                <p className="text-white">Bottom Right (3)</p>
              </div>

              {/* 4: Left bottom (2x4) - col 1-2, row 3-6 */}
              <div className="col-span-2 row-span-5 col-start-1 row-start-2 bg-[#151716]/30 border border-[#151716] rounded-2xl p-4">
                <p className="text-white">Left Bottom (4)</p>
              </div>
            </div>

            {/* Dreapta: Amber block */}
            <div className="flex-1 bg-amber-500 rounded-2xl"></div>
          </div>
        </section>

        <section className="h-screen w-full"></section>
      </div>
    </>
  );
}
