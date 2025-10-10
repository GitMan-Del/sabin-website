"use client"
import { useEffect } from "react"
import Lenis from '@studio-freight/lenis';
// Asta e inizializare pentru SMOOTH scroll
export const ScrollHook = () => {

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            smoothWheel: true,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
        });

        const raf = (time: number) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    });
}
    