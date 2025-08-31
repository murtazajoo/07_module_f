'use client';

import { useRef, useEffect } from 'react';

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.pause();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            video.play().catch(console.error);
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    const handleVisibilityChange = () => {
      if (document.hidden) {
        video.pause();
      } else {
        const rect = video.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;
        if (isInView) {
          video.play().catch(console.error);
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <section className="py-16 ">

          <video
            ref={videoRef}
            className=" w-full h-full object-cover"
            src="/videos/lyon.mp4"
            poster="/images/video-poster.jpg"
            muted
            loop
            playsInline
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
    </section>
  );
}
