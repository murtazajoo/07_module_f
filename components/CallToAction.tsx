"use client"


import { useResponsiveImage } from '@/hooks/useResponsiveImage';
import { useState, useRef, useEffect } from 'react';

export default function CallToAction() {
  const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { getImagePath } = useResponsiveImage();


  useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;


    const centeredX = x - 80; 
    const centeredY = y - 20; 

    setGradientPosition({ x: centeredX, y: centeredY });
  };

  const handleMouseLeave = () => {
    setGradientPosition({ x: 0, y: 0 });
  };
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseleave", handleMouseLeave);



  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
  };
}, []);

  return (
    <div className="bg-gray-100  p-8 relative min-h-screen grid content-center w-full items-center justify-center"
          style={{
        backgroundImage: `url(${getImagePath('cover.jpg')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <div
        ref={containerRef}
        className="rounded-xl hover:scale-105 group w-70 h-24 flex relative justify-center items-center overflow-hidden cursor-pointer"
      >
        <div 
          className="w-60    group-hover:opacity-100 opacity-0 h-20 bg-gradient-to-r absolute blur-sm from-amber-300 via-orange-400 to-yellow-500  transition-all duration-200 ease-out "
          style={{
            left: `${gradientPosition.x}px`,
            top: `${gradientPosition.y}px`
          }}
        />
        <div className="w-[270px] h-[87px] rounded-lg flex opacity-95 justify-center items-center bg-white z-20 text-black">
          <span className="relative z-10">Explore Lyon</span>
        </div>
      </div>
    </div>
  );
}