"use client";

import { useState , useEffect } from "react";
import NavBar from "./componenets/navbar";
import { ScrollHook } from "./hooks/smoothscroll";



export default function HomePage() {
  ScrollHook(); // Cod for smooth scroll anim

//  Loading Screen
  const [Set , isSet] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => isSet(false), 1020)
    return () => clearTimeout (t)
  })
  // Slide Up anim
  const [Animated , setAnimated] = useState(false)
  useEffect(() => {
    const handleLoad = () => {
      const t = setTimeout(() => setAnimated(true), 1000);
      return () => clearTimeout (t);
    };

  if(document.readyState === "complete") {
    handleLoad();
  } else {
    window.addEventListener("load", handleLoad);
  }

  return () => {
    window.removeEventListener("load", handleLoad );
  }; });

  const [count, setCount] = useState(0);
  // Background lines
  useEffect(() => {
    const gap = 32; // px, distanța între linii
    const availableWidth = window.innerWidth; // Width 100%
    const numItems = Math.floor(availableWidth / gap);
    setCount(numItems);
  }, []);
  const items = Array.from({ length: count });


  // DE FACUT CAND AI CHEF (SOON)
  const [active , setActive] = useState(true)

  return(
    <>
    {active ? (
        <div className={`w-full h-screen relative bg-[#0e100f2f] ${!Animated ? "overflow-hidden" : "" }`}>
          {Animated ? (<NavBar animated={Animated} Active={setActive}  />): (<div></div>)}
          {Set && (
            <div className= {`w-full h-screen bg-[#0E100F] flex justify-center items-center absolute top-0 left-0 z-[110] ${Animated ? "slide-up" :"opacity-0"} ${!Set ? "opacity-0" : "opacity-100"} `}>
              <svg width="312" height="314" viewBox="0 0 312 314" fill="none" xmlns="http://www.w3.org/2000/svg" className="spin_log scale-90">
                  <path d="M153.098 18.7977C169.779 8.89671 191.329 14.3931 201.23 31.0742C213.324 51.451 202.286 78.1804 180.188 86.7338C134.751 104.321 72.2026 138.163 76.8669 190.108C81.7044 243.98 47.1087 189.929 23.4154 147.726C11.0761 125.748 19.1496 98.3025 40.8248 85.4373L153.098 18.7977Z" fill="#A374FF"/>
                  <path d="M158.902 295.166C142.221 305.067 120.672 299.571 110.771 282.89C98.6761 262.513 109.714 235.783 131.812 227.23C177.249 209.643 239.798 175.8 235.133 123.856C230.296 69.9839 264.892 124.035 288.585 166.237C300.924 188.216 292.851 215.661 271.175 228.526L158.902 295.166Z" fill="#FFD074"/>
                  <path d="M157.041 190.307C143.172 192.752 128.828 177.145 126.373 163.221C123.918 149.297 132.06 129.725 145.929 127.279C159.799 124.834 174.143 140.442 176.598 154.366C179.053 168.29 170.911 187.862 157.041 190.307Z" fill="#17F1D1"/>
              </svg>
            </div>
          )}
            <div className="w-full h-screen bg-gradient-to-l from-[#000000] via-[#0E100F] to-[#000000] flex items-center justify-center">
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0 flex flex-row">
                {items.map((_, index) => (
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
                <h1 className={`text-5xl md:text-6xl font-bold text-[#17F1D1] ${Animated ? "popup-text" : " "} `}>Semnale,<br />
                  <span className="text-[#A374FF]">Trading de Top</span><br />
                  <span className="text-[#FFFFE3]">& Profit Real,</span><br />
                  <span className="text-[#FFD074]">Transparent</span>
                </h1>
                <p className={`max-w-[90%] md:max-w-[45%] mx-auto text-center text-[#D0D0D0] text-xs ${Animated ? "popup-text2" : " "} `}>Eu sunt Sabin , trader profesionist cu experienţă pe pieţele internaţionale.  
                Îţi ofer semnale validate zilnic pe Telegram, strategii care îţi protejează capitalul şi îţi maximizează potenţialul de creştere. Fără promisiuni false  doar rezultate măsurabile şi suport autentic.</p>
                <div className="flex flex-row gap-4 items-center justify-center">
                  <button className={`bg-[#0E100F] border border-[#1E1E1E] px-6 py-2 text-xs text-[#FFFFE3] rounded-xl rotate-3 hover:-rotate-1 hover:scale-105 hover:translate-x-[2px] hover:translate-y-[1px] hover:cursor-pointer transition-all duration-200 ${Animated ? "opacity_object" : " " }`}>Join us now!</button>
                  <button className={`px-6 py-2 text-xs text-[#FFFFE3] -rotate-3 hover:-rotate-1 hover:scale-105 hover:-translate-x-[2px] hover:-translate-y-[1px] hover:cursor-pointer transition-all duration-200 ${Animated ? "opacity_object" : " " }`}>See more →</button>
                </div>
              </div>
            </div>

              <section className="w-full h-screen items-center justify-center bg-[#0E100F]">
                <div className="grid grid-cols-9 grid-rows-6 gap-0 max-w-[80%] mx-auto">
                  <div className="col-start-1 col-end-4 row-start-1 row-end-4 bg-red-300">div1</div>
                  <div className="col-start-4 col-end-7 row-start-1 row-end-4 bg-blue-300">div2</div>
                  <div className="col-start-1 col-end-7 row-start-4 row-end-7 bg-green-300">div3</div>
                  <div className="col-start-7 col-end-10 row-start-1 row-end-7 bg-yellow-300">div4</div>
                </div>
              </section>
          </div>
    ) : (
      <div>NOTHING</div>
    )}
    </>
  );
}