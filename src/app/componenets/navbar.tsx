"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

type NavBarProps = {
    animated: boolean;
    Active: React.Dispatch<React.SetStateAction<boolean>>
}

export default function NavBar({ animated , Active }: NavBarProps) {
    const image = "/Logo.svg"  
    // Sistem de Scroll effect
    const [Scroll , isScroll] = useState(true)
    useEffect(() => {
        const HandleScroll = () => {
            isScroll(false)
            document.removeEventListener("scroll", HandleScroll);
        };
        
        document.addEventListener("scroll" , HandleScroll);

        return () => {
            document.removeEventListener("scroll" , HandleScroll)
        };
    }, []); 
    // SISTEM DE TEST
    return(
        <div className={` ${Scroll ? "bg-transparent backdrop-blur-none " : "bg-black/10 backdrop-blur-xs"} w-full h-20 border-b border-[#0E100F] fixed inset-0 text-white z-[100] ${animated ? "navbar-anim" : " "}`}>
            <div className="w-full h-full py-3 px-10 flex flex-row items-center justify-between">
                <div onClick={(() => Active(prev => !prev))}  className="md:hidden w-13 h-13 bg-[#0E100F]/20 border border-[#1E1E1E] rounded-full flex items-center justify-center hover:cursor-pointer">
                    <svg width="30" height="30" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="21" height="4" rx="2" fill="#A374FF"/>
                    <rect y="6" width="15" height="4" rx="2" fill="#17F1D1"/>
                    <rect y="12" width="9" height="4" rx="2" fill="white"/>
                    </svg>
                </div>
                
                <Image  src={image} alt="Logo" width={100} height={35} className="hidden md:block object-fill w-[100px] h-[35px]"/>
                <ul className="hidden  md:flex flex-row gap-8 items-center justify-center">
                    <li className="hover:-translate-x-[2px] hover:-translate-y-[1px] duration-200">
                        <Link href="#" className=" font-medium hover:text-[#A374FF] cursor-pointer transition-colors text-xs">Home</Link>
                    </li>
                    <li className="hover:-translate-x-[2px] hover:-translate-y-[1px] duration-200">
                        <Link href="#" className=" font-medium hover:text-[#17F1D1] cursor-pointer transition-colors text-xs">Plans</Link>
                    </li>
                    <li className="hover:-translate-x-[1px] hover:-translate-y-[2px] duration-200">
                        <Link href="#" className=" font-medium hover:text-[#FFD074] cursor-pointer transition-colors text-xs">Signals</Link>
                    </li>
                    <li className=" hover:-translate-x-[2px] hover:-translate-y-[1px] duration-200">
                        <Link href="#" className=" font-medium hover:text-[#A374FF] cursor-pointer transition-colors text-xs">Contact</Link>
                    </li>
                </ul>

                <button className="hidden md:block bg-translate border border-[#1E1E1E] px-6 py-2 text-xs text-[#FFFFE3] rounded-xl hover:-rotate-1 hover:scale-105 hover:-translate-x-[2px] hover:-translate-y-[1px] hover:cursor-pointer transition-all duration-200">Get Started</button>
            </div>
        </div>
    );
}