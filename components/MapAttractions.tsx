'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useResponsiveImage } from '../hooks/useResponsiveImage';

interface Attraction {
  id: number;
  name: string;
  image: string;
  mapPosition: { x: number; y: number };
}

const attractions: Attraction[] = [
  {
    id: 1,
    name: "Basilique Notre-Dame de Fourvière",
    image: "attraction-a.jpg",
    mapPosition: { x: 25, y: 30 }
  },
  {
    id: 2,
    name: "Vieux Lyon",
    image: "attraction-b.jpg",
    mapPosition: { x: 35, y: 60 }
  },
  {
    id: 3,
    name: "Musée des Confluences",
    image: "attraction-c.jpg",
    mapPosition: { x: 70, y: 80 }
  },
   {
    id: 4,
    name: "All Attractions",
    image: "all-attractions.jpg",
    mapPosition: { x: 70, y: 80 }
  }
];

export default function MapAttractions() {
  const [hoveredAttraction, setHoveredAttraction] = useState<number | null>(null);
  const [hoveredSpot, setHoveredSpot] = useState<number | null>(null);
  const { getImagePath } = useResponsiveImage();

  return (
    <section id="attractions" className="py-16 ">
             <h2 className="text-6xl font-bold  text-center mb-12 text-gray-950">
          Map Attractions
        </h2>
      <div className="container mx-auto p-10 rounded"
      
      
      style={{
        backgroundImage: `url(${getImagePath('lyon-map.jpg')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
 
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-6">
            {attractions.map((attraction) => (
              <div
                key={attraction.id}
                className={`bg-white p-2 overflow-hidden  shadow-md transition-all duration-300 cursor-pointer relative ${
                  hoveredAttraction === attraction.id || hoveredSpot === attraction.id
                    ? 'transform scale-105 shadow-[0_5px_5px_rgba(0,0,0,0.3)]'
                    : ''
                }`}
                onMouseEnter={() => setHoveredAttraction(attraction.id)}
                onMouseLeave={() => setHoveredAttraction(null)}
                role="button"
                tabIndex={0}
                aria-label={`Learn more about ${attraction.name}`}
              >
                <div 
                  className={`absolute inset-0 opacity-0 transition-opacity duration-700 pointer-events-none ${
                    hoveredAttraction === attraction.id ? 'opacity-100' : ''
                  }`}
                  style={{
                    background: hoveredAttraction === attraction.id 
                      ? 'linear-gradient(30deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)'
                      : 'none',
                    animation: hoveredAttraction === attraction.id ? 'light-effect 1.5s ease-in-out infinite' : 'none'
                  }}
                ></div>
                
                <Image
                  src={getImagePath(attraction.image)}
                  alt={attraction.name}
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 relative z-10">
                  <h3 className="font-semibold text-black text-lg mb-2">{attraction.name}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="relative h-full">
            
            {attractions.map((attraction) => (
              <div
                key={`spot-${attraction.id}`}
                className="absolute w-8 h-8 grid place-items-center  bg-red-500 rounded-full border-2 border-white shadow-lg cursor-pointer hover:scale-125 transition-transform duration-200"
                style={{
                  left: `${attraction.mapPosition.x}%`,
                  top: `${attraction.mapPosition.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
                onMouseEnter={() => setHoveredSpot(attraction.id)}
                onMouseLeave={() => setHoveredSpot(null)}
                role="button"
                tabIndex={0}
                aria-label={`${attraction.name} location on map`}
              >
             {attraction.name[0]}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes light-effect {
          0% { transform: translateX(-100%) rotate(45deg); }
          100% { transform: translateX(300%) rotate(45deg); }
        }
      `}</style>
    </section>
  );
}
