'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useResponsiveImage } from '../hooks/useResponsiveImage';

interface Event {
  id: number;
  title: string;
  image: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Lyon accueille la finale mondiale des Worldskills 2024",
    image: "worldskills-2024-p.jpg"
  },
  {
    id: 2,
    title: "Forum des associations 2024",
    image: "fda-p.jpg"
  },
  {
    id: 3,
    title: "Lyon Kayak",
    image: "lyon-kayak-p-0.jpg"
  },
  {
    id: 4,
    title: "La semaine bleue 2024",
    image: "semaine-bleue-2024-p.jpg"
  },
  {
    id: 5,
    title: "Le Village des Métiers",
    image: "village-des-metiers-p.jpg"
  },
  {
    id: 6,
    title: "Les Journées Portes Ouvertes des Entreprises",
    image: "journees_portes_ouvertes_entreprises_2023_p.jpg"
  }
];

export default function LatestEvents() {
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null);
  const { getImagePath } = useResponsiveImage();

  return (
    <section id="events" className="py-16 ">
      <div className="container max-w-2xl mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-12 text-gray-800">
          Latest Events
        </h2>
        
        <div className="relative border p-5">
          <div className="overflow-x-auto ">
            <div className="flex space-x-2 w-max py-5">
              {events.map((event) => (
                <div
                  key={event.id}
                  className={`  overflow-hidden transition-all duration-300 cursor-pointer relative flex-shrink-0 w-80 ${
                    hoveredEvent === event.id
                      ? 'transform scale-105 shadow-[0_5px_15px_rgba(0,0,0,0.3)]'
                      : ''
                  }`}
                  onMouseEnter={() => setHoveredEvent(event.id)}
                  onMouseLeave={() => setHoveredEvent(null)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Learn more about ${event.title}`}
                >
                  <div 
                    className={`absolute -inset-8 opacity-0 transition-opacity duration-700 pointer-events-none z-10 ${
                      hoveredEvent === event.id ? 'opacity-100' : ''
                    }`}
                    style={{
                      background: hoveredEvent === event.id 
                        ? 'linear-gradient(35deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)'
                        : 'none',
                      animation: hoveredEvent === event.id ? 'light-effect 1.5s ease-in-out infinite' : 'none'
                    }}
                  ></div>
                  
                  <Image
                    src={getImagePath(event.image)}
                    alt={"This is an Image for "+event.title}
                    width={320}
                    height={192}
                    className="w-full h-48 object-cover "
                  />
                  
                  <div className="p-6 relative z-20">

                    <h3 className="font-bold text-xl  text-gray-800">
                      {event.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
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
